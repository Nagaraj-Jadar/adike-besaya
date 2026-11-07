'use client'

import { Menu, MessageCircle, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { images } from '@/lib/images'
import { cn } from '@/lib/utils'
import { ContactLink } from './contact-link'
import { navItems } from '@/lib/nav'
import { LanguageSwitcher } from './language-switcher'

export function SiteHeader() {
  const t = useTranslations()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:h-20 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src={images.logo.src} alt="" width={52} height={52} className="size-11 lg:size-13" priority />
          <span className="text-lg font-extrabold tracking-tight text-primary lg:text-xl">{t('brand.name')}</span>
        </Link>

        <nav aria-label={t('nav.primary')} className="hidden xl:block">
          <ul className="flex items-center">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary',
                      active &&
                        'text-primary after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-leaf',
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <ContactLink
            kind="whatsapp"
            className="inline-flex size-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-leaf text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary 2xl:size-auto 2xl:px-4 2xl:py-2.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="sr-only 2xl:not-sr-only">{t('actions.whatsapp')}</span>
          </ContactLink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? t('nav.closeMenu') : t('nav.openMenu')}</span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-card xl:hidden">
          <nav aria-label={t('nav.primary')} className="mx-auto max-w-7xl px-4 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-border text-base font-medium text-foreground"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher className="mt-4 sm:hidden" />
          </nav>
        </div>
      )}
    </header>
  )
}
