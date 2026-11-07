'use client'

import { AlertCircle, CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import { useActionState, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { submitEnquiry } from '@/app/actions/enquiry'
import {
  enquirySubjects,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryFields,
  type EnquiryState,
  type EnquirySubject,
} from '@/lib/enquiry'
import { cn } from '@/lib/utils'
import { ContactLink } from './contact-link'

type Props = {
  defaultSubject?: EnquirySubject
  /** Which page the form sits on, forwarded with the enquiry. */
  page: string
  id?: string
}

const fieldClass =
  'w-full rounded-lg border border-input bg-card px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-leaf focus-visible:ring-2 focus-visible:ring-leaf/30 focus-visible:outline-none aria-[invalid=true]:border-destructive'

export function EnquiryForm({ defaultSubject = 'general', page, id = 'enquiry-form' }: Props) {
  const t = useTranslations('form')
  const locale = useLocale()
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: 'idle' })
  const [clientErrors, setClientErrors] = useState<EnquiryErrors>({})
  const [formKey, setFormKey] = useState(0)
  const [successDismissed, setSuccessDismissed] = useState(false)

  const serverErrors = state.status === 'invalid' ? state.errors : {}
  const errors: EnquiryErrors = { ...serverErrors, ...clientErrors }
  const values: Partial<EnquiryFields> = 'values' in state ? state.values : {}

  if (state.status === 'success' && !successDismissed) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-2xl border border-leaf/30 bg-secondary p-6 md:p-8">
        <CheckCircle2 className="size-10 text-leaf" aria-hidden="true" />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold text-primary">{t('successTitle')}</h3>
          <p className="leading-relaxed text-muted-foreground">{t('successBody')}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSuccessDismissed(true)
            setFormKey((k) => k + 1)
          }}
          className="min-h-11 rounded-full border border-primary/20 bg-card px-5 font-semibold text-primary hover:border-leaf"
        >
          {t('sendAnother')}
        </button>
      </div>
    )
  }

  function validateBeforeSubmit(event: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget)
    const found = validateEnquiry({
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      district: String(data.get('district') ?? ''),
      language: String(data.get('language') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
    })
    setClientErrors(found)
    if (Object.keys(found).length > 0) {
      event.preventDefault()
      const first = Object.keys(found)[0]
      event.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
    } else {
      setSuccessDismissed(false)
    }
  }

  function clearError(field: keyof EnquiryFields) {
    if (clientErrors[field]) setClientErrors((e) => ({ ...e, [field]: undefined }))
  }

  const hasErrors = Object.values(errors).some(Boolean)

  return (
    <form
      key={formKey}
      id={id}
      action={action}
      onSubmit={validateBeforeSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm md:p-8"
    >
      <input type="hidden" name="page" value={page} />
      <div aria-hidden="true" className="hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {(state.status === 'error' || (hasErrors && state.status === 'invalid')) && (
        <div role="alert" className="flex gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm">
          <AlertCircle className="size-5 shrink-0 text-destructive" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-foreground">{state.status === 'error' ? t('errorTitle') : t('errorValidation')}</p>
            {state.status === 'error' && (
              <>
                <p className="leading-relaxed text-muted-foreground">
                  {state.reason === 'notConfigured' ? t('errorNotConfigured') : t('errorGeneric')}
                </p>
                <ContactLink
                  kind="whatsapp"
                  className="inline-flex w-fit items-center gap-1.5 font-semibold text-leaf underline-offset-4 hover:underline"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {locale === 'kn' ? 'ಸಂಪರ್ಕ ವಿವರಗಳು' : 'Contact details'}
                </ContactLink>
              </>
            )}
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('name')} required={t('required')} error={errors.name && t(`errors.${errors.name}`)} htmlFor={`${id}-name`}>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={values.name}
            placeholder={t('namePlaceholder')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            onInput={() => clearError('name')}
            className={fieldClass}
          />
        </Field>

        <Field
          label={t('phone')}
          required={t('required')}
          hint={t('phoneHint')}
          error={errors.phone && t(`errors.${errors.phone}`)}
          htmlFor={`${id}-phone`}
        >
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            defaultValue={values.phone}
            placeholder={t('phonePlaceholder')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id}-phone-error` : `${id}-phone-hint`}
            onInput={() => clearError('phone')}
            className={fieldClass}
          />
        </Field>

        <Field
          label={t('district')}
          required={t('required')}
          error={errors.district && t(`errors.${errors.district}`)}
          htmlFor={`${id}-district`}
        >
          <input
            id={`${id}-district`}
            name="district"
            type="text"
            autoComplete="address-level2"
            defaultValue={values.district}
            placeholder={t('districtPlaceholder')}
            aria-invalid={Boolean(errors.district)}
            aria-describedby={errors.district ? `${id}-district-error` : undefined}
            onInput={() => clearError('district')}
            className={fieldClass}
          />
        </Field>

        <Field
          label={t('subject')}
          required={t('required')}
          error={errors.subject && t(`errors.${errors.subject}`)}
          htmlFor={`${id}-subject`}
        >
          <select
            id={`${id}-subject`}
            name="subject"
            defaultValue={values.subject ?? defaultSubject}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? `${id}-subject-error` : undefined}
            onChange={() => clearError('subject')}
            className={cn(fieldClass, 'appearance-auto')}
          >
            {enquirySubjects.map((s) => (
              <option key={s} value={s}>
                {t(`subjects.${s}`)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset
        aria-invalid={Boolean(errors.language)}
        aria-describedby={errors.language ? `${id}-language-error` : undefined}
        className="flex flex-col gap-2"
      >
        <legend className="mb-2 text-sm font-semibold text-foreground">
          {t('language')} <span className="font-normal text-muted-foreground">({t('required')})</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {(['kn', 'en'] as const).map((lang) => (
            <label
              key={lang}
              className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-input bg-card px-4 has-[:checked]:border-leaf has-[:checked]:bg-secondary"
            >
              <input
                type="radio"
                name="language"
                value={lang}
                defaultChecked={(values.language ?? locale) === lang}
                onChange={() => clearError('language')}
                className="size-4 accent-leaf"
              />
              <span className="font-medium" lang={lang}>
                {lang === 'kn' ? t('languageKn') : t('languageEn')}
              </span>
            </label>
          ))}
        </div>
        {errors.language && (
          <p id={`${id}-language-error`} className="text-sm text-destructive">
            {t(`errors.${errors.language}`)}
          </p>
        )}
      </fieldset>

      <Field
        label={t('message')}
        required={t('required')}
        error={errors.message && t(`errors.${errors.message}`)}
        htmlFor={`${id}-message`}
      >
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          maxLength={1500}
          defaultValue={values.message}
          placeholder={t('messagePlaceholder')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          onInput={() => clearError('message')}
          className={cn(fieldClass, 'resize-y leading-relaxed')}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{t('privacyNote')}</p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-leaf px-7 font-semibold text-primary-foreground transition-colors hover:bg-primary disabled:opacity-70"
        >
          {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {pending ? t('sending') : t('submit')}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  required,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string
  required: string
  hint?: string
  error?: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
        {label} <span className="font-normal text-muted-foreground">({required})</span>
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${htmlFor}-hint`} className="text-xs text-muted-foreground">
            {hint}
          </p>
        )
      )}
    </div>
  )
}
