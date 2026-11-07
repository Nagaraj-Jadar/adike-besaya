'use client'

import { Check, Link2 } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const t = useTranslations('common')
  const [copied, setCopied] = useState(false)
  const text = encodeURIComponent(`${title} — ${url}`)
  const encodedUrl = encodeURIComponent(url)

  const links = [
    { label: t('shareWhatsapp'), short: 'WhatsApp', href: `https://wa.me/?text=${text}` },
    { label: t('shareFacebook'), short: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: t('shareX'), short: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}` },
  ]

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-foreground">{t('share')}</span>
      {links.map((l) => (
        <a
          key={l.short}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="inline-flex min-h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-medium hover:border-leaf hover:text-leaf"
        >
          {l.short}
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-sm font-medium hover:border-leaf hover:text-leaf"
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Link2 className="size-4" aria-hidden="true" />}
        <span aria-live="polite">{copied ? t('copied') : t('copyLink')}</span>
      </button>
    </div>
  )
}
