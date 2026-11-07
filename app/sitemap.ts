import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { articleCatalog } from '@/lib/data/articles'
import { productCatalog } from '@/lib/data/products'
import { solutionCatalog } from '@/lib/data/solutions'
import { localizedPath, siteUrl } from '@/lib/seo'

const staticPaths = [
  '/',
  '/about',
  '/solutions',
  '/products',
  '/expert-guidance',
  '/knowledge',
  '/videos',
  '/success-stories',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths.map((path) => ({ path })),
    ...solutionCatalog.map((s) => ({ path: `/solutions/${s.slug}` })),
    ...productCatalog.map((p) => ({ path: `/products/${p.slug}` })),
    ...articleCatalog.map((a) => ({ path: `/knowledge/${a.slug}`, lastModified: a.date })),
  ]

  return paths.flatMap(({ path, lastModified }: { path: string; lastModified?: string }) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, path)}`,
      lastModified: lastModified ? new Date(lastModified) : undefined,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${siteUrl}${localizedPath(l, path)}`])),
      },
    })),
  )
}
