import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ContactLink } from '@/components/site/contact-link'
import { EnquiryForm } from '@/components/site/enquiry-form'
import { JsonLd } from '@/components/site/json-ld'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { pageMetadata, siteUrl } from '@/lib/seo'
import { mailHref, siteConfig } from '@/lib/site'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Contact Us', kn: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' },
  intro: {
    en: 'WhatsApp is the quickest way to reach us. You can also call, email or send an enquiry below.',
    kn: 'ನಮ್ಮನ್ನು ತಲುಪಲು ವಾಟ್ಸ್‌ಆಪ್ ಅತ್ಯಂತ ತ್ವರಿತ ಮಾರ್ಗ. ಕರೆ, ಇಮೇಲ್ ಅಥವಾ ಕೆಳಗಿನ ವಿಚಾರಣೆ ನಮೂನೆಯ ಮೂಲಕವೂ ಸಂಪರ್ಕಿಸಬಹುದು.',
  },
  details: { en: 'Contact details', kn: 'ಸಂಪರ್ಕ ವಿವರಗಳು' },
  formTitle: { en: 'Send an enquiry', kn: 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ' },
  map: {
    en: 'A map will appear here once the office or store address is confirmed.',
    kn: 'ಕಚೇರಿ ಅಥವಾ ಮಳಿಗೆಯ ವಿಳಾಸ ಖಚಿತವಾದ ನಂತರ ಇಲ್ಲಿ ನಕ್ಷೆ ಕಾಣಿಸುತ್ತದೆ.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/contact', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const pending = t('common.notProvided')
  const hours = pick(siteConfig.hours, locale)
  const email = mailHref()

  const rows = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteConfig.whatsappNumber ? (
        <ContactLink kind="whatsapp" className="font-semibold text-leaf hover:underline">
          {t('actions.whatsapp')}
        </ContactLink>
      ) : null,
    },
    {
      icon: Phone,
      label: t('form.phone'),
      value: siteConfig.phone ? (
        <ContactLink kind="phone" className="font-semibold text-leaf hover:underline">
          {siteConfig.phone}
        </ContactLink>
      ) : null,
    },
    {
      icon: Mail,
      label: locale === 'kn' ? 'ಇಮೇಲ್' : 'Email',
      value: email ? (
        <a href={email} className="font-semibold text-leaf hover:underline">
          {siteConfig.email}
        </a>
      ) : null,
    },
    { icon: MapPin, label: locale === 'kn' ? 'ವಿಳಾಸ' : 'Address', value: siteConfig.address || null },
    { icon: Clock, label: locale === 'kn' ? 'ಕಾರ್ಯ ಸಮಯ' : 'Business hours', value: hours || null },
  ]

  return (
    <>
      <PageHero
        image="farmerMeeting"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.contact') }]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_520px] lg:gap-16 lg:px-6 lg:py-20">
        <section aria-labelledby="details-title" className="flex flex-col gap-6">
          <h2 id="details-title" className="text-2xl font-bold tracking-tight text-primary">
            {pick(copy.details, locale)}
          </h2>
          <dl className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Icon className="size-5 text-leaf" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="text-foreground">{value ?? <span className="text-muted-foreground italic">{pending}</span>}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-secondary p-6 text-center">
            <MapPin className="size-8 text-muted-foreground" aria-hidden="true" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{pick(copy.map, locale)}</p>
            <p className="text-sm font-medium">{siteConfig.location}</p>
          </div>
          {!siteConfig.whatsappNumber && <PendingNote>{t('common.pending')}</PendingNote>}
        </section>

        <section aria-labelledby="form-title" className="flex flex-col gap-4">
          <h2 id="form-title" className="text-2xl font-bold tracking-tight text-primary">
            {pick(copy.formTitle, locale)}
          </h2>
          <EnquiryForm page="/contact" />
        </section>
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          alternateName: siteConfig.nameKn,
          url: siteUrl,
          logo: `${siteUrl}${images.logo.src}`,
          telephone: siteConfig.phone || undefined,
          email: siteConfig.email || undefined,
          address: { '@type': 'PostalAddress', addressRegion: 'Karnataka', addressCountry: 'IN', streetAddress: siteConfig.address || undefined },
        }}
      />
    </>
  )
}
