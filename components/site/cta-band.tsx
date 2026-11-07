import { ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { images } from '@/lib/images'
import { siteConfig } from '@/lib/site'
import { ContactLink } from './contact-link'

type Props = {
  title?: string
  body?: string
  /** Pre-filled WhatsApp message, so the team knows where the enquiry came from. */
  message?: string
  /** Secondary link target, defaults to the contact page. */
  secondaryHref?: string
  secondaryLabel?: string
}

export async function CtaBand({ title, body, message, secondaryHref = '/contact', secondaryLabel }: Props) {
  const t = await getTranslations()
  const hasWhatsapp = Boolean(siteConfig.whatsappNumber)

  return (
    <section aria-labelledby="cta-title" className="px-4 py-14 lg:px-6 lg:py-20">
      <div className="relative isolate mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-2xl bg-deep px-6 py-10 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
        <Image
          src={images.soilHands.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="flex max-w-xl flex-col gap-3">
          <h2 id="cta-title" className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
            {title ?? t('cta.title')}
          </h2>
          <p className="leading-relaxed text-pretty text-primary-foreground/85">{body ?? t('cta.body')}</p>
          {!hasWhatsapp && <p className="text-sm text-harvest">{t('cta.whatsappPending')}</p>}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ContactLink
            kind="whatsapp"
            message={message}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf px-6 font-semibold transition-colors hover:bg-primary"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            {hasWhatsapp ? t('actions.whatsapp') : t('actions.contactUs')}
          </ContactLink>
          <Link
            href={secondaryHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-card px-6 font-semibold text-primary transition-colors hover:bg-secondary"
          >
            {secondaryLabel ?? t('actions.sendEnquiry')}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
