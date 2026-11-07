export const enquirySubjects = [
  'general',
  'soilTesting',
  'expertGuidance',
  'cropProblem',
  'products',
  'successStory',
  'other',
] as const

export type EnquirySubject = (typeof enquirySubjects)[number]

export type EnquiryFields = {
  name: string
  phone: string
  district: string
  language: string
  subject: string
  message: string
}

export type EnquiryErrorKey =
  | 'nameRequired'
  | 'nameShort'
  | 'phoneRequired'
  | 'phoneInvalid'
  | 'districtRequired'
  | 'languageRequired'
  | 'subjectRequired'
  | 'messageRequired'
  | 'messageShort'
  | 'messageLong'

export type EnquiryErrors = Partial<Record<keyof EnquiryFields, EnquiryErrorKey>>

/** Accepts 10-digit Indian mobiles with optional +91 / 91 / 0 prefix, spaces or dashes. */
export function normalizeIndianMobile(value: string): string | null {
  const digits = value.replace(/[\s\-()]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '')
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

export function validateEnquiry(fields: EnquiryFields): EnquiryErrors {
  const errors: EnquiryErrors = {}
  const name = fields.name.trim()
  if (!name) errors.name = 'nameRequired'
  else if (name.length < 2) errors.name = 'nameShort'

  if (!fields.phone.trim()) errors.phone = 'phoneRequired'
  else if (!normalizeIndianMobile(fields.phone)) errors.phone = 'phoneInvalid'

  if (!fields.district.trim()) errors.district = 'districtRequired'
  if (fields.language !== 'kn' && fields.language !== 'en') errors.language = 'languageRequired'
  if (!enquirySubjects.includes(fields.subject as EnquirySubject)) errors.subject = 'subjectRequired'

  const message = fields.message.trim()
  if (!message) errors.message = 'messageRequired'
  else if (message.length < 10) errors.message = 'messageShort'
  else if (message.length > 1500) errors.message = 'messageLong'

  return errors
}

export type EnquiryState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'invalid'; errors: EnquiryErrors; values: EnquiryFields }
  | { status: 'error'; reason: 'notConfigured' | 'failed'; values: EnquiryFields }
