import { Clock } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { ArticleCard } from '@/components/site/cards'
import { CtaBand } from '@/components/site/cta-band'
import { JsonLd } from '@/components/site/json-ld'
import { ShareButtons } from '@/components/site/share-buttons'
import { routing } from '@/i18n/routing'
import { articleCatalog, articleCategories, getArticle, getRelatedArticles } from '@/lib/data/articles'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { formatDate, localizedPath, pageMetadata, siteUrl } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => articleCatalog.map((a) => ({ locale, slug: a.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return pageMetadata({
    locale,
    path: `/knowledge/${slug}`,
    title: pick(article.title, locale),
    description: pick(article.excerpt, locale),
    image: images[article.image].src,
    type: 'article',
  })
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const article = getArticle(slug)
  if (!article) notFound()

  const t = await getTranslations()
  const title = pick(article.title, locale)
  const category = articleCategories.find((c) => c.id === article.category)
  const related = getRelatedArticles(article)
  const url = `${siteUrl}${localizedPath(locale, `/knowledge/${slug}`)}`
  const photo = images[article.image]

  return (
    <>
      <article>
        <header className="bg-secondary">
          <div className="mx-auto flex max-w-3xl flex-col gap-5 px-4 pt-24 pb-10 md:pt-28 lg:px-6">
            <Breadcrumbs items={[{ label: t('nav.knowledge'), href: '/knowledge' }, { label: title }]} className="text-foreground" />
            {category && (
              <span className="text-sm font-semibold tracking-wide text-leaf uppercase">{pick(category.label, locale)}</span>
            )}
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary md:text-4xl">{title}</h1>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">{pick(article.excerpt, locale)}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{t('common.published')}</span>
              <time dateTime={article.date} className="font-medium text-foreground">
                {formatDate(article.date, locale)}
              </time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-4" aria-hidden="true" />
                {t('common.minRead', { count: article.readMinutes })}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="relative -mb-4 aspect-[16/9] overflow-hidden rounded-2xl md:-mb-0">
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-14 lg:px-6">
          {article.sections.map((s, i) => (
            <section key={s.heading.en} aria-labelledby={`section-${i}`} className="flex flex-col gap-3">
              <h2 id={`section-${i}`} className="text-2xl font-bold tracking-tight text-primary">
                {pick(s.heading, locale)}
              </h2>
              <p className="text-lg leading-relaxed text-pretty text-foreground">{pick(s.body, locale)}</p>
            </section>
          ))}

          <p className="rounded-xl border-l-4 border-harvest bg-harvest/10 p-5 text-sm leading-relaxed">
            {locale === 'kn'
              ? 'ಈ ಲೇಖನ ಸಾಮಾನ್ಯ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಪ್ರತಿಯೊಂದು ತೋಟವೂ ಭಿನ್ನ — ನಿಮ್ಮ ತೋಟಕ್ಕೆ ನಿರ್ದಿಷ್ಟ ಸಲಹೆಗಾಗಿ ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.'
              : 'This article is general guidance. Every garden is different — contact our team for advice specific to yours.'}
          </p>

          <div className="border-t border-border pt-6">
            <ShareButtons url={url} title={title} />
          </div>
        </div>
      </article>

      <section aria-labelledby="related-articles" className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 lg:px-6 lg:py-20">
          <h2 id="related-articles" className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
            {locale === 'kn' ? 'ಸಂಬಂಧಿತ ಲೇಖನಗಳು' : 'Related articles'}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <li key={a.id}>
                <ArticleCard article={a} locale={locale} minRead={t('common.minRead', { count: a.readMinutes })} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: pick(article.excerpt, locale),
          image: `${siteUrl}${photo.src}`,
          datePublished: article.date,
          inLanguage: locale === 'kn' ? 'kn-IN' : 'en-IN',
          author: { '@type': 'Organization', name: 'Adike Besaya' },
          publisher: {
            '@type': 'Organization',
            name: 'Adike Besaya',
            logo: { '@type': 'ImageObject', url: `${siteUrl}${images.logo.src}` },
          },
          mainEntityOfPage: url,
        }}
      />
    </>
  )
}
