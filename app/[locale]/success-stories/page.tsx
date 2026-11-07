import { MapPin, Quote, UserRound } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { EnquiryForm } from '@/components/site/enquiry-form'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { successStories } from '@/lib/data/media'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Farmer Success Stories', kn: 'ಬೆಳೆಗಾರರ ಯಶೋಗಾಥೆ' },
  intro: {
    en: 'Real experiences from arecanut farmers — the problem they faced, the guidance they received and what changed.',
    kn: 'ಅಡಿಕೆ ಬೆಳೆಗಾರರ ನೈಜ ಅನುಭವಗಳು — ಅವರು ಎದುರಿಸಿದ ಸಮಸ್ಯೆ, ಪಡೆದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಆದ ಬದಲಾವಣೆ.',
  },
  empty: {
    en: 'We are collecting verified stories from farmers we have worked with. Each story is published only with the farmer’s permission.',
    kn: 'ನಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಿದ ಬೆಳೆಗಾರರಿಂದ ಪರಿಶೀಲಿತ ಅನುಭವಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತಿದ್ದೇವೆ. ಪ್ರತಿಯೊಂದು ಅನುಭವವನ್ನು ಬೆಳೆಗಾರರ ಅನುಮತಿಯೊಂದಿಗೆ ಮಾತ್ರ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.',
  },
  challenge: { en: 'The challenge', kn: 'ಸಮಸ್ಯೆ' },
  guidance: { en: 'Guidance given', kn: 'ನೀಡಿದ ಮಾರ್ಗದರ್ಶನ' },
  result: { en: 'The result', kn: 'ಫಲಿತಾಂಶ' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/success-stories', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function SuccessStoriesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  return (
    <>
      <PageHero
        image="farmerMeeting"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.successStories') }]}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 lg:px-6 lg:py-20">
        {successStories.length === 0 ? (
          <>
            <PendingNote>{t('stories.placeholderTag')}</PendingNote>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{pick(copy.empty, locale)}</p>
            <ul className="grid gap-6 md:grid-cols-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex flex-col gap-4 rounded-xl border-2 border-dashed border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-14 items-center justify-center rounded-full bg-secondary">
                      <UserRound className="size-7 text-muted-foreground" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-muted-foreground">{t('stories.placeholderName')}</span>
                      <span className="text-sm text-muted-foreground">{t('stories.placeholderLocation')}</span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-muted-foreground italic">{t('stories.placeholderQuote')}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="flex flex-col gap-8">
            {successStories.map((s) => (
              <li key={s.id} className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[280px_1fr]">
                <div className="relative aspect-square bg-secondary md:aspect-auto">
                  {s.photo ? (
                    <Image src={s.photo} alt={s.farmerName} fill sizes="280px" className="object-cover" />
                  ) : (
                    <UserRound className="absolute inset-0 m-auto size-16 text-muted-foreground" aria-hidden="true" />
                  )}
                </div>
                <div className="flex flex-col gap-5 p-6 md:p-8">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold text-primary">{s.farmerName}</h2>
                    <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-4" aria-hidden="true" />
                      {pick(s.district, locale)} · {pick(s.crop, locale)}
                    </p>
                  </div>
                  <dl className="grid gap-4 sm:grid-cols-3">
                    {(['challenge', 'guidance', 'result'] as const).map((k) => (
                      <div key={k} className="flex flex-col gap-1">
                        <dt className="text-sm font-semibold text-leaf">{pick(copy[k], locale)}</dt>
                        <dd className="leading-relaxed">{pick(s[k], locale)}</dd>
                      </div>
                    ))}
                  </dl>
                  {s.quote && (
                    <blockquote className="flex gap-3 border-t border-border pt-5 text-lg leading-relaxed italic">
                      <Quote className="size-6 shrink-0 text-harvest" aria-hidden="true" />
                      {pick(s.quote, locale)}
                    </blockquote>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <section aria-labelledby="share-story" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1fr_520px] lg:px-6 lg:py-20">
          <div className="flex flex-col gap-4">
            <h2 id="share-story" className="text-2xl font-bold tracking-tight text-balance text-primary md:text-3xl">
              {t('stories.shareTitle')}
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{t('stories.shareBody')}</p>
          </div>
          <EnquiryForm page="/success-stories" defaultSubject="successStory" />
        </div>
      </section>
    </>
  )
}
