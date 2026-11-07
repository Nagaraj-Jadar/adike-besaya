import { ArrowRight, MessageCircle, Sprout } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { images } from '@/lib/images'
import { ContactLink } from '@/components/site/contact-link'

export async function Hero() {
  const t = await getTranslations('hero')
  const ta = await getTranslations('actions')

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-deep">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/10 md:bg-gradient-to-r md:from-deep/90 md:via-deep/55 md:to-transparent" />

      <div className="mx-auto flex min-h-[560px] max-w-7xl items-end px-4 pt-40 pb-20 md:min-h-[600px] md:items-center md:pt-16 md:pb-28 lg:px-6">
        <div className="flex max-w-xl flex-col gap-5 text-primary-foreground">
          <span className="inline-flex w-fit items-center rounded-full bg-leaf px-3.5 py-1.5 text-xs font-semibold tracking-wide">
            {t('eyebrow')}
          </span>
          <h1 id="hero-title" className="text-4xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {t('titleLead')} <span className="text-harvest">{t('titleHighlight')}</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-pretty text-primary-foreground/85 md:text-lg">{t('body')}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <ContactLink
              kind="whatsapp"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf px-6 text-base font-semibold text-primary-foreground ring-1 ring-primary-foreground/20 transition-colors hover:bg-primary"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {ta('whatsapp')}
            </ContactLink>
            <Link
              href="/solutions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-card px-6 text-base font-semibold text-primary transition-colors hover:bg-secondary"
            >
              {t('secondaryCta')}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="absolute top-1/3 right-8 hidden items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-deep/70 px-5 py-4 text-primary-foreground backdrop-blur-md lg:flex xl:right-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <span className="flex size-12 items-center justify-center rounded-full bg-card text-leaf">
            <Sprout className="size-6" aria-hidden="true" />
          </span>
          <ul className="flex flex-col gap-0.5 text-sm font-semibold">
            <li>{t('badge1')}</li>
            <li>{t('badge2')}</li>
            <li>{t('badge3')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
