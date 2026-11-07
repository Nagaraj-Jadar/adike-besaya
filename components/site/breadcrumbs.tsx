import { ChevronRight } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { localizedPath, siteUrl } from '@/lib/seo'
import { cn } from '@/lib/utils'
import { JsonLd } from './json-ld'

export type Crumb = { label: string; href?: string }

export async function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const t = await getTranslations('nav')
  const locale = await getLocale()
  const trail: Crumb[] = [{ label: t('home'), href: '/' }, ...items]

  return (
    <>
      <nav aria-label={t('breadcrumb')} className={className}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1
            return (
              <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
                {crumb.href && !last ? (
                  <Link href={crumb.href} className="opacity-80 transition-opacity hover:opacity-100 hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current={last ? 'page' : undefined} className={cn(last && 'font-semibold')}>
                    {crumb.label}
                  </span>
                )}
                {!last && <ChevronRight className="size-3.5 opacity-60" aria-hidden="true" />}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: trail.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.label,
            ...(crumb.href ? { item: `${siteUrl}${localizedPath(locale, crumb.href)}` } : {}),
          })),
        }}
      />
    </>
  )
}
