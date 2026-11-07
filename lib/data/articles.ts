import type { ImageKey } from '../images'
import type { L } from '../localized'

export type ArticleCategory =
  | 'arecanut'
  | 'soilHealth'
  | 'pest'
  | 'disease'
  | 'rootGrub'
  | 'nutrition'
  | 'organic'
  | 'seasonal'

export const articleCategories: { id: ArticleCategory; label: L }[] = [
  { id: 'arecanut', label: { en: 'Arecanut Farming', kn: 'ಅಡಿಕೆ ಕೃಷಿ' } },
  { id: 'soilHealth', label: { en: 'Soil Health', kn: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ' } },
  { id: 'pest', label: { en: 'Pest Management', kn: 'ಕೀಟ ನಿರ್ವಹಣೆ' } },
  { id: 'disease', label: { en: 'Disease Management', kn: 'ರೋಗ ನಿರ್ವಹಣೆ' } },
  { id: 'rootGrub', label: { en: 'Root Grub Management', kn: 'ಬೇರು ಹುಳು ನಿರ್ವಹಣೆ' } },
  { id: 'nutrition', label: { en: 'Plant Nutrition', kn: 'ಸಸ್ಯ ಪೋಷಣೆ' } },
  { id: 'organic', label: { en: 'Organic Farming', kn: 'ಸಾವಯವ ಕೃಷಿ' } },
  { id: 'seasonal', label: { en: 'Seasonal Farming', kn: 'ಹಂಗಾಮುವಾರು ಕೃಷಿ' } },
]

export type Article = {
  id: string
  slug: string
  date: string
  image: ImageKey
  category: ArticleCategory
  onHome: boolean
  featured: boolean
  readMinutes: number
  title: L
  excerpt: L
  sections: { heading: L; body: L }[]
}

export const articleCatalog: Article[] = [
  {
    id: 'cropCare',
    slug: 'arecanut-crop-care-key-practices',
    date: '2024-09-10',
    image: 'arecanutBunch',
    category: 'arecanut',
    onHome: true,
    featured: true,
    readMinutes: 4,
    title: {
      en: 'Arecanut Crop Care: Key Practices for Healthy Palms',
      kn: 'ಅಡಿಕೆ ಬೆಳೆ ಆರೈಕೆ: ಆರೋಗ್ಯಕರ ಮರಗಳಿಗೆ ಪ್ರಮುಖ ಕ್ರಮಗಳು',
    },
    excerpt: {
      en: 'Healthy palms come from steady, season-wise attention — water, drainage, soil care and regular observation.',
      kn: 'ಆರೋಗ್ಯಕರ ಮರಗಳು ಹಂಗಾಮುವಾರು ನಿರಂತರ ಗಮನದಿಂದ ಬರುತ್ತವೆ — ನೀರು, ಬಸಿಗಾಲುವೆ, ಮಣ್ಣಿನ ಆರೈಕೆ ಮತ್ತು ನಿಯಮಿತ ವೀಕ್ಷಣೆ.',
    },
    sections: [
      {
        heading: { en: 'Walk your garden regularly', kn: 'ತೋಟವನ್ನು ನಿಯಮಿತವಾಗಿ ಸುತ್ತಾಡಿ ನೋಡಿ' },
        body: {
          en: 'Walk through the rows every week or two. Look at leaf colour, the crown, fallen nuts and the base of the trunk. Changes you notice early are usually easier and cheaper to manage than problems found late.',
          kn: 'ಒಂದೆರಡು ವಾರಕ್ಕೊಮ್ಮೆ ಸಾಲುಗಳ ನಡುವೆ ಸುತ್ತಾಡಿ. ಎಲೆಯ ಬಣ್ಣ, ಸುಳಿ, ಉದುರಿದ ಕಾಯಿ ಮತ್ತು ಕಾಂಡದ ಬುಡವನ್ನು ಗಮನಿಸಿ. ಬೇಗನೆ ಗಮನಿಸಿದ ಬದಲಾವಣೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು, ತಡವಾಗಿ ಕಂಡ ಸಮಸ್ಯೆಗಳಿಗಿಂತ ಸುಲಭ ಮತ್ತು ಕಡಿಮೆ ಖರ್ಚಿನದು.',
        },
      },
      {
        heading: { en: 'Balance water and drainage', kn: 'ನೀರು ಮತ್ತು ಬಸಿಗಾಲುವೆಯ ಸಮತೋಲನ' },
        body: {
          en: 'Arecanut needs enough moisture in the dry months, but water standing around the roots during the monsoon damages them. Clear drainage channels before the rains and check that water does not collect in the basins.',
          kn: 'ಒಣ ತಿಂಗಳುಗಳಲ್ಲಿ ಅಡಿಕೆಗೆ ಸಾಕಷ್ಟು ತೇವಾಂಶ ಬೇಕು. ಆದರೆ ಮಳೆಗಾಲದಲ್ಲಿ ಬೇರುಗಳ ಸುತ್ತ ನೀರು ನಿಂತರೆ ಹಾನಿಯಾಗುತ್ತದೆ. ಮಳೆಗೆ ಮುನ್ನ ಬಸಿಗಾಲುವೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಪಾತಿಗಳಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        },
      },
      {
        heading: { en: 'Feed the soil, not only the palm', kn: 'ಮರಕ್ಕಷ್ಟೇ ಅಲ್ಲ, ಮಣ್ಣಿಗೂ ಪೋಷಣೆ ನೀಡಿ' },
        body: {
          en: 'Organic matter such as compost and leaf mulch helps the soil hold moisture and nutrients. Base fertiliser decisions on a soil test and on advice suited to your area, rather than fixed quantities copied from elsewhere.',
          kn: 'ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ಎಲೆ ಹೊದಿಕೆಯಂತಹ ಸಾವಯವ ವಸ್ತುಗಳು ಮಣ್ಣು ತೇವಾಂಶ ಮತ್ತು ಪೋಷಕಾಂಶಗಳನ್ನು ಹಿಡಿದಿಡಲು ನೆರವಾಗುತ್ತವೆ. ಬೇರೆಡೆಯಿಂದ ನಕಲು ಮಾಡಿದ ನಿಗದಿತ ಪ್ರಮಾಣಗಳ ಬದಲು, ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮತ್ತು ನಿಮ್ಮ ಪ್ರದೇಶಕ್ಕೆ ಸೂಕ್ತವಾದ ಸಲಹೆಯ ಆಧಾರದ ಮೇಲೆ ಗೊಬ್ಬರದ ನಿರ್ಧಾರ ಮಾಡಿ.',
        },
      },
    ],
  },
  {
    id: 'soilTesting',
    slug: 'importance-of-soil-testing',
    date: '2024-08-25',
    image: 'soilSample',
    category: 'soilHealth',
    onHome: true,
    featured: false,
    readMinutes: 4,
    title: {
      en: 'The Importance of Soil Testing in Arecanut Farming',
      kn: 'ಅಡಿಕೆ ಕೃಷಿಯಲ್ಲಿ ಮಣ್ಣು ಪರೀಕ್ಷೆಯ ಮಹತ್ವ',
    },
    excerpt: {
      en: 'A soil test tells you what your garden already has, so you spend only on what it actually needs.',
      kn: 'ನಿಮ್ಮ ತೋಟದಲ್ಲಿ ಈಗಾಗಲೇ ಏನಿದೆ ಎಂದು ಮಣ್ಣು ಪರೀಕ್ಷೆ ತಿಳಿಸುತ್ತದೆ — ಇದರಿಂದ ನಿಜವಾಗಿ ಬೇಕಾದುದಕ್ಕೆ ಮಾತ್ರ ಖರ್ಚು ಮಾಡಬಹುದು.',
    },
    sections: [
      {
        heading: { en: 'What a soil test tells you', kn: 'ಮಣ್ಣು ಪರೀಕ್ಷೆ ಏನು ತಿಳಿಸುತ್ತದೆ' },
        body: {
          en: 'Soil reports commonly include soil reaction (pH), organic carbon and the major nutrients — nitrogen, phosphorus and potassium. Some tests also cover secondary nutrients and micronutrients. Together, these show where the soil is balanced and where it is not.',
          kn: 'ಮಣ್ಣು ಪರೀಕ್ಷಾ ವರದಿಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಮಣ್ಣಿನ ರಸಸಾರ (pH), ಸಾವಯವ ಇಂಗಾಲ ಮತ್ತು ಪ್ರಮುಖ ಪೋಷಕಾಂಶಗಳಾದ ಸಾರಜನಕ, ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಇರುತ್ತವೆ. ಕೆಲವು ಪರೀಕ್ಷೆಗಳು ದ್ವಿತೀಯ ಮತ್ತು ಲಘು ಪೋಷಕಾಂಶಗಳನ್ನೂ ಒಳಗೊಂಡಿರುತ್ತವೆ. ಮಣ್ಣು ಎಲ್ಲಿ ಸಮತೋಲನದಲ್ಲಿದೆ, ಎಲ್ಲಿ ಇಲ್ಲ ಎಂಬುದನ್ನು ಇವು ಒಟ್ಟಾಗಿ ತೋರಿಸುತ್ತವೆ.',
        },
      },
      {
        heading: { en: 'Why it saves money', kn: 'ಇದು ಹಣ ಹೇಗೆ ಉಳಿಸುತ್ತದೆ' },
        body: {
          en: 'Without a test, it is easy to keep applying a nutrient the soil already has plenty of, while missing one that is actually short. Testing lets you put your money where it makes a difference.',
          kn: 'ಪರೀಕ್ಷೆ ಇಲ್ಲದಿದ್ದರೆ, ಮಣ್ಣಿನಲ್ಲಿ ಈಗಾಗಲೇ ಸಾಕಷ್ಟಿರುವ ಪೋಷಕಾಂಶವನ್ನೇ ಮತ್ತೆ ಮತ್ತೆ ಹಾಕುತ್ತಾ, ನಿಜವಾಗಿ ಕೊರತೆಯಿರುವುದನ್ನು ಕಡೆಗಣಿಸುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು. ಪರೀಕ್ಷೆಯಿಂದ ಪರಿಣಾಮ ಬೀರುವಲ್ಲಿ ಮಾತ್ರ ಹಣ ವಿನಿಯೋಗಿಸಬಹುದು.',
        },
      },
      {
        heading: { en: 'When to test', kn: 'ಯಾವಾಗ ಪರೀಕ್ಷೆ ಮಾಡಿಸಬೇಕು' },
        body: {
          en: 'Good moments to test are before planning a season’s nutrition, before new planting, and when palms show a decline that has no obvious cause. Repeat testing at intervals your advisor suggests to see how the soil is changing.',
          kn: 'ಹಂಗಾಮಿನ ಪೋಷಕಾಂಶ ಯೋಜನೆಗೆ ಮುನ್ನ, ಹೊಸ ನಾಟಿಗೆ ಮುನ್ನ, ಮತ್ತು ಸ್ಪಷ್ಟ ಕಾರಣವಿಲ್ಲದೆ ಮರಗಳು ಸೊರಗುತ್ತಿದ್ದಾಗ ಪರೀಕ್ಷೆ ಮಾಡಿಸುವುದು ಉತ್ತಮ. ಮಣ್ಣು ಹೇಗೆ ಬದಲಾಗುತ್ತಿದೆ ಎಂದು ತಿಳಿಯಲು ಸಲಹೆಗಾರರು ಸೂಚಿಸುವ ಅಂತರದಲ್ಲಿ ಮತ್ತೆ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ.',
        },
      },
    ],
  },
  {
    id: 'rootGrub',
    slug: 'understanding-root-grub',
    date: '2024-08-12',
    image: 'rootGrub',
    category: 'rootGrub',
    onHome: true,
    featured: false,
    readMinutes: 5,
    title: {
      en: 'Understanding and Managing Root Grub',
      kn: 'ಬೇರು ಹುಳುವನ್ನು ಅರಿಯುವುದು ಮತ್ತು ನಿರ್ವಹಿಸುವುದು',
    },
    excerpt: {
      en: 'Root grubs work out of sight. Knowing the early signs helps you act before palms are badly weakened.',
      kn: 'ಬೇರು ಹುಳುಗಳು ಕಣ್ಣಿಗೆ ಕಾಣದೆ ಹಾನಿ ಮಾಡುತ್ತವೆ. ಆರಂಭಿಕ ಲಕ್ಷಣಗಳನ್ನು ತಿಳಿದರೆ ಮರಗಳು ತೀರಾ ದುರ್ಬಲವಾಗುವ ಮುನ್ನ ಕ್ರಮ ಕೈಗೊಳ್ಳಬಹುದು.',
    },
    sections: [
      {
        heading: { en: 'What root grubs are', kn: 'ಬೇರು ಹುಳು ಎಂದರೇನು' },
        body: {
          en: 'Root grubs are the C-shaped, creamy-white larvae of certain beetles. They live in the soil and feed on roots, which reduces the palm’s ability to take up water and nutrients.',
          kn: 'ಬೇರು ಹುಳುಗಳು ಕೆಲವು ದುಂಬಿಗಳ "C" ಆಕಾರದ, ಬಿಳಿ-ಕೆನೆ ಬಣ್ಣದ ಮರಿಹುಳುಗಳು. ಇವು ಮಣ್ಣಿನಲ್ಲಿ ವಾಸಿಸಿ ಬೇರುಗಳನ್ನು ತಿನ್ನುತ್ತವೆ. ಇದರಿಂದ ಮರವು ನೀರು ಮತ್ತು ಪೋಷಕಾಂಶ ಹೀರುವ ಸಾಮರ್ಥ್ಯ ಕುಗ್ಗುತ್ತದೆ.',
        },
      },
      {
        heading: { en: 'Signs to look for', kn: 'ಗಮನಿಸಬೇಕಾದ ಲಕ್ಷಣಗಳು' },
        body: {
          en: 'Common signs include yellowing leaves, slower growth and, in serious cases, palms that become loose in the soil. Because these signs can have other causes, carefully dig near the roots of an affected palm to check for grubs before deciding on action.',
          kn: 'ಎಲೆಗಳು ಹಳದಿಯಾಗುವುದು, ಬೆಳವಣಿಗೆ ಕುಂಠಿತವಾಗುವುದು ಮತ್ತು ತೀವ್ರ ಸಂದರ್ಭಗಳಲ್ಲಿ ಮರವು ಮಣ್ಣಿನಲ್ಲಿ ಸಡಿಲವಾಗುವುದು ಸಾಮಾನ್ಯ ಲಕ್ಷಣಗಳು. ಈ ಲಕ್ಷಣಗಳಿಗೆ ಬೇರೆ ಕಾರಣಗಳೂ ಇರಬಹುದಾದ್ದರಿಂದ, ಕ್ರಮ ನಿರ್ಧರಿಸುವ ಮುನ್ನ ಬಾಧಿತ ಮರದ ಬೇರುಗಳ ಬಳಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಅಗೆದು ಹುಳುಗಳಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
        },
      },
      {
        heading: { en: 'Managing the problem', kn: 'ಸಮಸ್ಯೆಯ ನಿರ್ವಹಣೆ' },
        body: {
          en: 'Management usually works best as a combination of steps timed to the grub’s life cycle, rather than a single treatment. The right approach depends on how serious the infestation is and the time of year, so confirm the problem and get guidance before applying any product.',
          kn: 'ಒಂದೇ ಚಿಕಿತ್ಸೆಯ ಬದಲು, ಹುಳುವಿನ ಜೀವನಚಕ್ರಕ್ಕೆ ತಕ್ಕಂತೆ ಸಮಯ ನಿಗದಿಪಡಿಸಿದ ಹಲವು ಕ್ರಮಗಳ ಸಂಯೋಜನೆ ಸಾಮಾನ್ಯವಾಗಿ ಉತ್ತಮ ಫಲ ನೀಡುತ್ತದೆ. ಸರಿಯಾದ ವಿಧಾನವು ಬಾಧೆಯ ತೀವ್ರತೆ ಮತ್ತು ವರ್ಷದ ಸಮಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಆದ್ದರಿಂದ ಯಾವುದೇ ಉತ್ಪನ್ನ ಬಳಸುವ ಮುನ್ನ ಸಮಸ್ಯೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಂಡು ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
        },
      },
    ],
  },
  {
    id: 'nutrients',
    slug: 'nutrient-management-for-yield',
    date: '2024-07-28',
    image: 'soilHands',
    category: 'nutrition',
    onHome: true,
    featured: false,
    readMinutes: 4,
    title: {
      en: 'Nutrient Management for a Better Arecanut Yield',
      kn: 'ಉತ್ತಮ ಅಡಿಕೆ ಇಳುವರಿಗಾಗಿ ಪೋಷಕಾಂಶ ನಿರ್ವಹಣೆ',
    },
    excerpt: {
      en: 'Balance and timing matter more than quantity. A few principles for planning nutrition that works.',
      kn: 'ಪ್ರಮಾಣಕ್ಕಿಂತ ಸಮತೋಲನ ಮತ್ತು ಸಮಯ ಮುಖ್ಯ. ಫಲಕಾರಿ ಪೋಷಕಾಂಶ ಯೋಜನೆಗೆ ಕೆಲವು ತತ್ವಗಳು.',
    },
    sections: [
      {
        heading: { en: 'Balance comes first', kn: 'ಮೊದಲು ಸಮತೋಲನ' },
        body: {
          en: 'Palms need several nutrients working together. Adding more of one cannot make up for a shortage of another, which is why a soil test is the best starting point for any nutrition plan.',
          kn: 'ಮರಗಳಿಗೆ ಹಲವು ಪೋಷಕಾಂಶಗಳು ಒಟ್ಟಾಗಿ ಬೇಕು. ಒಂದನ್ನು ಹೆಚ್ಚು ಹಾಕಿದರೆ ಇನ್ನೊಂದರ ಕೊರತೆ ತುಂಬುವುದಿಲ್ಲ. ಅದಕ್ಕಾಗಿಯೇ ಯಾವುದೇ ಪೋಷಕಾಂಶ ಯೋಜನೆಗೆ ಮಣ್ಣು ಪರೀಕ್ಷೆಯೇ ಉತ್ತಮ ಆರಂಭ.',
        },
      },
      {
        heading: { en: 'Combine organic and mineral sources', kn: 'ಸಾವಯವ ಮತ್ತು ರಾಸಾಯನಿಕ ಮೂಲಗಳ ಸಂಯೋಜನೆ' },
        body: {
          en: 'Organic matter improves the soil’s ability to hold and release nutrients, while mineral fertilisers supply specific nutrients more directly. Many growers use both, adjusted to their soil and palms.',
          kn: 'ಸಾವಯವ ವಸ್ತುಗಳು ಮಣ್ಣು ಪೋಷಕಾಂಶಗಳನ್ನು ಹಿಡಿದಿಟ್ಟು ಬಿಡುಗಡೆ ಮಾಡುವ ಸಾಮರ್ಥ್ಯ ಹೆಚ್ಚಿಸುತ್ತವೆ. ರಾಸಾಯನಿಕ ಗೊಬ್ಬರಗಳು ನಿರ್ದಿಷ್ಟ ಪೋಷಕಾಂಶಗಳನ್ನು ನೇರವಾಗಿ ಒದಗಿಸುತ್ತವೆ. ಅನೇಕ ಬೆಳೆಗಾರರು ತಮ್ಮ ಮಣ್ಣು ಮತ್ತು ಮರಗಳಿಗೆ ತಕ್ಕಂತೆ ಎರಡನ್ನೂ ಬಳಸುತ್ತಾರೆ.',
        },
      },
      {
        heading: { en: 'Time applications carefully', kn: 'ಗೊಬ್ಬರ ಹಾಕುವ ಸಮಯದ ಬಗ್ಗೆ ಎಚ್ಚರ' },
        body: {
          en: 'Apply nutrients when there is moisture in the soil so roots can take them up, and avoid applying just before very heavy rain, when they can be washed away. Splitting the total into more than one application is often advised — ask what suits your garden.',
          kn: 'ಬೇರುಗಳು ಹೀರಿಕೊಳ್ಳಲು ಅನುಕೂಲವಾಗುವಂತೆ ಮಣ್ಣಿನಲ್ಲಿ ತೇವಾಂಶ ಇರುವಾಗ ಗೊಬ್ಬರ ಹಾಕಿ. ಭಾರಿ ಮಳೆಗೆ ಸ್ವಲ್ಪ ಮುಂಚೆ ಹಾಕಿದರೆ ಕೊಚ್ಚಿಹೋಗಬಹುದು. ಒಟ್ಟು ಪ್ರಮಾಣವನ್ನು ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಕಂತುಗಳಲ್ಲಿ ಹಾಕುವಂತೆ ಹೆಚ್ಚಾಗಿ ಸಲಹೆ ನೀಡಲಾಗುತ್ತದೆ — ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಯಾವುದು ಸೂಕ್ತ ಎಂದು ಕೇಳಿ ತಿಳಿಯಿರಿ.',
        },
      },
    ],
  },
  {
    id: 'pestSigns',
    slug: 'spotting-pest-damage-early',
    date: '2026-10-20',
    image: 'pestInspection',
    category: 'pest',
    onHome: false,
    featured: false,
    readMinutes: 3,
    title: {
      en: 'Spotting Pest Damage Early in Arecanut Gardens',
      kn: 'ಅಡಿಕೆ ತೋಟದಲ್ಲಿ ಕೀಟ ಹಾನಿಯನ್ನು ಬೇಗನೆ ಗುರುತಿಸುವುದು',
    },
    excerpt: {
      en: 'Identify first, then act. How careful observation saves money and protects beneficial insects.',
      kn: 'ಮೊದಲು ಗುರುತಿಸಿ, ನಂತರ ಕ್ರಮ. ಎಚ್ಚರಿಕೆಯ ವೀಕ್ಷಣೆ ಹಣ ಉಳಿಸಿ ಉಪಕಾರಿ ಕೀಟಗಳನ್ನು ಹೇಗೆ ರಕ್ಷಿಸುತ್ತದೆ.',
    },
    sections: [
      {
        heading: { en: 'Know what to look for', kn: 'ಏನನ್ನು ಗಮನಿಸಬೇಕು' },
        body: {
          en: 'Watch for damaged or dropping nuts, holes or scraping on nuts, unusual leaf discolouration and insects on the flower bunches. Note which rows are affected and whether the damage is spreading.',
          kn: 'ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ಉದುರುತ್ತಿರುವ ಕಾಯಿಗಳು, ಕಾಯಿಯ ಮೇಲಿನ ರಂಧ್ರ ಅಥವಾ ಕೆರೆತ, ಎಲೆಯ ಅಸಹಜ ಬಣ್ಣ ಬದಲಾವಣೆ ಮತ್ತು ಹೂಗೊಂಚಲುಗಳ ಮೇಲಿನ ಕೀಟಗಳನ್ನು ಗಮನಿಸಿ. ಯಾವ ಸಾಲುಗಳು ಬಾಧಿತವಾಗಿವೆ, ಹಾನಿ ಹರಡುತ್ತಿದೆಯೇ ಎಂದು ಬರೆದಿಡಿ.',
        },
      },
      {
        heading: { en: 'Record what you see', kn: 'ಕಂಡದ್ದನ್ನು ದಾಖಲಿಸಿ' },
        body: {
          en: 'Clear photos of the damage, the insect if you can find it, and the number of palms affected make diagnosis much easier — whether you share them with us or with your local agriculture office.',
          kn: 'ಹಾನಿಯ ಸ್ಪಷ್ಟ ಫೋಟೋಗಳು, ಸಿಕ್ಕರೆ ಕೀಟದ ಫೋಟೋ ಮತ್ತು ಬಾಧಿತ ಮರಗಳ ಸಂಖ್ಯೆ — ನೀವು ಇವುಗಳನ್ನು ನಮ್ಮೊಂದಿಗೆ ಅಥವಾ ಸ್ಥಳೀಯ ಕೃಷಿ ಕಚೇರಿಯೊಂದಿಗೆ ಹಂಚಿಕೊಂಡರೂ ಸಮಸ್ಯೆ ಪತ್ತೆ ಬಹಳ ಸುಲಭವಾಗುತ್ತದೆ.',
        },
      },
      {
        heading: { en: 'Act on a confirmed problem', kn: 'ಖಚಿತವಾದ ಸಮಸ್ಯೆಗೆ ಮಾತ್ರ ಕ್ರಮ' },
        body: {
          en: 'Spraying without knowing the pest wastes money and can harm the natural enemies that keep pests under control. Once the pest is identified, follow guidance that is recommended for your area and season.',
          kn: 'ಕೀಟ ಯಾವುದು ಎಂದು ತಿಳಿಯದೆ ಸಿಂಪಡಿಸಿದರೆ ಹಣ ವ್ಯರ್ಥವಾಗುತ್ತದೆ ಮತ್ತು ಕೀಟಗಳನ್ನು ಹತೋಟಿಯಲ್ಲಿಡುವ ನೈಸರ್ಗಿಕ ಶತ್ರುಗಳಿಗೂ ಹಾನಿಯಾಗಬಹುದು. ಕೀಟವನ್ನು ಗುರುತಿಸಿದ ನಂತರ, ನಿಮ್ಮ ಪ್ರದೇಶ ಮತ್ತು ಹಂಗಾಮಿಗೆ ಶಿಫಾರಸು ಮಾಡಲಾದ ಮಾರ್ಗದರ್ಶನವನ್ನು ಅನುಸರಿಸಿ.',
        },
      },
    ],
  },
  {
    id: 'monsoonDisease',
    slug: 'preparing-for-monsoon-diseases',
    date: '2026-10-06',
    image: 'leafDisease',
    category: 'disease',
    onHome: false,
    featured: false,
    readMinutes: 4,
    title: {
      en: 'Preparing Your Garden for Monsoon Diseases',
      kn: 'ಮಳೆಗಾಲದ ರೋಗಗಳಿಗೆ ತೋಟವನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು',
    },
    excerpt: {
      en: 'Continuous rain and humidity raise disease risk. Preparation before the rains is your first line of defence.',
      kn: 'ಸತತ ಮಳೆ ಮತ್ತು ಆರ್ದ್ರತೆ ರೋಗದ ಅಪಾಯ ಹೆಚ್ಚಿಸುತ್ತವೆ. ಮಳೆಗೆ ಮುನ್ನದ ಸಿದ್ಧತೆಯೇ ನಿಮ್ಮ ಮೊದಲ ರಕ್ಷಣೆ.',
    },
    sections: [
      {
        heading: { en: 'Why the monsoon is a high-risk period', kn: 'ಮಳೆಗಾಲ ಏಕೆ ಅಪಾಯಕಾರಿ ಸಮಯ' },
        body: {
          en: 'Long spells of rain and high humidity favour fungal diseases. In Karnataka’s arecanut belt, fruit rot (koleroga) is one of the best-known monsoon problems, but other diseases can also affect nuts, leaves and the crown.',
          kn: 'ದೀರ್ಘ ಮಳೆ ಮತ್ತು ಹೆಚ್ಚಿನ ಆರ್ದ್ರತೆ ಶಿಲೀಂಧ್ರ ರೋಗಗಳಿಗೆ ಅನುಕೂಲಕರ. ಕರ್ನಾಟಕದ ಅಡಿಕೆ ಪ್ರದೇಶದಲ್ಲಿ ಕೊಳೆರೋಗ ಮಳೆಗಾಲದ ಅತ್ಯಂತ ಪರಿಚಿತ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಒಂದು. ಆದರೆ ಇತರ ರೋಗಗಳೂ ಕಾಯಿ, ಎಲೆ ಮತ್ತು ಸುಳಿಯನ್ನು ಬಾಧಿಸಬಹುದು.',
        },
      },
      {
        heading: { en: 'Prepare before the rains', kn: 'ಮಳೆಗೆ ಮುನ್ನ ಸಿದ್ಧರಾಗಿ' },
        body: {
          en: 'Clear drainage channels, remove fallen and infected nuts and plant material, and keep the garden clean. Good sanitation reduces the amount of disease that can build up once the rains begin.',
          kn: 'ಬಸಿಗಾಲುವೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಉದುರಿದ ಮತ್ತು ರೋಗಬಾಧಿತ ಕಾಯಿ ಹಾಗೂ ಸಸ್ಯಭಾಗಗಳನ್ನು ತೆಗೆದುಹಾಕಿ, ತೋಟವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ. ಉತ್ತಮ ನೈರ್ಮಲ್ಯ, ಮಳೆ ಆರಂಭವಾದ ನಂತರ ರೋಗ ಹೆಚ್ಚುವುದನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.',
        },
      },
      {
        heading: { en: 'Confirm before you treat', kn: 'ಚಿಕಿತ್ಸೆಗೆ ಮುನ್ನ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ' },
        body: {
          en: 'Several diseases look similar in their early stages. Get the problem confirmed and follow locally recommended guidance on what to use and when, rather than relying on what a neighbour used.',
          kn: 'ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ಹಲವು ರೋಗಗಳು ಒಂದೇ ರೀತಿ ಕಾಣುತ್ತವೆ. ನೆರೆಹೊರೆಯವರು ಬಳಸಿದ್ದನ್ನೇ ಅವಲಂಬಿಸುವ ಬದಲು, ಸಮಸ್ಯೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಂಡು ಏನು, ಯಾವಾಗ ಬಳಸಬೇಕು ಎಂಬ ಸ್ಥಳೀಯ ಶಿಫಾರಸನ್ನು ಅನುಸರಿಸಿ.',
        },
      },
    ],
  },
  {
    id: 'organicMatter',
    slug: 'using-organic-matter-and-mulch',
    date: '2026-09-22',
    image: 'organicCompost',
    category: 'organic',
    onHome: false,
    featured: false,
    readMinutes: 4,
    title: {
      en: 'Using Organic Matter and Mulch in Arecanut Gardens',
      kn: 'ಅಡಿಕೆ ತೋಟದಲ್ಲಿ ಸಾವಯವ ವಸ್ತು ಮತ್ತು ಹೊದಿಕೆಯ ಬಳಕೆ',
    },
    excerpt: {
      en: 'Compost and mulch build healthier soil over time. A few practical points on using them well.',
      kn: 'ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ಹೊದಿಕೆ ಕಾಲಕ್ರಮೇಣ ಮಣ್ಣನ್ನು ಆರೋಗ್ಯಕರವಾಗಿಸುತ್ತವೆ. ಅವುಗಳನ್ನು ಸರಿಯಾಗಿ ಬಳಸಲು ಕೆಲವು ಪ್ರಾಯೋಗಿಕ ಅಂಶಗಳು.',
    },
    sections: [
      {
        heading: { en: 'Why organic matter matters', kn: 'ಸಾವಯವ ವಸ್ತು ಏಕೆ ಮುಖ್ಯ' },
        body: {
          en: 'Organic matter improves soil structure, helps the soil hold water through dry months and feeds the soil life that supports healthy roots.',
          kn: 'ಸಾವಯವ ವಸ್ತು ಮಣ್ಣಿನ ರಚನೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ, ಒಣ ತಿಂಗಳುಗಳಲ್ಲಿ ಮಣ್ಣು ನೀರು ಹಿಡಿದಿಡಲು ನೆರವಾಗುತ್ತದೆ ಮತ್ತು ಆರೋಗ್ಯಕರ ಬೇರುಗಳಿಗೆ ಬೆಂಬಲ ನೀಡುವ ಮಣ್ಣಿನ ಜೀವಿಗಳಿಗೆ ಆಹಾರವಾಗುತ್ತದೆ.',
        },
      },
      {
        heading: { en: 'Common sources', kn: 'ಸಾಮಾನ್ಯ ಮೂಲಗಳು' },
        body: {
          en: 'Compost, well-rotted farmyard manure, green leaf and garden residues are all used by arecanut growers. Whatever you use, it should be well decomposed before it goes into the basin.',
          kn: 'ಕಾಂಪೋಸ್ಟ್, ಚೆನ್ನಾಗಿ ಕಳಿತ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ, ಹಸಿರೆಲೆ ಮತ್ತು ತೋಟದ ತ್ಯಾಜ್ಯಗಳನ್ನು ಅಡಿಕೆ ಬೆಳೆಗಾರರು ಬಳಸುತ್ತಾರೆ. ಯಾವುದನ್ನೇ ಬಳಸಿದರೂ, ಪಾತಿಗೆ ಹಾಕುವ ಮುನ್ನ ಅದು ಚೆನ್ನಾಗಿ ಕಳಿತಿರಬೇಕು.',
        },
      },
      {
        heading: { en: 'Apply it well', kn: 'ಸರಿಯಾಗಿ ಬಳಸಿ' },
        body: {
          en: 'Spread organic matter across the basin rather than piling it against the trunk, and use mulch to protect the soil surface before the dry season. Quality varies between sources, so check what you are buying.',
          kn: 'ಸಾವಯವ ವಸ್ತುವನ್ನು ಕಾಂಡಕ್ಕೆ ಒತ್ತಿ ರಾಶಿ ಹಾಕುವ ಬದಲು ಪಾತಿಯಾದ್ಯಂತ ಹರಡಿ. ಬೇಸಿಗೆಗೆ ಮುನ್ನ ಮಣ್ಣಿನ ಮೇಲ್ಮೈ ರಕ್ಷಿಸಲು ಹೊದಿಕೆ ಬಳಸಿ. ಮೂಲದಿಂದ ಮೂಲಕ್ಕೆ ಗುಣಮಟ್ಟ ಬದಲಾಗುವುದರಿಂದ, ಖರೀದಿಸುವುದನ್ನು ಪರಿಶೀಲಿಸಿ.',
        },
      },
    ],
  },
  {
    id: 'seasonalChecklist',
    slug: 'season-by-season-checklist',
    date: '2026-11-02',
    image: 'monsoonGarden',
    category: 'seasonal',
    onHome: false,
    featured: true,
    readMinutes: 5,
    title: {
      en: 'A Season-by-Season Checklist for Arecanut Growers',
      kn: 'ಅಡಿಕೆ ಬೆಳೆಗಾರರಿಗೆ ಹಂಗಾಮುವಾರು ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
    },
    excerpt: {
      en: 'What to focus on before, during and after the monsoon — a simple way to plan the garden year.',
      kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನ, ಮಳೆಗಾಲದಲ್ಲಿ ಮತ್ತು ನಂತರ ಯಾವುದಕ್ಕೆ ಗಮನ ಕೊಡಬೇಕು — ತೋಟದ ವರ್ಷವನ್ನು ಯೋಜಿಸುವ ಸರಳ ವಿಧಾನ.',
    },
    sections: [
      {
        heading: { en: 'Before the monsoon', kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನ' },
        body: {
          en: 'Clear drainage channels, clean the garden of fallen and infected material, and consider a soil test so the season’s nutrition can be planned in time.',
          kn: 'ಬಸಿಗಾಲುವೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಉದುರಿದ ಮತ್ತು ರೋಗಬಾಧಿತ ಭಾಗಗಳನ್ನು ತೆಗೆದು ತೋಟ ಸ್ವಚ್ಛಗೊಳಿಸಿ. ಹಂಗಾಮಿನ ಪೋಷಕಾಂಶ ಯೋಜನೆಯನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮಾಡಲು ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮಾಡಿಸುವ ಬಗ್ಗೆ ಯೋಚಿಸಿ.',
        },
      },
      {
        heading: { en: 'During the monsoon', kn: 'ಮಳೆಗಾಲದಲ್ಲಿ' },
        body: {
          en: 'Watch closely for disease on nuts and the crown, make sure water is not standing in the basins, and act early on any confirmed problem.',
          kn: 'ಕಾಯಿ ಮತ್ತು ಸುಳಿಯ ಮೇಲೆ ರೋಗದ ಲಕ್ಷಣಗಳನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ಗಮನಿಸಿ, ಪಾತಿಗಳಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ, ಖಚಿತವಾದ ಯಾವುದೇ ಸಮಸ್ಯೆಗೆ ಬೇಗನೆ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ.',
        },
      },
      {
        heading: { en: 'After the rains and into summer', kn: 'ಮಳೆಯ ನಂತರ ಮತ್ತು ಬೇಸಿಗೆಯಲ್ಲಿ' },
        body: {
          en: 'Plan nutrition while the soil still has moisture, mulch the basins before the dry months, check that irrigation is working, and protect young palms from strong sun.',
          kn: 'ಮಣ್ಣಿನಲ್ಲಿ ಇನ್ನೂ ತೇವಾಂಶ ಇರುವಾಗಲೇ ಪೋಷಕಾಂಶ ಯೋಜಿಸಿ, ಒಣ ತಿಂಗಳುಗಳಿಗೆ ಮುನ್ನ ಪಾತಿಗಳಿಗೆ ಹೊದಿಕೆ ಹಾಕಿ, ನೀರಾವರಿ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಎಳೆಯ ಗಿಡಗಳನ್ನು ತೀವ್ರ ಬಿಸಿಲಿನಿಂದ ರಕ್ಷಿಸಿ.',
        },
      },
    ],
  },
]

export const sortedArticles = [...articleCatalog].sort((a, b) => b.date.localeCompare(a.date))

export function getArticle(slug: string) {
  return articleCatalog.find((a) => a.slug === slug)
}

export function getRelatedArticles(article: Article, count = 3) {
  const sameCategory = sortedArticles.filter((a) => a.id !== article.id && a.category === article.category)
  const others = sortedArticles.filter((a) => a.id !== article.id && a.category !== article.category)
  return [...sameCategory, ...others].slice(0, count)
}
