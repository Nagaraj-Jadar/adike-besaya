'use server'

import { normalizeIndianMobile, validateEnquiry, type EnquiryFields, type EnquiryState } from '@/lib/enquiry'

/**
 * Enquiries are forwarded as JSON to ENQUIRY_WEBHOOK_URL (e.g. a Google Sheets / Zapier / Make
 * webhook, or the business's own CRM). Until it is set, the form reports that online enquiries
 * are not connected instead of pretending to succeed.
 */
export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values: EnquiryFields = {
    name: String(formData.get('name') ?? '').slice(0, 120),
    phone: String(formData.get('phone') ?? '').slice(0, 20),
    district: String(formData.get('district') ?? '').slice(0, 80),
    language: String(formData.get('language') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(formData.get('message') ?? '').slice(0, 2000),
  }

  // Honeypot: real visitors never fill this hidden field.
  if (String(formData.get('company') ?? '')) return { status: 'success' }

  const errors = validateEnquiry(values)
  if (Object.keys(errors).length > 0) return { status: 'invalid', errors, values }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL
  if (!webhook) return { status: 'error', reason: 'notConfigured', values }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        name: values.name.trim(),
        district: values.district.trim(),
        message: values.message.trim(),
        phone: normalizeIndianMobile(values.phone),
        page: String(formData.get('page') ?? ''),
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return { status: 'success' }
  } catch (error) {
    console.error('Enquiry delivery failed:', error)
    return { status: 'error', reason: 'failed', values }
  }
}
