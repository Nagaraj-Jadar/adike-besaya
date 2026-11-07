import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { products } from '@/lib/content'
import { images } from '@/lib/images'
import { ContactLink } from '@/components/site/contact-link'
import { SectionHeading } from '@/components/site/section-heading'

export async function ProductsSection() {
  const t = await getTranslations()

  return (
    <section aria-labelledby="products-title" className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <SectionHeading
        id="products-title"
        title={t('products.title')}
        subtitle={t('products.subtitle')}
        action={{ href: '/products', label: t('products.viewAll') }}
      />
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex w-[70%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-card sm:w-[40%] md:w-[30%] lg:w-auto"
          >
            <Link href={`/products/${p.slug}`} className="group flex flex-1 flex-col">
              <div className="relative aspect-square bg-background">
                <Image
                  src={images[p.image].src}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 70vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 px-4 pt-4 text-center">
                <h3 className="text-lg font-bold text-primary">{p.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`products.items.${p.id}`)}</p>
              </div>
            </Link>
            <div className="p-4">
              <ContactLink
                kind="whatsapp"
                message={`Hello Adike Besaya, I would like to know more about ${p.name}.`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-leaf/30 text-sm font-semibold text-leaf transition-colors hover:bg-leaf hover:text-primary-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {t('actions.enquire')}
              </ContactLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
