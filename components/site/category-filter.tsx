import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

/** Server-rendered filter chips driven by the `?category=` search param, so filters are shareable and work without JS. */
export function CategoryFilter({
  basePath,
  active,
  allLabel,
  label,
  options,
}: {
  basePath: string
  active?: string
  allLabel: string
  label: string
  options: { id: string; label: string; count: number }[]
}) {
  const chip = (selected: boolean) =>
    cn(
      'inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors',
      selected ? 'border-leaf bg-leaf text-primary-foreground' : 'border-border bg-card text-foreground hover:border-leaf',
    )

  return (
    <nav aria-label={label} className="-mx-4 overflow-x-auto px-4 pb-1">
      <ul className="flex gap-2">
        <li>
          <Link href={basePath} scroll={false} aria-current={!active ? 'page' : undefined} className={chip(!active)}>
            {allLabel}
          </Link>
        </li>
        {options
          .filter((o) => o.count > 0)
          .map((o) => (
            <li key={o.id}>
              <Link
                href={{ pathname: basePath, query: { category: o.id } }}
                scroll={false}
                aria-current={active === o.id ? 'page' : undefined}
                className={chip(active === o.id)}
              >
                {o.label}
                <span className={cn('text-xs', active === o.id ? 'opacity-80' : 'text-muted-foreground')}>{o.count}</span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
