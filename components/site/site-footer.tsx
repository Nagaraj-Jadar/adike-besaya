import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { solutions } from '@/lib/content'
import { images } from '@/lib/images'
import { siteConfig } from '@/lib/site'
import { ContactLink } from './contact-link'
import { navItems } from '@/lib/nav'

export async function SiteFooter() {
  const t = await getTranslations()
  const year = new Date().getFullYear()
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url)

  return (
    <footer className="bg-deep pb-24 text-primary-foreground md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:px-6">
        <div className="flex flex-col gap-4 lg:col-span-4">
          <div className="flex items-center gap-3">
            <Image src={images.logo.src} alt="" width={56} height={56} className="size-14 rounded-full bg-card p-0.5" />
            <div>
              <p className="text-lg font-extrabold tracking-tight">{t('brand.name')}</p>
              <p className="text-sm text-harvest">{t('brand.tagline')}</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/75">{t('footer.description')}</p>
          {socials.length > 0 && (
            <ul className="flex gap-4 text-sm" aria-label={t('footer.follow')}>
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-harvest">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <FooterColumn title={t('footer.quickLinks')} className="lg:col-span-2">
          {[...navItems.slice(0, 6), { key: 'videos', href: '/videos' } as const, navItems[6]].map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="hover:text-harvest">
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={t('footer.solutions')} className="lg:col-span-3">
          {solutions.map((s) => (
            <li key={s.id}>
              <Link href={`/solutions/${s.slug}`} className="hover:text-harvest">
                {t(`solutions.items.${s.id}.title`)}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={t('footer.contact')} className="lg:col-span-3">
          <li className="flex items-center gap-2.5">
            <Phone className="size-4 shrink-0 text-harvest" aria-hidden="true" />
            {siteConfig.phone || <span className="text-primary-foreground/60">{t('footer.phonePending')}</span>}
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="size-4 shrink-0 text-harvest" aria-hidden="true" />
            {siteConfig.email || <span className="text-primary-foreground/60">{t('footer.emailPending')}</span>}
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin className="size-4 shrink-0 text-harvest" aria-hidden="true" />
            {siteConfig.location}
          </li>
          <li className="pt-2">
            <ContactLink
              kind="whatsapp"
              className="inline-flex items-center gap-2 rounded-full bg-leaf px-4 py-2.5 font-semibold transition-colors hover:bg-card hover:text-primary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {t('actions.whatsapp')}
            </ContactLink>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p>
            {'© '}
            {year} {siteConfig.name}. {t('footer.rights')}
          </p>
          <ul className="flex gap-4">
            <li>
              <Link href="/privacy" className="hover:text-primary-foreground">
                {t('footer.privacy')}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary-foreground">
                {t('footer.terms')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="mb-4 text-sm font-bold tracking-wide text-harvest">{title}</h2>
      <ul className="flex flex-col gap-2.5 text-sm text-primary-foreground/80">{children}</ul>
    </div>
  )
}
