import { MessageCircle, Quote, UserRound } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { testimonials } from '@/lib/content'
import { ContactLink } from '@/components/site/contact-link'
import { SectionHeading } from '@/components/site/section-heading'

const PLACEHOLDER_SLOTS = 2

export async function StoriesSection() {
  const t = await getTranslations('stories')
  const placeholders = Math.max(0, PLACEHOLDER_SLOTS - testimonials.length)

  return (
    <section aria-labelledby="stories-title" className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <SectionHeading id="stories-title" title={t('title')} subtitle={t('subtitle')} />
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.map((s) => (
          <li key={s.id} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
            <Quote className="size-6 text-harvest" aria-hidden="true" />
            <blockquote className="text-sm leading-relaxed text-foreground">{s.quote}</blockquote>
            <div className="mt-auto flex items-center gap-3">
              {s.photo && <Image src={s.photo} alt="" width={48} height={48} className="size-12 rounded-full object-cover" />}
              <div>
                <p className="font-semibold text-primary">{s.name}</p>
                <p className="text-xs text-muted-foreground">
                  {s.location} · {s.crop}
                </p>
              </div>
            </div>
          </li>
        ))}

        {Array.from({ length: placeholders }).map((_, i) => (
          <li
            key={`placeholder-${i}`}
            className="flex flex-col gap-4 rounded-xl border border-dashed border-leaf/30 bg-card/60 p-5"
          >
            <div className="flex items-center justify-between">
              <Quote className="size-6 text-harvest/60" aria-hidden="true" />
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                {t('placeholderTag')}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground italic">{t('placeholderQuote')}</p>
            <div className="mt-auto flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-leaf">
                <UserRound className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-primary/70">{t('placeholderName')}</p>
                <p className="text-xs text-muted-foreground">{t('placeholderLocation')}</p>
              </div>
            </div>
          </li>
        ))}

        <li className="flex flex-col justify-between gap-4 rounded-xl bg-primary p-6 text-primary-foreground">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-balance">{t('shareTitle')}</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">{t('shareBody')}</p>
          </div>
          <ContactLink
            kind="whatsapp"
            message="Hello Adike Besaya, I would like to share my farming experience."
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-harvest px-5 font-semibold text-accent-foreground transition-colors hover:bg-card"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {t('shareCta')}
          </ContactLink>
        </li>
      </ul>
    </section>
  )
}
