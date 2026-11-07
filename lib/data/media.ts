import type { ImageKey } from '../images'
import type { L } from '../localized'

export type VideoCategory = 'tips' | 'arecanut' | 'expert' | 'fieldVisits' | 'products'

export const videoCategories: { id: VideoCategory; label: L }[] = [
  { id: 'tips', label: { en: 'Agricultural Tips', kn: 'ಕೃಷಿ ಸಲಹೆಗಳು' } },
  { id: 'arecanut', label: { en: 'Arecanut Farming', kn: 'ಅಡಿಕೆ ಕೃಷಿ' } },
  { id: 'expert', label: { en: 'Expert Guidance', kn: 'ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನ' } },
  { id: 'fieldVisits', label: { en: 'Field Visits', kn: 'ತೋಟ ಭೇಟಿಗಳು' } },
  { id: 'products', label: { en: 'Product Demonstrations', kn: 'ಉತ್ಪನ್ನ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ' } },
]

export type Video = {
  id: string
  category: VideoCategory
  /** YouTube video id (the part after watch?v=). Empty = placeholder entry, shown as "coming soon". */
  youtubeId: string
  thumbnail: ImageKey
  title: L
  description: L
}

/** Planned topics. Add the YouTube id for each once the video is published. */
export const videoLibrary: Video[] = [
  {
    id: 'soilSample',
    category: 'tips',
    youtubeId: '',
    thumbnail: 'soilSample',
    title: { en: 'How to collect a soil sample', kn: 'ಮಣ್ಣಿನ ಮಾದರಿ ಸಂಗ್ರಹಿಸುವುದು ಹೇಗೆ' },
    description: {
      en: 'A step-by-step walk-through of collecting a representative sample from your garden.',
      kn: 'ನಿಮ್ಮ ತೋಟದಿಂದ ಸರಿಯಾದ ಮಾದರಿ ಸಂಗ್ರಹಿಸುವ ಹಂತ ಹಂತದ ವಿವರಣೆ.',
    },
  },
  {
    id: 'seasonalCare',
    category: 'arecanut',
    youtubeId: '',
    thumbnail: 'monsoonGarden',
    title: { en: 'Preparing the garden before the monsoon', kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನ ತೋಟದ ಸಿದ್ಧತೆ' },
    description: {
      en: 'Drainage, sanitation and the checks that matter most before the rains begin.',
      kn: 'ಮಳೆ ಆರಂಭವಾಗುವ ಮುನ್ನ ಬಸಿಗಾಲುವೆ, ನೈರ್ಮಲ್ಯ ಮತ್ತು ಅತಿ ಮುಖ್ಯ ಪರಿಶೀಲನೆಗಳು.',
    },
  },
  {
    id: 'rootGrubSigns',
    category: 'expert',
    youtubeId: '',
    thumbnail: 'rootGrub',
    title: { en: 'Recognising root grub damage', kn: 'ಬೇರು ಹುಳುವಿನ ಹಾನಿಯನ್ನು ಗುರುತಿಸುವುದು' },
    description: {
      en: 'What the early signs look like above and below the ground.',
      kn: 'ಮಣ್ಣಿನ ಮೇಲೆ ಮತ್ತು ಕೆಳಗೆ ಕಾಣುವ ಆರಂಭಿಕ ಲಕ್ಷಣಗಳು.',
    },
  },
  {
    id: 'fieldVisit',
    category: 'fieldVisits',
    youtubeId: '',
    thumbnail: 'fieldVisit',
    title: { en: 'A day of field visits', kn: 'ತೋಟ ಭೇಟಿಯ ಒಂದು ದಿನ' },
    description: {
      en: 'Walking through farmers’ gardens and talking through the problems they face.',
      kn: 'ರೈತರ ತೋಟಗಳಲ್ಲಿ ಸುತ್ತಾಡಿ ಅವರು ಎದುರಿಸುವ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಚರ್ಚೆ.',
    },
  },
  {
    id: 'nutritionPlan',
    category: 'expert',
    youtubeId: '',
    thumbnail: 'plantNutrition',
    title: { en: 'Planning nutrition from a soil report', kn: 'ಮಣ್ಣು ಪರೀಕ್ಷಾ ವರದಿಯಿಂದ ಪೋಷಕಾಂಶ ಯೋಜನೆ' },
    description: {
      en: 'How the numbers on a report turn into a practical plan for your palms.',
      kn: 'ವರದಿಯಲ್ಲಿನ ಅಂಕಿಅಂಶಗಳು ನಿಮ್ಮ ಮರಗಳಿಗೆ ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಯಾಗುವುದು ಹೇಗೆ.',
    },
  },
  {
    id: 'productIntro',
    category: 'products',
    youtubeId: '',
    thumbnail: 'productBottle',
    title: { en: 'Introducing the Adike Besaya product range', kn: 'ಅಡಿಕೆ ಬೇಸಾಯ ಉತ್ಪನ್ನಗಳ ಪರಿಚಯ' },
    description: {
      en: 'An overview of our products and the problems each one is meant for.',
      kn: 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಪ್ರತಿಯೊಂದು ಯಾವ ಸಮಸ್ಯೆಗೆ ಉದ್ದೇಶಿತ ಎಂಬುದರ ಪರಿಚಯ.',
    },
  },
]

export type SuccessStory = {
  id: string
  farmerName: string
  district: L
  crop: L
  photo?: string
  challenge: L
  guidance: L
  result: L
  quote?: L
  /** Must be true — only publish stories the farmer has approved and Adike Besaya has verified. */
  verified: true
}

/** Add verified, farmer-approved stories here. The page shows an empty state until then. */
export const successStories: SuccessStory[] = []
