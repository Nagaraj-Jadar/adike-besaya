import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { getFormatter, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { articles } from '@/lib/content'
import { images } from '@/lib/images'
import { SectionHeading } from '@/components/site/section-heading'

export async function KnowledgeSection() {
  const t = await getTranslations()
  const format = await getFormatter()

  return (
    <section aria-labelledby="knowledge-title" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <SectionHeading
          id="knowledge-title"
          title={t('knowledge.title')}
          subtitle={t('knowledge.subtitle')}
          action={{ href: '/knowledge', label: t('knowledge.viewAll') }}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <li key={a.id} className={i > 0 ? 'hidden sm:block' : undefined}>
              <Link
                href={`/knowledge/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-deep/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={images[a.image].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="text-xs font-semibold tracking-wide text-leaf">
                    {t(`knowledge.items.${a.id}.category`)}
                  </span>
                  <h3 className="text-base leading-snug font-bold text-pretty text-primary">
                    {t(`knowledge.items.${a.id}.title`)}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
                    <time dateTime={a.date}>{format.dateTime(new Date(a.date), { dateStyle: 'medium' })}</time>
                    <span className="inline-flex items-center gap-1 font-semibold text-leaf">
                      {t('actions.readMore')}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
