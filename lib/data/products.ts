import type { ImageKey } from '../images'
import type { L } from '../localized'

export type ProductCategory = 'soilHealth' | 'rootCare' | 'organicNutrition' | 'growthSupport'

export const productCategories: { id: ProductCategory; label: L }[] = [
  { id: 'soilHealth', label: { en: 'Soil Health', kn: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ' } },
  { id: 'rootCare', label: { en: 'Root & Soil Care', kn: 'ಬೇರು ಮತ್ತು ಮಣ್ಣಿನ ಆರೈಕೆ' } },
  { id: 'organicNutrition', label: { en: 'Organic Nutrition', kn: 'ಸಾವಯವ ಪೋಷಣೆ' } },
  { id: 'growthSupport', label: { en: 'Growth Support', kn: 'ಬೆಳವಣಿಗೆ ಪೂರಕ' } },
]

export type Product = {
  id: string
  slug: string
  /** Brand name exactly as printed on the pack. */
  name: string
  image: ImageKey
  category: ProductCategory
  short: L
  overview: L
  /**
   * Everything below must come from Adike Besaya's verified product information.
   * Empty / null renders a clearly marked "details to be confirmed" state.
   */
  features: L[]
  suitableCrops: L | null
  usage: L | null
  specifications: { label: L; value: L }[]
}

export const productCatalog: Product[] = [
  {
    id: 'sukshema',
    slug: 'sukshema',
    name: 'Sukshema',
    image: 'productSack',
    category: 'soilHealth',
    short: { en: 'Soil health and crop development', kn: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಬೆಳೆ ಬೆಳವಣಿಗೆ' },
    overview: {
      en: 'Sukshema is part of the Adike Besaya range for soil health and crop development. Speak to our team to find out whether it suits your garden and how it fits with your current nutrition plan.',
      kn: 'ಸುಕ್ಷೇಮ, ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಬೆಳೆ ಬೆಳವಣಿಗೆಗಾಗಿ ಅಡಿಕೆ ಬೇಸಾಯ ನೀಡುವ ಉತ್ಪನ್ನಗಳಲ್ಲಿ ಒಂದು. ಇದು ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಸೂಕ್ತವೇ, ಈಗಿನ ಪೋಷಕಾಂಶ ಯೋಜನೆಯೊಂದಿಗೆ ಹೇಗೆ ಹೊಂದುತ್ತದೆ ಎಂದು ತಿಳಿಯಲು ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    features: [],
    suitableCrops: null,
    usage: null,
    specifications: [],
  },
  {
    id: 'veltrix',
    slug: 'veltrix-mv',
    name: 'Veltrix MV',
    image: 'productBottle',
    category: 'rootCare',
    short: { en: 'Root and soil care', kn: 'ಬೇರು ಮತ್ತು ಮಣ್ಣಿನ ಆರೈಕೆ' },
    overview: {
      en: 'Veltrix MV is offered by Adike Besaya for root and soil care. Talk to us before use so we can understand your garden’s problem and advise whether this product is the right fit.',
      kn: 'ವೆಲ್ಟ್ರಿಕ್ಸ್ MV, ಬೇರು ಮತ್ತು ಮಣ್ಣಿನ ಆರೈಕೆಗಾಗಿ ಅಡಿಕೆ ಬೇಸಾಯ ನೀಡುವ ಉತ್ಪನ್ನ. ಬಳಸುವ ಮುನ್ನ ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ — ನಿಮ್ಮ ತೋಟದ ಸಮಸ್ಯೆಯನ್ನು ಅರಿತು, ಈ ಉತ್ಪನ್ನ ಸೂಕ್ತವೇ ಎಂದು ಸಲಹೆ ನೀಡುತ್ತೇವೆ.',
    },
    features: [],
    suitableCrops: null,
    usage: null,
    specifications: [],
  },
  {
    id: 'organicNutrient',
    slug: 'organic-nutrient',
    name: 'Organic Nutrient',
    image: 'productBag',
    category: 'organicNutrition',
    short: { en: 'Natural plant nutrition support', kn: 'ನೈಸರ್ಗಿಕ ಸಸ್ಯ ಪೋಷಣೆಗೆ ಬೆಂಬಲ' },
    overview: {
      en: 'Organic Nutrient is part of the Adike Besaya range for natural plant nutrition. Our team can explain how it fits alongside compost, mulch and your existing fertiliser schedule.',
      kn: 'ಆರ್ಗ್ಯಾನಿಕ್ ನ್ಯೂಟ್ರಿಯೆಂಟ್, ನೈಸರ್ಗಿಕ ಸಸ್ಯ ಪೋಷಣೆಗಾಗಿ ಅಡಿಕೆ ಬೇಸಾಯ ನೀಡುವ ಉತ್ಪನ್ನ. ಕಾಂಪೋಸ್ಟ್, ಹೊದಿಕೆ ಮತ್ತು ನಿಮ್ಮ ಈಗಿನ ಗೊಬ್ಬರ ವೇಳಾಪಟ್ಟಿಯೊಂದಿಗೆ ಇದು ಹೇಗೆ ಹೊಂದುತ್ತದೆ ಎಂದು ನಮ್ಮ ತಂಡ ವಿವರಿಸುತ್ತದೆ.',
    },
    features: [],
    suitableCrops: null,
    usage: null,
    specifications: [],
  },
  {
    id: 'plantBooster',
    slug: 'plant-booster',
    name: 'Plant Booster',
    image: 'productPouch',
    category: 'growthSupport',
    short: { en: 'For healthy growth and development', kn: 'ಆರೋಗ್ಯಕರ ಬೆಳವಣಿಗೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗೆ' },
    overview: {
      en: 'Plant Booster is offered by Adike Besaya to support healthy growth and development. Contact us to discuss your palms’ condition and whether this product is suitable.',
      kn: 'ಪ್ಲಾಂಟ್ ಬೂಸ್ಟರ್, ಆರೋಗ್ಯಕರ ಬೆಳವಣಿಗೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗೆ ಬೆಂಬಲವಾಗಿ ಅಡಿಕೆ ಬೇಸಾಯ ನೀಡುವ ಉತ್ಪನ್ನ. ನಿಮ್ಮ ಮರಗಳ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ಮಾತನಾಡಿ, ಈ ಉತ್ಪನ್ನ ಸೂಕ್ತವೇ ಎಂದು ತಿಳಿಯಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    features: [],
    suitableCrops: null,
    usage: null,
    specifications: [],
  },
  {
    id: 'bioBoost',
    slug: 'bio-boost',
    name: 'Bio Boost',
    image: 'productDarkBag',
    category: 'growthSupport',
    short: { en: 'Supports overall crop vitality', kn: 'ಬೆಳೆಯ ಒಟ್ಟಾರೆ ಚೈತನ್ಯಕ್ಕೆ ಬೆಂಬಲ' },
    overview: {
      en: 'Bio Boost is part of the Adike Besaya range for overall crop vitality. Speak to our team for guidance on whether it suits your garden and the current season.',
      kn: 'ಬಯೋ ಬೂಸ್ಟ್, ಬೆಳೆಯ ಒಟ್ಟಾರೆ ಚೈತನ್ಯಕ್ಕಾಗಿ ಅಡಿಕೆ ಬೇಸಾಯ ನೀಡುವ ಉತ್ಪನ್ನ. ಇದು ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಮತ್ತು ಈಗಿನ ಹಂಗಾಮಿಗೆ ಸೂಕ್ತವೇ ಎಂದು ತಿಳಿಯಲು ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    features: [],
    suitableCrops: null,
    usage: null,
    specifications: [],
  },
]

export function getProduct(slug: string) {
  return productCatalog.find((p) => p.slug === slug)
}
