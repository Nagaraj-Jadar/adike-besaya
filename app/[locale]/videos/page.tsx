import { PlayCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { CategoryFilter } from '@/components/site/category-filter'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { videoCategories, videoLibrary, type VideoCategory } from '@/lib/data/media'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}

const copy = {
  title: { en: 'Videos', kn: 'ವೀಡಿಯೊಗಳು' },
  intro: {
    en: 'Watch practical tips, field visits and expert explanations on arecanut farming.',
    kn: 'ಅಡಿಕೆ ಕೃಷಿಯ ಪ್ರಾಯೋಗಿಕ ಸಲಹೆಗಳು, ತೋಟ ಭೇಟಿಗಳು ಮತ್ತು ತಜ್ಞರ ವಿವರಣೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
  },
  filter: { en: 'Filter videos by topic', kn: 'ವಿಷಯದ ಪ್ರಕಾರ ವೀಡಿಯೊಗಳು' },
  pending: {
    en: 'Videos will be added here as they are published on the Adike Besaya YouTube channel.',
    kn: 'ಅಡಿಕೆ ಬೇಸಾಯ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ನಲ್ಲಿ ಪ್ರಕಟವಾದಂತೆ ವೀಡಿಯೊಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುವುದು.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/videos', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function VideosPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { category } = await searchParams
  setRequestLocale(locale)
  const t = await getTranslations()

  const active = videoCategories.some((c) => c.id === category) ? (category as VideoCategory) : undefined
  const list = videoLibrary.filter((v) => !active || v.category === active)
  const anyPending = list.some((v) => !v.youtubeId)

  return (
    <>
      <PageHero
        image="fieldVisit"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.videos') }]}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 lg:px-6 lg:py-20">
        <CategoryFilter
          basePath="/videos"
          active={active}
          allLabel={t('common.all')}
          label={pick(copy.filter, locale)}
          options={videoCategories.map((c) => ({
            id: c.id,
            label: pick(c.label, locale),
            count: videoLibrary.filter((v) => v.category === c.id).length,
          }))}
        />

        {anyPending && <PendingNote>{pick(copy.pending, locale)}</PendingNote>}

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v) => {
            const title = pick(v.title, locale)
            const cat = videoCategories.find((c) => c.id === v.category)
            return (
              <li key={v.id} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
                {v.youtubeId ? (
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={title}
                      loading="lazy"
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 size-full"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <Image
                      src={images[v.thumbnail].src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-deep/60 text-primary-foreground">
                      <PlayCircle className="size-12 opacity-80" aria-hidden="true" />
                      <span className="rounded-full bg-deep/70 px-3 py-1 text-xs font-semibold">{t('common.comingSoon')}</span>
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  {cat && <span className="text-xs font-semibold tracking-wide text-leaf uppercase">{pick(cat.label, locale)}</span>}
                  <h2 className="text-lg font-bold text-primary">{title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pick(v.description, locale)}</p>
                </div>
              </li>
            )
          })}
        </ul>

        {siteConfig.social.youtube && (
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-fit items-center gap-2 self-center rounded-full bg-leaf px-6 font-semibold text-primary-foreground hover:bg-primary"
          >
            {t('actions.watch')}
          </a>
        )}
      </div>

      <CtaBand />
    </>
  )
}
