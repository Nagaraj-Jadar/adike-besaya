import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

type Props = {
  id: string
  title: string
  subtitle?: string
  action?: { href: string; label: string }
}

export function SectionHeading({ id, title, subtitle, action }: Props) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 lg:mb-8">
      <div className="flex flex-col gap-1.5">
        <h2 id={id} className="text-2xl font-bold tracking-tight text-balance text-primary lg:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="text-sm leading-relaxed text-pretty text-muted-foreground lg:text-base">{subtitle}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-leaf"
        >
          <span className="hidden sm:inline">{action.label}</span>
          <span className="sm:hidden">{action.label.split(' ').slice(0, 2).join(' ')}</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
