import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { solutions } from '@/lib/content'
import { images } from '@/lib/images'
import { SectionHeading } from '@/components/site/section-heading'

export async function SolutionsSection() {
  const t = await getTranslations('solutions')

  return (
    <section aria-labelledby="solutions-title" className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <SectionHeading
        id="solutions-title"
        title={t('title')}
        subtitle={t('subtitle')}
        action={{ href: '/solutions', label: t('viewAll') }}
      />
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {solutions.map((s) => {
          const img = images[s.image]
          return (
            <li key={s.id}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-2 transition-all hover:-translate-y-0.5 hover:border-leaf/40 hover:shadow-lg hover:shadow-deep/5 sm:flex-col sm:items-stretch sm:gap-0 sm:p-0"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-lg sm:aspect-[4/3] sm:size-auto sm:rounded-none">
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 200px, (min-width: 640px) 33vw, 80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 sm:p-4">
                  <h3 className="text-base leading-snug font-bold text-primary">{t(`items.${s.id}.title`)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(`items.${s.id}.description`)}</p>
                </div>
                <ChevronRight className="mr-2 size-5 shrink-0 text-leaf sm:hidden" aria-hidden="true" />
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
