'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const options = [
  { locale: 'kn', label: 'ಕನ್ನಡ' },
  { locale: 'en', label: 'English' },
] as const

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations('actions')
  const active = useLocale()
  const pathname = usePathname()

  return (
    <nav aria-label={t('languageLabel')} className={cn('inline-flex rounded-full bg-secondary p-0.5 text-xs', className)}>
      {options.map((option) => {
        const isActive = option.locale === active
        return (
          <Link
            key={option.locale}
            href={pathname}
            locale={option.locale}
            lang={option.locale}
            aria-current={isActive ? 'true' : undefined}
            className={cn(
              'rounded-full px-3 py-1 font-medium transition-colors',
              isActive ? 'bg-primary text-primary-foreground' : 'text-secondary-foreground hover:bg-card',
            )}
          >
            {option.label}
          </Link>
        )
      })}
    </nav>
  )
}
