/**
 * Central photo registry. Every photo on the site is referenced from here.
 * To use Adike Besaya's real photographs, drop the file into /public/images
 * and change the `src` below — no component changes needed.
 * `interim: true` marks a temporary image that should be replaced with a real business photo.
 */
export const images = {
  logo: { src: '/brand/adike-besaya-logo.png', alt: 'Adike Besaya logo', interim: false },
  hero: {
    src: '/images/hero-plantation.png',
    alt: 'Farmer looking up at areca nut bunches in a plantation',
    interim: true,
  },
  soilHands: { src: '/images/soil-hands.png', alt: 'Farmer holding plantation soil in both hands', interim: true },
  arecanutBunch: { src: '/images/arecanut-bunch.png', alt: 'Bunch of ripening areca nuts on the palm', interim: true },
  rootGrub: { src: '/images/root-grub.png', alt: 'White root grub larva in soil', interim: true },
  leafDisease: { src: '/images/leaf-disease.png', alt: 'Areca leaf showing disease spots', interim: true },
  pestInspection: { src: '/images/pest-inspection.png', alt: 'Farmer inspecting areca nuts for pest damage', interim: true },
  plantNutrition: { src: '/images/plant-nutrition.png', alt: 'Young areca seedling growing in mulched soil', interim: true },
  expertConsultation: {
    src: '/images/expert-consultation.png',
    alt: 'Agricultural advisor guiding a farmer in an arecanut plantation',
    interim: true,
  },
  fieldVisit: {
    src: '/images/field-visit.png',
    alt: 'Advisor walking with farmers between arecanut palms',
    interim: true,
  },
  soilSample: {
    src: '/images/soil-sample.png',
    alt: 'Farmer placing a soil sample into a cloth bag beside a small pit',
    interim: true,
  },
  organicCompost: {
    src: '/images/organic-compost.png',
    alt: 'Compost and leaf mulch around the base of an arecanut palm',
    interim: true,
  },
  farmerMeeting: {
    src: '/images/farmer-meeting.png',
    alt: 'Farmers talking with an agricultural advisor on a verandah',
    interim: true,
  },
  monsoonGarden: {
    src: '/images/monsoon-garden.png',
    alt: 'Arecanut plantation in the monsoon with a drainage channel between rows',
    interim: true,
  },
  productSack: { src: '/images/product-sack.png', alt: '', interim: true },
  productBottle: { src: '/images/product-bottle.png', alt: '', interim: true },
  productBag: { src: '/images/product-bag.png', alt: '', interim: true },
  productPouch: { src: '/images/product-pouch.png', alt: '', interim: true },
  productDarkBag: { src: '/images/product-dark-bag.png', alt: '', interim: true },
} as const

export type ImageKey = keyof typeof images
