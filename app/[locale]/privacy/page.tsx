import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { LegalPage } from '@/components/site/legal-page'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Privacy Policy', kn: 'ಗೌಪ್ಯತಾ ನೀತಿ' },
  notice: {
    en: 'Draft for review. The final policy must be approved by Adike Besaya before launch.',
    kn: 'ಪರಿಶೀಲನೆಗಾಗಿ ಕರಡು. ಬಿಡುಗಡೆಗೆ ಮುನ್ನ ಅಂತಿಮ ನೀತಿಯನ್ನು ಅಡಿಕೆ ಬೇಸಾಯ ಅನುಮೋದಿಸಬೇಕು.',
  },
  sections: [
    {
      heading: { en: 'What we collect', kn: 'ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ' },
      body: {
        en: 'When you send an enquiry we collect the details you provide: your name, phone number, optional email, location, the subject and your message.',
        kn: 'ನೀವು ವಿಚಾರಣೆ ಕಳುಹಿಸಿದಾಗ ನೀವು ನೀಡುವ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ: ಹೆಸರು, ದೂರವಾಣಿ ಸಂಖ್ಯೆ, ಐಚ್ಛಿಕ ಇಮೇಲ್, ಸ್ಥಳ, ವಿಷಯ ಮತ್ತು ನಿಮ್ಮ ಸಂದೇಶ.',
      },
    },
    {
      heading: { en: 'How we use it', kn: 'ನಾವು ಅದನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ' },
      body: {
        en: 'Only to respond to your enquiry and provide the guidance you asked for. We do not sell or share your details with third parties for marketing.',
        kn: 'ನಿಮ್ಮ ವಿಚಾರಣೆಗೆ ಉತ್ತರಿಸಲು ಮತ್ತು ನೀವು ಕೇಳಿದ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಮಾತ್ರ. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಜಾಹೀರಾತಿಗಾಗಿ ಮೂರನೇ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.',
      },
    },
    {
      heading: { en: 'WhatsApp and phone', kn: 'ವಾಟ್ಸ್‌ಆಪ್ ಮತ್ತು ದೂರವಾಣಿ' },
      body: {
        en: 'Messages sent through WhatsApp are handled under WhatsApp’s own terms and privacy policy.',
        kn: 'ವಾಟ್ಸ್‌ಆಪ್ ಮೂಲಕ ಕಳುಹಿಸಿದ ಸಂದೇಶಗಳು ವಾಟ್ಸ್‌ಆಪ್‌ನ ತನ್ನದೇ ನಿಯಮ ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ.',
      },
    },
    {
      heading: { en: 'Your choices', kn: 'ನಿಮ್ಮ ಆಯ್ಕೆಗಳು' },
      body: {
        en: 'You can ask us to correct or delete the details you have shared by contacting us through the Contact page.',
        kn: 'ನೀವು ಹಂಚಿಕೊಂಡ ವಿವರಗಳನ್ನು ಸರಿಪಡಿಸಲು ಅಥವಾ ಅಳಿಸಲು ಸಂಪರ್ಕ ಪುಟದ ಮೂಲಕ ನಮ್ಮನ್ನು ಕೇಳಬಹುದು.',
      },
    },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/privacy', title: pick(copy.title, locale), description: pick(copy.sections[1].body, locale) })
}

export default async function PrivacyPage({ params }: Props) {
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
