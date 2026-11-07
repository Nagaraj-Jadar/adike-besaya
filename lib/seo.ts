import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteConfig } from './site'

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

/** `path` is locale-less and starts with "/" ("/" for the homepage). */
export function localizedPath(locale: string, path: string) {
  return `/${locale}${path === '/' ? '' : path}`
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
  type = 'website',
}: {
  locale: string
  path: string
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, localizedPath(l, path)]))
  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: { ...languages, 'x-default': localizedPath(routing.defaultLocale, path) },
    },
    openGraph: {
      type,
      title,
      description,
      url: localizedPath(locale, path),
      siteName: locale === 'kn' ? siteConfig.nameKn : siteConfig.name,
      locale: locale === 'kn' ? 'kn_IN' : 'en_IN',
      images: image ? [{ url: image }] : undefined,
    },
  }
}

export function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'kn' ? 'kn-IN' : 'en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}
