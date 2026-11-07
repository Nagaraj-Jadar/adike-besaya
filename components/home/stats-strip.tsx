import { FlaskConical, MapPin, Sprout, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { stats } from '@/lib/content'

const icons = { users: Users, sprout: Sprout, flask: FlaskConical, map: MapPin }

export async function StatsStrip() {
  const t = await getTranslations('stats')

  return (
    <section aria-label="Adike Besaya in numbers" className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 lg:px-6">
      <div className="rounded-2xl border border-border bg-card px-5 py-6 shadow-xl shadow-deep/5 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {stats.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div key={item.id} className="flex items-center gap-3 lg:justify-center lg:px-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-leaf">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col-reverse">
                  <dt className="text-xs leading-snug text-muted-foreground lg:text-sm">{t(item.id)}</dt>
                  <dd className="text-xl font-extrabold text-primary lg:text-2xl">{item.value}</dd>
                </div>
              </div>
            )
          })}
        </dl>
        {!stats.verified && <p className="mt-4 text-center text-xs text-muted-foreground/80">{t('pending')}</p>}
      </div>
    </section>
  )
}
