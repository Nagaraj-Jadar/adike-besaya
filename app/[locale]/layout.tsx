import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans, Noto_Sans_Kannada } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { MobileActionBar } from '@/components/site/mobile-action-bar'
import '../globals.css'

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto-sans', display: 'swap' })
const notoKannada = Noto_Sans_Kannada({ subsets: ['kannada'], variable: '--font-noto-kannada', display: 'swap' })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: { languages: { en: '/en', kn: '/kn' } },
    icons: { icon: '/brand/adike-besaya-logo.png', apple: '/brand/adike-besaya-logo.png' },
  }
}

export const viewport: Viewport = {
  themeColor: '#123D27',
  colorScheme: 'light',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html lang={locale} className={`${notoSans.variable} ${notoKannada.variable} bg-background`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileActionBar />
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
