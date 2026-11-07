import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SolutionCard } from '@/components/site/cards'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { solutionCatalog } from '@/lib/data/solutions'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Agricultural Solutions', kn: 'ಕೃಷಿ ಪರಿಹಾರಗಳು' },
  intro: {
    en: 'From soil testing to disease and pest management, practical support for every stage of your arecanut garden.',
    kn: 'ಮಣ್ಣು ಪರೀಕ್ಷೆಯಿಂದ ರೋಗ ಮತ್ತು ಕೀಟ ನಿರ್ವಹಣೆಯವರೆಗೆ — ನಿಮ್ಮ ಅಡಿಕೆ ತೋಟದ ಪ್ರತಿ ಹಂತಕ್ಕೂ ಪ್ರಾಯೋಗಿಕ ಬೆಂಬಲ.',
  },
  approachTitle: { en: 'How we approach every problem', kn: 'ಪ್ರತಿ ಸಮಸ್ಯೆಯನ್ನು ನಾವು ಹೇಗೆ ನೋಡುತ್ತೇವೆ' },
  steps: [
    {
      title: { en: 'Understand the garden', kn: 'ತೋಟವನ್ನು ಅರಿಯುವುದು' },
      body: {
        en: 'Photos, soil details, palm age and recent history — before any recommendation.',
        kn: 'ಯಾವುದೇ ಶಿಫಾರಸಿಗೂ ಮುನ್ನ — ಫೋಟೋ, ಮಣ್ಣಿನ ವಿವರ, ಮರಗಳ ವಯಸ್ಸು ಮತ್ತು ಇತ್ತೀಚಿನ ಹಿನ್ನೆಲೆ.',
      },
    },
    {
      title: { en: 'Identify the cause', kn: 'ಕಾರಣವನ್ನು ಗುರುತಿಸುವುದು' },
      body: {
        en: 'Similar symptoms can have different causes. We confirm before suggesting treatment.',
        kn: 'ಒಂದೇ ರೀತಿಯ ಲಕ್ಷಣಗಳಿಗೆ ಬೇರೆ ಬೇರೆ ಕಾರಣಗಳಿರಬಹುದು. ಚಿಕಿತ್ಸೆ ಸೂಚಿಸುವ ಮುನ್ನ ಖಚಿತಪಡಿಸುತ್ತೇವೆ.',
      },
    },
    {
      title: { en: 'Plan practical steps', kn: 'ಪ್ರಾಯೋಗಿಕ ಹೆಜ್ಜೆಗಳ ಯೋಜನೆ' },
      body: {
        en: 'Clear actions you can carry out with the resources you have, timed to the season.',
        kn: 'ನಿಮ್ಮ ಬಳಿ ಇರುವ ಸಂಪನ್ಮೂಲಗಳಲ್ಲೇ, ಹಂಗಾಮಿಗೆ ತಕ್ಕಂತೆ ಪಾಲಿಸಬಹುದಾದ ಸ್ಪಷ್ಟ ಕ್ರಮಗಳು.',
      },
    },
    {
      title: { en: 'Follow up', kn: 'ಮುಂದುವರಿದ ಪರಿಶೀಲನೆ' },
      body: {
        en: 'We check how the garden responds and adjust the plan if needed.',
        kn: 'ತೋಟ ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಿದೆ ಎಂದು ಗಮನಿಸಿ, ಅಗತ್ಯವಿದ್ದರೆ ಯೋಜನೆ ಬದಲಿಸುತ್ತೇವೆ.',
      },
    },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/solutions', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  return (
    <>
      <PageHero
        image="fieldVisit"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.solutions') }]}
      />

      <section aria-label={pick(copy.title, locale)} className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionCatalog.map((s) => (
            <li key={s.id}>
              <SolutionCard solution={s} locale={locale} cta={t('actions.learnMore')} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="approach-title" className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 lg:px-6 lg:py-20">
          <h2 id="approach-title" className="text-2xl font-bold tracking-tight text-balance text-primary md:text-3xl">
            {pick(copy.approachTitle, locale)}
          </h2>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, i) => (
              <li key={step.title.en} className="flex flex-col gap-3 border-t-2 border-leaf pt-5">
                <span className="text-sm font-bold text-leaf">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-bold text-primary">{pick(step.title, locale)}</h3>
                <p className="leading-relaxed text-muted-foreground">{pick(step.body, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
