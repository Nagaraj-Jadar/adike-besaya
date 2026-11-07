import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ProductCard } from '@/components/site/cards'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { PendingNote } from '@/components/site/pending-note'
import { productCatalog, productCategories } from '@/lib/data/products'
import { pick } from '@/lib/localized'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const copy = {
  title: { en: 'Our Products', kn: 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು' },
  intro: {
    en: 'Agricultural products from Adike Besaya for soil health, root care, nutrition and growth. Ask our team which one suits your garden.',
    kn: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ, ಬೇರು ಆರೈಕೆ, ಪೋಷಣೆ ಮತ್ತು ಬೆಳವಣಿಗೆಗಾಗಿ ಅಡಿಕೆ ಬೇಸಾಯದ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು. ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಯಾವುದು ಸೂಕ್ತ ಎಂದು ನಮ್ಮ ತಂಡವನ್ನು ಕೇಳಿ.',
  },
  pending: {
    en: 'Detailed composition, dosage and pack sizes will be added once confirmed by Adike Besaya.',
    kn: 'ವಿವರವಾದ ಸಂಯೋಜನೆ, ಪ್ರಮಾಣ ಮತ್ತು ಪ್ಯಾಕ್ ಗಾತ್ರಗಳನ್ನು ಅಡಿಕೆ ಬೇಸಾಯ ಖಚಿತಪಡಿಸಿದ ನಂತರ ಸೇರಿಸಲಾಗುವುದು.',
  },
  ctaTitle: { en: 'Not sure which product you need?', kn: 'ಯಾವ ಉತ್ಪನ್ನ ಬೇಕು ಎಂದು ಖಚಿತವಿಲ್ಲವೇ?' },
  ctaBody: {
    en: 'Tell us about your garden and the problem you see. We will suggest whether a product is needed at all — and which one.',
    kn: 'ನಿಮ್ಮ ತೋಟ ಮತ್ತು ಕಾಣುತ್ತಿರುವ ಸಮಸ್ಯೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ. ಉತ್ಪನ್ನದ ಅಗತ್ಯವಿದೆಯೇ, ಇದ್ದರೆ ಯಾವುದು ಎಂದು ಸಲಹೆ ನೀಡುತ್ತೇವೆ.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata({ locale, path: '/products', title: pick(copy.title, locale), description: pick(copy.intro, locale) })
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const groups = productCategories
    .map((c) => ({ ...c, items: productCatalog.filter((p) => p.category === c.id) }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <PageHero
        image="organicCompost"
        eyebrow={t('brand.tagline')}
        title={pick(copy.title, locale)}
        intro={pick(copy.intro, locale)}
        crumbs={[{ label: t('nav.products') }]}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-14 lg:px-6 lg:py-20">
        <PendingNote>{pick(copy.pending, locale)}</PendingNote>

        {groups.map((g) => (
          <section key={g.id} aria-labelledby={`cat-${g.id}`} className="flex flex-col gap-6">
            <h2 id={`cat-${g.id}`} className="text-2xl font-bold tracking-tight text-primary">
              {pick(g.label, locale)}
            </h2>
            <ul className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 lg:grid-cols-4">
              {g.items.map((p) => (
                <li key={p.id}>
                  <ProductCard product={p} locale={locale} cta={t('actions.viewProduct')} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CtaBand title={pick(copy.ctaTitle, locale)} body={pick(copy.ctaBody, locale)} />
    </>
  )
}
