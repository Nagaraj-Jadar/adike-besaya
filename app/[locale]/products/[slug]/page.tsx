import { CheckCircle2, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { ProductCard } from '@/components/site/cards'
import { ContactLink } from '@/components/site/contact-link'
import { EnquiryForm } from '@/components/site/enquiry-form'
import { JsonLd } from '@/components/site/json-ld'
import { PendingNote } from '@/components/site/pending-note'
import { routing } from '@/i18n/routing'
import { getProduct, productCatalog, productCategories } from '@/lib/data/products'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { localizedPath, pageMetadata, siteUrl } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => productCatalog.map((p) => ({ locale, slug: p.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return pageMetadata({
    locale,
    path: `/products/${slug}`,
    title: `${product.name} — ${pick(product.short, locale)}`,
    description: pick(product.overview, locale),
    image: images[product.image].src,
  })
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const product = getProduct(slug)
  if (!product) notFound()

  const t = await getTranslations()
  const kn = locale === 'kn'
  const category = productCategories.find((c) => c.id === product.category)
  const others = productCatalog.filter((p) => p.id !== product.id).slice(0, 4)
  const message = kn ? `ನಮಸ್ಕಾರ, ${product.name} ಉತ್ಪನ್ನದ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕಿದೆ.` : `Hello, I'd like to enquire about ${product.name}.`

  const details: { label: string; value: string | null; list?: string[] }[] = [
    {
      label: kn ? 'ಮುಖ್ಯ ಅಂಶಗಳು' : 'Key features',
      value: null,
      list: product.features.map((f) => pick(f, locale)),
    },
    { label: kn ? 'ಸೂಕ್ತ ಬೆಳೆಗಳು' : 'Suitable crops', value: product.suitableCrops && pick(product.suitableCrops, locale) },
    { label: kn ? 'ಬಳಕೆಯ ವಿಧಾನ' : 'How to use', value: product.usage && pick(product.usage, locale) },
  ]

  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-24 pb-14 md:pt-28 lg:px-6">
          <Breadcrumbs items={[{ label: t('nav.products'), href: '/products' }, { label: product.name }]} className="text-foreground" />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-card">
              <Image
                src={images[product.image].src}
                alt={`${product.name} pack`}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-10"
              />
            </div>
            <div className="flex flex-col gap-5">
              {category && <span className="text-sm font-semibold tracking-wide text-leaf uppercase">{pick(category.label, locale)}</span>}
              <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">{product.name}</h1>
              <p className="text-lg font-medium text-foreground">{pick(product.short, locale)}</p>
              <p className="leading-relaxed text-pretty text-muted-foreground">{pick(product.overview, locale)}</p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <ContactLink
                  kind="whatsapp"
                  message={message}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {t('actions.enquireWhatsapp')}
                </ContactLink>
                <a
                  href="#enquiry-form"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/20 bg-card px-6 font-semibold text-primary hover:border-leaf"
                >
                  {t('actions.sendEnquiry')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_420px] lg:gap-16 lg:px-6 lg:py-20">
        <section aria-labelledby="details-title" className="flex flex-col gap-6">
          <h2 id="details-title" className="text-2xl font-bold tracking-tight text-primary">
            {kn ? 'ಉತ್ಪನ್ನದ ವಿವರಗಳು' : 'Product details'}
          </h2>
          <dl className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {details.map((d) => {
              const empty = d.list ? d.list.length === 0 : !d.value
              return (
                <div key={d.label} className="flex flex-col gap-2 p-5 sm:flex-row sm:gap-6">
                  <dt className="font-semibold text-foreground sm:w-44 sm:shrink-0">{d.label}</dt>
                  <dd className="text-muted-foreground">
                    {empty ? (
                      <PendingNote>{t('common.pending')}</PendingNote>
                    ) : d.list ? (
                      <ul className="flex flex-col gap-2">
                        {d.list.map((item) => (
                          <li key={item} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed">{d.value}</p>
                    )}
                  </dd>
                </div>
              )
            })}
            {product.specifications.map((s) => (
              <div key={s.label.en} className="flex flex-col gap-2 p-5 sm:flex-row sm:gap-6">
                <dt className="font-semibold text-foreground sm:w-44 sm:shrink-0">{pick(s.label, locale)}</dt>
                <dd className="text-muted-foreground">{pick(s.value, locale)}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {kn
              ? 'ಯಾವುದೇ ಉತ್ಪನ್ನ ಬಳಸುವ ಮುನ್ನ ಪ್ಯಾಕ್ ಮೇಲಿನ ಸೂಚನೆಗಳನ್ನು ಓದಿ ಮತ್ತು ನಮ್ಮ ತಂಡದ ಸಲಹೆ ಪಡೆಯಿರಿ.'
              : 'Always read the label and speak to our team before using any product in your garden.'}
          </p>
        </section>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-xl font-bold text-primary">{kn ? `${product.name} ಬಗ್ಗೆ ವಿಚಾರಿಸಿ` : `Enquire about ${product.name}`}</h2>
          <EnquiryForm page={`/products/${slug}`} defaultSubject="products" />
        </aside>
      </div>

      <section aria-labelledby="more-products" className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 lg:px-6 lg:py-20">
          <h2 id="more-products" className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
            {kn ? 'ಇತರ ಉತ್ಪನ್ನಗಳು' : 'Other products'}
          </h2>
          <ul className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} locale={locale} cta={t('actions.viewProduct')} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: pick(product.overview, locale),
          image: `${siteUrl}${images[product.image].src}`,
          brand: { '@type': 'Brand', name: 'Adike Besaya' },
          category: category ? pick(category.label, locale) : undefined,
          url: `${siteUrl}${localizedPath(locale, `/products/${slug}`)}`,
        }}
      />
    </>
  )
}
