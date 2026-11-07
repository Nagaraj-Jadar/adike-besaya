import { HeartHandshake, Leaf, Microscope, Sprout } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'About Adike Besaya', kn: 'ಅಡಿಕೆ ಬೇಸಾಯದ ಬಗ್ಗೆ' },
  intro: {
    en: 'Practical agricultural guidance for arecanut farmers in Karnataka — in the language farmers speak, for the gardens they actually work in.',
    kn: 'ಕರ್ನಾಟಕದ ಅಡಿಕೆ ಬೆಳೆಗಾರರಿಗೆ ಪ್ರಾಯೋಗಿಕ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ — ಬೆಳೆಗಾರರು ಮಾತನಾಡುವ ಭಾಷೆಯಲ್ಲಿ, ಅವರು ದುಡಿಯುವ ತೋಟಗಳಿಗೆ ತಕ್ಕಂತೆ.',
  },
  storyTitle: { en: 'Why we exist', kn: 'ನಾವು ಏಕೆ' },
  story: [
    {
      en: 'Adike Besaya — “arecanut cultivation” in Kannada — was started to give farmers reliable guidance when they need it most: when palms start yellowing, when a pest appears, or when they are unsure which input is worth the money.',
      kn: 'ಅಡಿಕೆ ಬೇಸಾಯವನ್ನು ಬೆಳೆಗಾರರಿಗೆ ಅತ್ಯಂತ ಅಗತ್ಯವಿರುವ ಸಮಯದಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಆರಂಭಿಸಲಾಯಿತು — ಮರಗಳು ಹಳದಿಯಾಗತೊಡಗಿದಾಗ, ಕೀಟ ಕಾಣಿಸಿಕೊಂಡಾಗ, ಅಥವಾ ಯಾವ ಒಳಸುರಿಗೆ ಹಣ ಖರ್ಚು ಮಾಡಬೇಕು ಎಂದು ಗೊಂದಲವಾದಾಗ.',
    },
    {
      en: 'We combine soil testing, crop-specific advice and a carefully chosen range of products, so a farmer can understand the problem first and then decide what to do about it.',
      kn: 'ಮಣ್ಣು ಪರೀಕ್ಷೆ, ಬೆಳೆಗೆ ತಕ್ಕ ಸಲಹೆ ಮತ್ತು ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ದ ಉತ್ಪನ್ನಗಳನ್ನು ನಾವು ಒಟ್ಟುಗೂಡಿಸುತ್ತೇವೆ — ಬೆಳೆಗಾರರು ಮೊದಲು ಸಮಸ್ಯೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು, ನಂತರ ಏನು ಮಾಡಬೇಕೆಂದು ನಿರ್ಧರಿಸಲು.',
    },
  ],
  pending: {
    en: 'Founder story, team members and history will be added once provided by Adike Besaya.',
    kn: 'ಸಂಸ್ಥಾಪಕರ ಕಥೆ, ತಂಡದ ಸದಸ್ಯರು ಮತ್ತು ಇತಿಹಾಸವನ್ನು ಅಡಿಕೆ ಬೇಸಾಯ ಒದಗಿಸಿದ ನಂತರ ಸೇರಿಸಲಾಗುವುದು.',
  },
  valuesTitle: { en: 'What guides our work', kn: 'ನಮ್ಮ ಕೆಲಸದ ತತ್ವಗಳು' },
  values: [
    {
      icon: Microscope,
      title: { en: 'Evidence before advice', kn: 'ಸಲಹೆಗೂ ಮುನ್ನ ಆಧಾರ' },
      body: {
        en: 'We identify the problem properly — through soil tests, photos and observation — before recommending anything.',
        kn: 'ಯಾವುದನ್ನೂ ಶಿಫಾರಸು ಮಾಡುವ ಮುನ್ನ, ಮಣ್ಣು ಪರೀಕ್ಷೆ, ಫೋಟೋ ಮತ್ತು ವೀಕ್ಷಣೆಯ ಮೂಲಕ ಸಮಸ್ಯೆಯನ್ನು ಸರಿಯಾಗಿ ಗುರುತಿಸುತ್ತೇವೆ.',
      },
    },
    {
      icon: HeartHandshake,
      title: { en: 'Honest recommendations', kn: 'ಪ್ರಾಮಾಣಿಕ ಶಿಫಾರಸು' },
      body: {
        en: 'If your garden does not need a product, we will tell you. Trust matters more than a sale.',
        kn: 'ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಉತ್ಪನ್ನದ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ ನೇರವಾಗಿ ಹೇಳುತ್ತೇವೆ. ಮಾರಾಟಕ್ಕಿಂತ ವಿಶ್ವಾಸ ಮುಖ್ಯ.',
      },
    },
    {
      icon: Sprout,
      title: { en: 'Long-term garden health', kn: 'ತೋಟದ ದೀರ್ಘಾವಧಿ ಆರೋಗ್ಯ' },
      body: {
        en: 'Arecanut is a crop for decades. We favour practices that keep soil and palms healthy year after year.',
        kn: 'ಅಡಿಕೆ ದಶಕಗಳ ಬೆಳೆ. ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ಮಣ್ಣು ಮತ್ತು ಮರಗಳನ್ನು ಆರೋಗ್ಯಕರವಾಗಿಡುವ ಪದ್ಧತಿಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.',
      },
    },
    {
      icon: Leaf,
      title: { en: 'In your language', kn: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ' },
      body: {
        en: 'Guidance in Kannada and English, explained simply, without jargon.',
        kn: 'ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ, ಕ್ಲಿಷ್ಟ ಪದಗಳಿಲ್ಲದೆ ಸರಳವಾಗಿ ವಿವರಿಸಿದ ಮಾರ್ಗದರ್ಶನ.',
      },
    },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/about', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  return (
    <>
      <PageHero
        image="hero"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.about') }]}
      />

      <section aria-labelledby="story-title" className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 lg:gap-16 lg:px-6 lg:py-20">
        <div className="flex flex-col gap-5">
          <h2 id="story-title" className="text-3xl font-bold tracking-tight text-primary">
            {pick(copy.storyTitle, locale)}
          </h2>
          {copy.story.map((p) => (
            <p key={p.en} className="text-lg leading-relaxed text-pretty text-foreground">
              {pick(p, locale)}
            </p>
          ))}
          <PendingNote>{pick(copy.pending, locale)}</PendingNote>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={images.expertConsultation.src}
            alt={images.expertConsultation.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 lg:px-6 lg:py-20">
          <h2 id="values-title" className="text-3xl font-bold tracking-tight text-balance">
            {pick(copy.valuesTitle, locale)}
          </h2>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map(({ icon: Icon, title, body }) => (
              <li key={title.en} className="flex flex-col gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Icon className="size-6 text-harvest" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">{pick(title, locale)}</h3>
                <p className="leading-relaxed text-primary-foreground/80">{pick(body, locale)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
