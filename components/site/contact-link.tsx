import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { phoneHref, whatsappHref } from '@/lib/site'

type Props = {
  kind: 'whatsapp' | 'phone'
  message?: string
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/** Opens WhatsApp / dialer when the number is configured, otherwise falls back to the contact page. */
export function ContactLink({ kind, message, className, children, ...rest }: Props) {
  const href = kind === 'whatsapp' ? whatsappHref(message) : phoneHref()

  if (!href) {
    return (
      <Link href="/contact" className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      {...(kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
