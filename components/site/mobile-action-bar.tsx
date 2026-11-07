import { MessageCircle, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { ContactLink } from './contact-link'

export async function MobileActionBar() {
  const t = await getTranslations('actions')

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-border bg-card px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <ContactLink
          kind="phone"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/20 text-base font-semibold text-primary"
        >
          <Phone className="size-5" aria-hidden="true" />
          {t('call')}
        </ContactLink>
        <ContactLink
          kind="whatsapp"
          className="flex min-h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-leaf text-base font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          {t('whatsapp')}
        </ContactLink>
      </div>
      <ContactLink
        kind="whatsapp"
        aria-label={t('whatsapp')}
        className="fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-leaf text-primary-foreground shadow-lg shadow-deep/20 transition-transform hover:scale-105 md:flex"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </ContactLink>
    </>
  )
}
