import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { LegalPage } from '@/components/site/legal-page'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Terms of Use', kn: 'ಬಳಕೆಯ ನಿಯಮಗಳು' },
  notice: {
    en: 'Draft for review. The final terms must be approved by Adike Besaya before launch.',
    kn: 'ಪರಿಶೀಲನೆಗಾಗಿ ಕರಡು. ಬಿಡುಗಡೆಗೆ ಮುನ್ನ ಅಂತಿಮ ನಿಯಮಗಳನ್ನು ಅಡಿಕೆ ಬೇಸಾಯ ಅನುಮೋದಿಸಬೇಕು.',
  },
  sections: [
    {
      heading: { en: 'General guidance', kn: 'ಸಾಮಾನ್ಯ ಮಾರ್ಗದರ್ಶನ' },
      body: {
        en: 'Articles and information on this website are general guidance. Garden conditions vary, so contact our team before acting on any recommendation.',
        kn: 'ಈ ಜಾಲತಾಣದ ಲೇಖನ ಮತ್ತು ಮಾಹಿತಿ ಸಾಮಾನ್ಯ ಮಾರ್ಗದರ್ಶನ ಮಾತ್ರ. ತೋಟದ ಪರಿಸ್ಥಿತಿ ಬೇರೆ ಬೇರೆಯಾಗಿರುವುದರಿಂದ, ಯಾವುದೇ ಶಿಫಾರಸು ಪಾಲಿಸುವ ಮುನ್ನ ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      },
    },
    {
      heading: { en: 'Products', kn: 'ಉತ್ಪನ್ನಗಳು' },
      body: {
        en: 'Always read and follow the instructions on the product label. Product availability and details may change.',
        kn: 'ಉತ್ಪನ್ನದ ಲೇಬಲ್ ಮೇಲಿನ ಸೂಚನೆಗಳನ್ನು ಯಾವಾಗಲೂ ಓದಿ ಪಾಲಿಸಿ. ಉತ್ಪನ್ನಗಳ ಲಭ್ಯತೆ ಮತ್ತು ವಿವರಗಳು ಬದಲಾಗಬಹುದು.',
      },
    },
    {
      heading: { en: 'Content', kn: 'ವಿಷಯ' },
      body: {
        en: 'Text, photographs and logos on this website belong to Adike Besaya and may not be reused without permission.',
        kn: 'ಈ ಜಾಲತಾಣದ ಪಠ್ಯ, ಛಾಯಾಚಿತ್ರ ಮತ್ತು ಲಾಂಛನಗಳು ಅಡಿಕೆ ಬೇಸಾಯಕ್ಕೆ ಸೇರಿದ್ದು, ಅನುಮತಿಯಿಲ್ಲದೆ ಮರುಬಳಕೆ ಮಾಡುವಂತಿಲ್ಲ.',
      },
    },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/terms', title: pick(copy.title, locale), description: pick(copy.sections[0].body, locale) })
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <LegalPage
      title={pick(copy.title, locale)}
      notice={pick(copy.notice, locale)}
      sections={copy.sections.map((s) => ({ heading: pick(s.heading, locale), body: pick(s.body, locale) }))}
    />
  )
}
