import type { ImageKey } from './images'
import { solutionCatalog } from './data/solutions'
import { productCatalog } from './data/products'
import { articleCatalog } from './data/articles'

/**
 * Homepage content. Short homepage text lives in messages/{locale}.json under the matching id;
 * long-form, bilingual content lives in lib/data/*.
 */

export const stats = {
  verified: false,
  items: [
    { id: 'farmers', value: '2,000+', icon: 'users' },
    { id: 'products', value: '100+', icon: 'sprout' },
    { id: 'services', value: '20+', icon: 'flask' },
    { id: 'districts', value: '10+', icon: 'map' },
  ],
} as const

export const solutions: { id: string; slug: string; image: ImageKey }[] = solutionCatalog
  .filter((s) => s.onHome)
  .map(({ id, slug, image }) => ({ id, slug, image: id === 'soilTesting' ? 'soilHands' : image }))

export const products: { id: string; slug: string; name: string; image: ImageKey }[] = productCatalog.map(
  ({ id, slug, name, image }) => ({ id, slug, name, image }),
)

export const articles: { id: string; slug: string; date: string; image: ImageKey }[] = articleCatalog
  .filter((a) => a.onHome)
  .map(({ id, slug, date, image }) => ({ id, slug, date, image: id === 'soilTesting' ? 'plantNutrition' : image }))

/** Add verified testimonials here. Empty slots render as clearly-marked placeholders. */
export const testimonials: { id: string; name: string; location: string; crop: string; quote: string; photo?: string }[] =
  []
