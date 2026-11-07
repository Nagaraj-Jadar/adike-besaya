import { Camera, ClipboardList, MapPinned, MessageCircle, Phone, Stethoscope } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ContactLink } from '@/components/site/contact-link'
import { EnquiryForm } from '@/components/site/enquiry-form'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Expert Guidance', kn: 'ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನ' },
  intro: {
    en: 'Personalised support for your garden — from diagnosing a problem to planning nutrition for the season ahead.',
    kn: 'ನಿಮ್ಮ ತೋಟಕ್ಕೆ ವೈಯಕ್ತಿಕ ಬೆಂಬಲ — ಸಮಸ್ಯೆಯ ಪತ್ತೆಯಿಂದ ಮುಂದಿನ ಹಂಗಾಮಿನ ಪೋಷಕಾಂಶ ಯೋಜನೆಯವರೆಗೆ.',
  },
  servicesTitle: { en: 'How we can help', kn: 'ನಾವು ಹೇಗೆ ನೆರವಾಗುತ್ತೇವೆ' },
  services: [
    {
      icon: Stethoscope,
      title: { en: 'Problem diagnosis', kn: 'ಸಮಸ್ಯೆಯ ಪತ್ತೆ' },
      body: { en: 'Yellowing, nut fall, leaf spots or weak growth — we help find the cause.', kn: 'ಹಳದಿ ಎಲೆ, ಕಾಯಿ ಉದುರುವಿಕೆ, ಎಲೆ ಚುಕ್ಕೆ ಅಥವಾ ದುರ್ಬಲ ಬೆಳವಣಿಗೆ — ಕಾರಣ ಕಂಡುಹಿಡಿಯಲು ನೆರವಾಗುತ್ತೇವೆ.' },
    },
    {
      icon: ClipboardList,
      title: { en: 'Crop and nutrient advisory', kn: 'ಬೆಳೆ ಮತ್ತು ಪೋಷಕಾಂಶ ಸಲಹೆ' },
      body: { en: 'A season-wise plan based on your soil, palm age and garden conditions.', kn: 'ನಿಮ್ಮ ಮಣ್ಣು, ಮರಗಳ ವಯಸ್ಸು ಮತ್ತು ತೋಟದ ಸ್ಥಿತಿ ಆಧರಿಸಿದ ಹಂಗಾಮುವಾರು ಯೋಜನೆ.' },
    },
    {
      icon: MessageCircle,
      title: { en: 'WhatsApp consultation', kn: 'ವಾಟ್ಸ್‌ಆಪ್ ಸಮಾಲೋಚನೆ' },
      body: { en: 'Send photos and details from your garden and get guidance without travelling.', kn: 'ತೋಟದ ಫೋಟೋ ಮತ್ತು ವಿವರ ಕಳುಹಿಸಿ, ಎಲ್ಲಿಗೂ ಹೋಗದೆ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.' },
    },
    {
      icon: MapPinned,
      title: { en: 'Field visits', kn: 'ತೋಟ ಭೇಟಿ' },
      body: { en: 'For problems that need to be seen in person, where available in your area.', kn: 'ಸ್ಥಳದಲ್ಲೇ ನೋಡಬೇಕಾದ ಸಮಸ್ಯೆಗಳಿಗೆ — ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಲಭ್ಯವಿದ್ದಲ್ಲಿ.' },
    },
  ],
  prepareTitle: { en: 'Before you contact us', kn: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವ ಮುನ್ನ' },
  prepare: [
    { en: 'Clear photos of the affected palms, leaves, nuts or roots', kn: 'ಬಾಧಿತ ಮರ, ಎಲೆ, ಕಾಯಿ ಅಥವಾ ಬೇರಿನ ಸ್ಪಷ್ಟ ಫೋಟೋಗಳು' },
    { en: 'Your village or taluk and district', kn: 'ನಿಮ್ಮ ಊರು ಅಥವಾ ತಾಲ್ಲೂಕು ಮತ್ತು ಜಿಲ್ಲೆ' },
    { en: 'Approximate age and number of palms', kn: 'ಮರಗಳ ಅಂದಾಜು ವಯಸ್ಸು ಮತ್ತು ಸಂಖ್ಯೆ' },
    { en: 'What you have applied recently, and when', kn: 'ಇತ್ತೀಚೆಗೆ ಏನು ಹಾಕಿದ್ದೀರಿ, ಯಾವಾಗ' },
    { en: 'Your latest soil test report, if you have one', kn: 'ಇದ್ದರೆ, ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಮಣ್ಣು ಪರೀಕ್ಷಾ ವರದಿ' },
  ],
  fieldVisitNote: {
    en: 'Field visit coverage areas and any charges will be confirmed by Adike Besaya.',
    kn: 'ತೋಟ ಭೇಟಿಯ ವ್ಯಾಪ್ತಿ ಪ್ರದೇಶ ಮತ್ತು ಶುಲ್ಕದ ವಿವರಗಳನ್ನು ಅಡಿಕೆ ಬೇಸಾಯ ಖಚಿತಪಡಿಸಲಿದೆ.',
  },
  formTitle: { en: 'Request guidance', kn: 'ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ವಿನಂತಿಸಿ' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/expert-guidance', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function ExpertGuidancePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const kn = locale === 'kn'

  return (
    <>
      <PageHero
        image="expertConsultation"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.expertGuidance') }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ContactLink
            kind="whatsapp"
            message={kn ? 'ನಮಸ್ಕಾರ, ನನ್ನ ತೋಟಕ್ಕೆ ತಜ್ಞರ ಸಲಹೆ ಬೇಕಿದೆ.' : 'Hello, I would like expert guidance for my garden.'}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf px-6 font-semibold text-primary-foreground hover:bg-primary"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            {t('actions.whatsapp')}
          </ContactLink>
          <ContactLink
            kind="phone"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-card px-6 font-semibold text-primary hover:bg-secondary"
          >
            <Phone className="size-5" aria-hidden="true" />
            {t('actions.call')}
          </ContactLink>
        </div>
      </PageHero>

      <section aria-labelledby="services-title" className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 lg:px-6 lg:py-20">
        <h2 id="services-title" className="text-3xl font-bold tracking-tight text-primary">
          {pick(copy.servicesTitle, locale)}
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.services.map(({ icon: Icon, title, body }) => (
            <li key={title.en} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary">
                <Icon className="size-6 text-leaf" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-primary">{pick(title, locale)}</h3>
              <p className="leading-relaxed text-muted-foreground">{pick(body, locale)}</p>
            </li>
          ))}
        </ul>
        <PendingNote>{pick(copy.fieldVisitNote, locale)}</PendingNote>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-2 lg:gap-16 lg:px-6 lg:py-20">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.pestInspection.src}
                alt={images.pestInspection.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">{pick(copy.prepareTitle, locale)}</h2>
            <ul className="flex flex-col gap-3">
              {copy.prepare.map((item) => (
                <li key={item.en} className="flex gap-3">
                  <Camera className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
                  <span className="leading-relaxed">{pick(item, locale)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-primary">{pick(copy.formTitle, locale)}</h2>
            <EnquiryForm page="/expert-guidance" defaultSubject="expertGuidance" />
          </div>
        </div>
      </section>
    </>
  )
}
