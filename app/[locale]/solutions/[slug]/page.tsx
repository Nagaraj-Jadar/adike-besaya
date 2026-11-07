import { CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SolutionCard } from '@/components/site/cards'
import { CtaBand } from '@/components/site/cta-band'
import { EnquiryForm } from '@/components/site/enquiry-form'
import { JsonLd } from '@/components/site/json-ld'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { routing } from '@/i18n/routing'
import { getSolution, getSolutionById, solutionCatalog } from '@/lib/data/solutions'
import type { EnquirySubject } from '@/lib/enquiry'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { localizedPath, pageMetadata, siteUrl } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => solutionCatalog.map((s) => ({ locale, slug: s.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}
  return pageMetadata({
    locale,
    path: `/solutions/${slug}`,
    title: pick(solution.title, locale),
    description: pick(solution.short, locale),
    image: images[solution.image].src,
  })
}

const subjectFor: Record<string, EnquirySubject> = {
  soilTesting: 'soilTesting',
  consultation: 'expertGuidance',
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const solution = getSolution(slug)
  if (!solution) notFound()

  const t = await getTranslations()
  const title = pick(solution.title, locale)
  const related = solution.related.map(getSolutionById).filter((s) => s !== undefined)
  const photo = images[solution.image]

  return (
    <>
      <PageHero
        image={solution.image}
        eyebrow={t('nav.solutions')}
        title={title}
        intro={pick(solution.short, locale)}
        crumbs={[{ label: t('nav.solutions'), href: '/solutions' }, { label: title }]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_420px] lg:gap-16 lg:px-6 lg:py-20">
        <article className="flex flex-col gap-6">
          {solution.availabilityToConfirm && <PendingNote>{t('common.pending')}</PendingNote>}
          <p className="text-xl leading-relaxed text-pretty text-foreground">{pick(solution.detail, locale)}</p>
          <p className="leading-relaxed text-pretty text-muted-foreground">{pick(solution.body, locale)}</p>

          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </div>

          <section aria-labelledby="focus-title" className="flex flex-col gap-4 rounded-xl bg-secondary p-6 md:p-8">
            <h2 id="focus-title" className="text-xl font-bold text-primary">
              {locale === 'kn' ? 'ನಾವು ಗಮನ ಹರಿಸುವ ವಿಷಯಗಳು' : 'What we focus on'}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {solution.focus.map((item) => (
                <li key={item.en} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
                  <span className="leading-relaxed">{pick(item, locale)}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-xl font-bold text-primary">
            {locale === 'kn' ? `${title} ಬಗ್ಗೆ ವಿಚಾರಿಸಿ` : `Ask about ${title.toLowerCase()}`}
          </h2>
          <EnquiryForm page={`/solutions/${slug}`} defaultSubject={subjectFor[solution.id] ?? 'cropProblem'} />
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="bg-secondary">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 lg:px-6 lg:py-20">
            <h2 id="related-title" className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
              {locale === 'kn' ? 'ಸಂಬಂಧಿತ ಪರಿಹಾರಗಳು' : 'Related solutions'}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <li key={s.id}>
                  <SolutionCard solution={s} locale={locale} cta={t('actions.learnMore')} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand message={locale === 'kn' ? `ನಮಸ್ಕಾರ, ${title} ಬಗ್ಗೆ ತಿಳಿಯಬೇಕಿದೆ.` : `Hello, I'd like to know about ${title}.`} />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: title,
          description: pick(solution.detail, locale),
          serviceType: title,
          areaServed: { '@type': 'State', name: 'Karnataka' },
          provider: { '@type': 'Organization', name: 'Adike Besaya', url: siteUrl },
          url: `${siteUrl}${localizedPath(locale, `/solutions/${slug}`)}`,
        }}
      />
    </>
  )
}
