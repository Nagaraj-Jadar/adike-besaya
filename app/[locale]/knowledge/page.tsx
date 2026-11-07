import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ArticleCard } from '@/components/site/cards'
import { CategoryFilter } from '@/components/site/category-filter'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { Link } from '@/i18n/navigation'
import { articleCategories, sortedArticles, type ArticleCategory } from '@/lib/data/articles'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { formatDate, pageMetadata } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}

const copy = {
  title: { en: 'Knowledge Center', kn: 'ಕೃಷಿ ಜ್ಞಾನ ಕೇಂದ್ರ' },
  intro: {
    en: 'Practical articles on arecanut farming, soil health, nutrition, pests and diseases, written for farmers.',
    kn: 'ಅಡಿಕೆ ಕೃಷಿ, ಮಣ್ಣಿನ ಆರೋಗ್ಯ, ಪೋಷಣೆ, ಕೀಟ ಮತ್ತು ರೋಗಗಳ ಬಗ್ಗೆ ಬೆಳೆಗಾರರಿಗಾಗಿ ಬರೆದ ಪ್ರಾಯೋಗಿಕ ಲೇಖನಗಳು.',
  },
  filter: { en: 'Filter articles by topic', kn: 'ವಿಷಯದ ಪ್ರಕಾರ ಲೇಖನಗಳು' },
  latest: { en: 'Latest articles', kn: 'ಇತ್ತೀಚಿನ ಲೇಖನಗಳು' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/knowledge', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function KnowledgePage({ params, searchParams }: Props) {
  const { locale } = await params
  const { category } = await searchParams
  setRequestLocale(locale)
  const t = await getTranslations()

  const active = articleCategories.some((c) => c.id === category) ? (category as ArticleCategory) : undefined
  const featured = !active ? sortedArticles.find((a) => a.featured) : undefined
  const list = sortedArticles.filter((a) => (active ? a.category === active : a.id !== featured?.id))

  return (
    <>
      <PageHero
        image="monsoonGarden"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.knowledge') }]}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 lg:px-6 lg:py-20">
        <CategoryFilter
          basePath="/knowledge"
          active={active}
          allLabel={t('common.all')}
          label={pick(copy.filter, locale)}
          options={articleCategories.map((c) => ({
            id: c.id,
            label: pick(c.label, locale),
            count: sortedArticles.filter((a) => a.category === c.id).length,
          }))}
        />

        {featured && (
          <Link
            href={`/knowledge/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-80">
              <Image
                src={images[featured.image].src}
                alt={images[featured.image].alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <span className="w-fit rounded-full bg-harvest/20 px-3 py-1 text-xs font-semibold text-foreground">
                {t('common.featured')}
              </span>
              <h2 className="text-2xl leading-snug font-bold text-balance text-primary md:text-3xl">{pick(featured.title, locale)}</h2>
              <p className="leading-relaxed text-muted-foreground">{pick(featured.excerpt, locale)}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={featured.date}>{formatDate(featured.date, locale)}</time>
                <span aria-hidden="true">·</span>
                <span>{t('common.minRead', { count: featured.readMinutes })}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-semibold text-leaf">
                {t('actions.readMore')}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        )}

        <section aria-labelledby="articles-title" className="flex flex-col gap-6">
          <h2 id="articles-title" className="text-2xl font-bold tracking-tight text-primary">
            {active ? pick(articleCategories.find((c) => c.id === active)!.label, locale) : pick(copy.latest, locale)}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <li key={a.id}>
                <ArticleCard article={a} locale={locale} minRead={t('common.minRead', { count: a.readMinutes })} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <CtaBand />
    </>
  )
}
