import { ArrowRight, CircleCheck, ClipboardList, Leaf, MessageCircle, Search, Sprout, Tractor } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { images } from '@/lib/images'
import { ContactLink } from '@/components/site/contact-link'

const soilPoints = ['condition', 'nutrients', 'recommendations', 'decisions'] as const
const expertPoints = [
  { key: 'advisory', icon: ClipboardList },
  { key: 'diagnosis', icon: Search },
  { key: 'nutrients', icon: Sprout },
  { key: 'pestDisease', icon: Leaf },
  { key: 'consultation', icon: Tractor },
] as const

export async function SoilExpertSection() {
  const t = await getTranslations()

  return (
    <section aria-label={t('expert.title')} className="mx-auto max-w-7xl px-4 lg:px-6">
      <div className="grid overflow-hidden rounded-2xl lg:grid-cols-12">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-10 text-primary-foreground sm:px-10 lg:col-span-7 lg:py-14">
          <Image
            src={images.soilHands.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="-z-10 object-cover object-right opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
          <div className="flex max-w-md flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/30 text-harvest">
                <Sprout className="size-6" aria-hidden="true" />
              </span>
              <h2 className="text-2xl leading-tight font-bold text-balance lg:text-3xl">{t('soil.title')}</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {soilPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base">
                  <CircleCheck className="size-5 shrink-0 text-harvest" aria-hidden="true" />
                  {t(`soil.points.${p}`)}
                </li>
              ))}
            </ul>
            <Link
              href="/solutions/soil-testing"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-card px-6 font-semibold text-primary transition-colors hover:bg-harvest hover:text-accent-foreground"
            >
              {t('soil.cta')}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 bg-secondary px-6 py-10 sm:flex-row sm:px-10 lg:col-span-5 lg:py-14">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl font-bold text-primary">{t('expert.title')}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{t('expert.subtitle')}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {expertPoints.map(({ key, icon: Icon }) => (
                <li key={key} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Icon className="size-4 shrink-0 text-leaf" aria-hidden="true" />
                  {t(`expert.points.${key}`)}
                </li>
              ))}
            </ul>
            <ContactLink
              kind="whatsapp"
              message="Hello Adike Besaya, I would like expert guidance for my arecanut garden."
              className="mt-2 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-leaf px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {t('expert.cta')}
            </ContactLink>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:w-44 sm:self-center lg:w-40 xl:w-48">
            <Image
              src={images.expertConsultation.src}
              alt={images.expertConsultation.alt}
              fill
              sizes="(min-width: 640px) 200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
