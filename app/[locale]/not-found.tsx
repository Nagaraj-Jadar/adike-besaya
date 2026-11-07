import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function NotFound() {
  const t = useTranslations('notFound')
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-5 px-4 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-leaf uppercase">404</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-balance text-primary md:text-4xl">{t('title')}</h1>
      <p className="leading-relaxed text-muted-foreground">{t('body')}</p>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center rounded-full bg-leaf px-6 font-semibold text-primary-foreground hover:bg-primary"
      >
        {t('cta')}
      </Link>
    </section>
  )
}
