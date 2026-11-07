import { CircleDashed } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Visibly marks content that Adike Besaya still needs to supply or confirm. */
export function PendingNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-harvest bg-harvest/10 px-3 py-1 text-xs font-medium text-foreground',
        className,
      )}
    >
      <CircleDashed className="size-3.5 shrink-0 text-harvest" aria-hidden="true" />
      {children}
    </p>
  )
}
