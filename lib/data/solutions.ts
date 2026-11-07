import type { ImageKey } from '../images'
import type { L } from '../localized'

export type Solution = {
  id: string
  slug: string
  image: ImageKey
  onHome: boolean
  /** true while Adike Besaya has not yet confirmed the service is offered in all areas */
  availabilityToConfirm: boolean
  title: L
  short: L
  detail: L
  body: L
  focus: L[]
  related: string[]
}

export const solutionCatalog: Solution[] = [
  {
    id: 'soilTesting',
    slug: 'soil-testing',
    image: 'soilSample',
    onHome: true,
    availabilityToConfirm: false,
    title: { en: 'Soil Testing', kn: 'ಮಣ್ಣು ಪರೀಕ್ಷೆ' },
    short: {
      en: 'Know your soil’s health and nutrient needs before you plan inputs.',
      kn: 'ಗೊಬ್ಬರ ಯೋಜಿಸುವ ಮುನ್ನ ನಿಮ್ಮ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಪೋಷಕಾಂಶಗಳ ಅಗತ್ಯ ತಿಳಿಯಿರಿ.',
    },
    detail: {
      en: 'A soil test shows what your garden already has and what it lacks. We help you collect a proper sample, arrange testing and understand the results, so fertiliser decisions are based on evidence rather than guesswork.',
      kn: 'ನಿಮ್ಮ ತೋಟದ ಮಣ್ಣಿನಲ್ಲಿ ಈಗಾಗಲೇ ಏನಿದೆ, ಯಾವುದರ ಕೊರತೆಯಿದೆ ಎಂಬುದನ್ನು ಮಣ್ಣು ಪರೀಕ್ಷೆ ತೋರಿಸುತ್ತದೆ. ಸರಿಯಾದ ಮಾದರಿ ಸಂಗ್ರಹಿಸಲು, ಪರೀಕ್ಷೆ ಏರ್ಪಡಿಸಲು ಮತ್ತು ಫಲಿತಾಂಶವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ. ಇದರಿಂದ ಗೊಬ್ಬರದ ನಿರ್ಧಾರಗಳು ಊಹೆಯ ಬದಲು ಆಧಾರದ ಮೇಲೆ ಆಗುತ್ತವೆ.',
    },
    body: {
      en: 'Arecanut is a long-term crop, and soil conditions change slowly over years of cultivation. Testing at the right time lets you correct imbalances early, avoid spending on inputs your soil does not need, and track how your garden responds season after season.',
      kn: 'ಅಡಿಕೆ ದೀರ್ಘಾವಧಿ ಬೆಳೆ. ವರ್ಷಗಳ ಕೃಷಿಯಲ್ಲಿ ಮಣ್ಣಿನ ಸ್ಥಿತಿ ನಿಧಾನವಾಗಿ ಬದಲಾಗುತ್ತದೆ. ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿದರೆ ಅಸಮತೋಲನವನ್ನು ಬೇಗನೆ ಸರಿಪಡಿಸಬಹುದು, ಅಗತ್ಯವಿಲ್ಲದ ಒಳಸುರಿಗಳ ಖರ್ಚು ತಪ್ಪಿಸಬಹುದು ಮತ್ತು ಪ್ರತಿ ಹಂಗಾಮಿನಲ್ಲಿ ತೋಟದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಗಮನಿಸಬಹುದು.',
    },
    focus: [
      { en: 'Guidance on collecting a representative sample', kn: 'ಸರಿಯಾದ ಪ್ರಾತಿನಿಧಿಕ ಮಾದರಿ ಸಂಗ್ರಹಣೆಗೆ ಮಾರ್ಗದರ್ಶನ' },
      { en: 'Soil reaction (pH) and organic matter', kn: 'ಮಣ್ಣಿನ ರಸಸಾರ (pH) ಮತ್ತು ಸಾವಯವ ಅಂಶ' },
      { en: 'Major and minor nutrient levels', kn: 'ಪ್ರಮುಖ ಮತ್ತು ಲಘು ಪೋಷಕಾಂಶಗಳ ಮಟ್ಟ' },
      { en: 'Explaining the report in plain language', kn: 'ವರದಿಯನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸುವುದು' },
    ],
    related: ['nutrition', 'organic', 'cropManagement'],
  },
  {
    id: 'cropManagement',
    slug: 'arecanut-crop-management',
    image: 'arecanutBunch',
    onHome: true,
    availabilityToConfirm: false,
    title: { en: 'Arecanut Crop Management', kn: 'ಅಡಿಕೆ ಬೆಳೆ ನಿರ್ವಹಣೆ' },
    short: {
      en: 'Season-wise care for healthy, productive palms.',
      kn: 'ಆರೋಗ್ಯಕರ, ಉತ್ಪಾದಕ ಮರಗಳಿಗಾಗಿ ಹಂಗಾಮುವಾರು ಆರೈಕೆ.',
    },
    detail: {
      en: 'Good yields come from steady attention across the year — water, drainage, shade, nutrition and regular observation. We help you plan garden work around the seasons and the age of your palms.',
      kn: 'ಉತ್ತಮ ಇಳುವರಿ ವರ್ಷವಿಡೀ ನೀಡುವ ನಿರಂತರ ಗಮನದಿಂದ ಬರುತ್ತದೆ — ನೀರು, ಬಸಿಗಾಲುವೆ, ನೆರಳು, ಪೋಷಣೆ ಮತ್ತು ನಿಯಮಿತ ವೀಕ್ಷಣೆ. ಹಂಗಾಮು ಮತ್ತು ಮರಗಳ ವಯಸ್ಸಿಗೆ ತಕ್ಕಂತೆ ತೋಟದ ಕೆಲಸಗಳನ್ನು ಯೋಜಿಸಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    body: {
      en: 'Every garden is different. Rainfall, slope, soil type, irrigation and the age of the palms all change what the right practice is. We look at your garden as a whole and suggest practical steps you can follow with the resources you already have.',
      kn: 'ಪ್ರತಿಯೊಂದು ತೋಟವೂ ಭಿನ್ನ. ಮಳೆ, ಇಳಿಜಾರು, ಮಣ್ಣಿನ ಬಗೆ, ನೀರಾವರಿ ಮತ್ತು ಮರಗಳ ವಯಸ್ಸು — ಇವೆಲ್ಲವೂ ಸರಿಯಾದ ಕ್ರಮವನ್ನು ನಿರ್ಧರಿಸುತ್ತವೆ. ನಿಮ್ಮ ತೋಟವನ್ನು ಒಟ್ಟಾರೆಯಾಗಿ ಗಮನಿಸಿ, ನಿಮ್ಮ ಬಳಿ ಇರುವ ಸಂಪನ್ಮೂಲಗಳಲ್ಲೇ ಪಾಲಿಸಬಹುದಾದ ಪ್ರಾಯೋಗಿಕ ಹೆಜ್ಜೆಗಳನ್ನು ಸೂಚಿಸುತ್ತೇವೆ.',
    },
    focus: [
      { en: 'Irrigation and drainage planning', kn: 'ನೀರಾವರಿ ಮತ್ತು ಬಸಿಗಾಲುವೆ ಯೋಜನೆ' },
      { en: 'Care for young and bearing palms', kn: 'ಎಳೆಯ ಮತ್ತು ಫಲ ಕೊಡುವ ಮರಗಳ ಆರೈಕೆ' },
      { en: 'Seasonal work calendar', kn: 'ಹಂಗಾಮುವಾರು ಕೆಲಸದ ವೇಳಾಪಟ್ಟಿ' },
      { en: 'Garden hygiene and observation', kn: 'ತೋಟದ ಸ್ವಚ್ಛತೆ ಮತ್ತು ನಿಯಮಿತ ವೀಕ್ಷಣೆ' },
    ],
    related: ['nutrition', 'disease', 'consultation'],
  },
  {
    id: 'rootGrub',
    slug: 'root-grub-management',
    image: 'rootGrub',
    onHome: true,
    availabilityToConfirm: false,
    title: { en: 'Root Grub Management', kn: 'ಬೇರು ಹುಳು ನಿರ್ವಹಣೆ' },
    short: {
      en: 'Identify and manage root grub effectively.',
      kn: 'ಬೇರು ಹುಳುವನ್ನು ಗುರುತಿಸಿ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿಯಂತ್ರಿಸಿ.',
    },
    detail: {
      en: 'Root grubs feed underground, so the damage is often noticed only when palms start to yellow or weaken. We help you confirm whether grubs are the cause and plan management suited to the season and the stage of infestation.',
      kn: 'ಬೇರು ಹುಳುಗಳು ಮಣ್ಣಿನೊಳಗೆ ಬೇರುಗಳನ್ನು ತಿನ್ನುವುದರಿಂದ, ಮರಗಳು ಹಳದಿಯಾಗುವ ಅಥವಾ ದುರ್ಬಲವಾಗುವವರೆಗೆ ಹಾನಿ ಗಮನಕ್ಕೆ ಬರುವುದಿಲ್ಲ. ಸಮಸ್ಯೆಗೆ ಹುಳುಗಳೇ ಕಾರಣವೇ ಎಂದು ಖಚಿತಪಡಿಸಲು ಮತ್ತು ಹಂಗಾಮು ಹಾಗೂ ಬಾಧೆಯ ಹಂತಕ್ಕೆ ತಕ್ಕ ನಿರ್ವಹಣೆ ಯೋಜಿಸಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    body: {
      en: 'Effective control usually combines several steps rather than a single application. Timing matters, and so does checking the soil before acting. We avoid recommending treatments until the problem has been properly identified.',
      kn: 'ಪರಿಣಾಮಕಾರಿ ನಿಯಂತ್ರಣಕ್ಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೇ ಸಿಂಪಡಣೆಯಲ್ಲ, ಹಲವು ಕ್ರಮಗಳ ಸಂಯೋಜನೆ ಬೇಕು. ಸಮಯ ಮುಖ್ಯ, ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮುನ್ನ ಮಣ್ಣನ್ನು ಪರಿಶೀಲಿಸುವುದೂ ಮುಖ್ಯ. ಸಮಸ್ಯೆಯನ್ನು ಸರಿಯಾಗಿ ಗುರುತಿಸುವವರೆಗೆ ನಾವು ಯಾವುದೇ ಚಿಕಿತ್ಸೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡುವುದಿಲ್ಲ.',
    },
    focus: [
      { en: 'Recognising early above-ground signs', kn: 'ಮೇಲ್ನೋಟಕ್ಕೆ ಕಾಣುವ ಆರಂಭಿಕ ಲಕ್ಷಣಗಳ ಗುರುತಿಸುವಿಕೆ' },
      { en: 'Checking the soil around the roots', kn: 'ಬೇರುಗಳ ಸುತ್ತಲಿನ ಮಣ್ಣಿನ ಪರಿಶೀಲನೆ' },
      { en: 'Choosing the right time to act', kn: 'ಕ್ರಮ ಕೈಗೊಳ್ಳಲು ಸರಿಯಾದ ಸಮಯದ ಆಯ್ಕೆ' },
      { en: 'Follow-up to see whether palms recover', kn: 'ಮರಗಳು ಚೇತರಿಸುತ್ತಿವೆಯೇ ಎಂಬ ಮುಂದುವರಿದ ಪರಿಶೀಲನೆ' },
    ],
    related: ['pest', 'soilTesting', 'consultation'],
  },
  {
    id: 'pest',
    slug: 'pest-management',
    image: 'pestInspection',
    onHome: true,
    availabilityToConfirm: false,
    title: { en: 'Pest Management', kn: 'ಕೀಟ ನಿರ್ವಹಣೆ' },
    short: {
      en: 'Spot pest damage early and act with guidance.',
      kn: 'ಕೀಟ ಹಾನಿಯನ್ನು ಬೇಗನೆ ಗುರುತಿಸಿ, ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ.',
    },
    detail: {
      en: 'Many pests can affect nuts, leaves and the crown of the palm. Correct identification comes first — it decides whether action is needed at all, and which approach will work without wasting money.',
      kn: 'ಹಲವು ಕೀಟಗಳು ಅಡಿಕೆ ಕಾಯಿ, ಎಲೆ ಮತ್ತು ಮರದ ಸುಳಿಯನ್ನು ಬಾಧಿಸಬಹುದು. ಮೊದಲು ಸರಿಯಾದ ಗುರುತಿಸುವಿಕೆ — ಕ್ರಮ ಅಗತ್ಯವಿದೆಯೇ, ಯಾವ ವಿಧಾನ ಹಣ ವ್ಯರ್ಥ ಮಾಡದೆ ಫಲ ನೀಡುತ್ತದೆ ಎಂಬುದನ್ನು ಅದೇ ನಿರ್ಧರಿಸುತ್ತದೆ.',
    },
    body: {
      en: 'Share clear photos of the damage and tell us how many palms are affected. Unnecessary sprays cost money and can harm the beneficial insects that keep pests in check, so we focus on targeted, well-timed action.',
      kn: 'ಹಾನಿಯ ಸ್ಪಷ್ಟ ಫೋಟೋಗಳನ್ನು ಕಳುಹಿಸಿ, ಎಷ್ಟು ಮರಗಳು ಬಾಧಿತವಾಗಿವೆ ಎಂದು ತಿಳಿಸಿ. ಅನಗತ್ಯ ಸಿಂಪಡಣೆ ಖರ್ಚು ಹೆಚ್ಚಿಸುವುದಲ್ಲದೆ, ಕೀಟಗಳನ್ನು ಹತೋಟಿಯಲ್ಲಿಡುವ ಉಪಕಾರಿ ಕೀಟಗಳಿಗೂ ಹಾನಿ ಮಾಡಬಹುದು. ಆದ್ದರಿಂದ ನಾವು ನಿಖರ ಮತ್ತು ಸಕಾಲಿಕ ಕ್ರಮಕ್ಕೆ ಒತ್ತು ನೀಡುತ್ತೇವೆ.',
    },
    focus: [
      { en: 'Identifying the pest from symptoms and photos', kn: 'ಲಕ್ಷಣ ಮತ್ತು ಫೋಟೋಗಳಿಂದ ಕೀಟದ ಗುರುತಿಸುವಿಕೆ' },
      { en: 'Judging how serious the damage is', kn: 'ಹಾನಿ ಎಷ್ಟು ಗಂಭೀರ ಎಂಬ ಅಂದಾಜು' },
      { en: 'Targeted, well-timed action', kn: 'ನಿಖರ ಮತ್ತು ಸಕಾಲಿಕ ಕ್ರಮ' },
      { en: 'Preventive garden practices', kn: 'ಮುಂಜಾಗ್ರತಾ ತೋಟದ ಪದ್ಧತಿಗಳು' },
    ],
    related: ['disease', 'rootGrub', 'organic'],
  },
  {
    id: 'disease',
    slug: 'disease-management',
    image: 'leafDisease',
    onHome: true,
    availabilityToConfirm: false,
    title: { en: 'Disease Management', kn: 'ರೋಗ ನಿರ್ವಹಣೆ' },
    short: {
      en: 'Early identification and timely control.',
      kn: 'ರೋಗದ ಆರಂಭಿಕ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ಸಕಾಲಿಕ ನಿಯಂತ್ರಣ.',
    },
    detail: {
      en: 'Wet, humid months bring a higher risk of disease on nuts, leaves and the crown. Different diseases can look alike, so we help you confirm what you are dealing with before spending on treatment.',
      kn: 'ತೇವ ಮತ್ತು ಆರ್ದ್ರ ತಿಂಗಳುಗಳಲ್ಲಿ ಕಾಯಿ, ಎಲೆ ಮತ್ತು ಸುಳಿಗೆ ರೋಗದ ಅಪಾಯ ಹೆಚ್ಚು. ಬೇರೆ ಬೇರೆ ರೋಗಗಳು ಒಂದೇ ರೀತಿ ಕಾಣಬಹುದು. ಆದ್ದರಿಂದ ಚಿಕಿತ್ಸೆಗೆ ಖರ್ಚು ಮಾಡುವ ಮುನ್ನ ರೋಗವನ್ನು ಖಚಿತಪಡಿಸಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    body: {
      en: 'Preparation before the rains — clear drainage, garden sanitation and removing infected material — often matters as much as treatment. We help you plan both, following locally recommended practice.',
      kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನದ ಸಿದ್ಧತೆ — ಬಸಿಗಾಲುವೆ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು, ತೋಟದ ನೈರ್ಮಲ್ಯ ಮತ್ತು ರೋಗಬಾಧಿತ ಭಾಗಗಳನ್ನು ತೆಗೆಯುವುದು — ಚಿಕಿತ್ಸೆಯಷ್ಟೇ ಮುಖ್ಯ. ಸ್ಥಳೀಯವಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾದ ಪದ್ಧತಿಯಂತೆ ಎರಡನ್ನೂ ಯೋಜಿಸಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    focus: [
      { en: 'Recognising symptoms on nuts, leaves and crown', kn: 'ಕಾಯಿ, ಎಲೆ ಮತ್ತು ಸುಳಿಯ ಮೇಲಿನ ಲಕ್ಷಣಗಳ ಗುರುತಿಸುವಿಕೆ' },
      { en: 'Pre-monsoon preparation', kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನದ ಸಿದ್ಧತೆ' },
      { en: 'Garden sanitation', kn: 'ತೋಟದ ನೈರ್ಮಲ್ಯ' },
      { en: 'Timely, confirmed treatment', kn: 'ಖಚಿತಪಡಿಸಿದ ನಂತರ ಸಕಾಲಿಕ ಚಿಕಿತ್ಸೆ' },
    ],
    related: ['pest', 'cropManagement', 'consultation'],
  },
  {
    id: 'nutrition',
    slug: 'plant-nutrition',
    image: 'plantNutrition',
    onHome: true,
    availabilityToConfirm: false,
    title: { en: 'Plant Nutrition', kn: 'ಪೋಷಕಾಂಶ ನಿರ್ವಹಣೆ' },
    short: {
      en: 'Right nutrients for better growth and yield.',
      kn: 'ಉತ್ತಮ ಬೆಳವಣಿಗೆ ಮತ್ತು ಇಳುವರಿಗೆ ಸರಿಯಾದ ಪೋಷಕಾಂಶ.',
    },
    detail: {
      en: 'Palms need a balanced supply of nutrients, at the right time and in the right form. We help you build a nutrition plan around your soil test, the age of your palms and how they are performing.',
      kn: 'ಮರಗಳಿಗೆ ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ, ಸರಿಯಾದ ರೂಪದಲ್ಲಿ ಸಮತೋಲಿತ ಪೋಷಕಾಂಶಗಳು ಬೇಕು. ನಿಮ್ಮ ಮಣ್ಣು ಪರೀಕ್ಷೆ, ಮರಗಳ ವಯಸ್ಸು ಮತ್ತು ಅವುಗಳ ಸ್ಥಿತಿಯನ್ನು ಆಧರಿಸಿ ಪೋಷಕಾಂಶ ಯೋಜನೆ ರೂಪಿಸಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    body: {
      en: 'More fertiliser is not always better. An excess of one nutrient cannot make up for a shortage of another, and poorly timed applications can be washed away by heavy rain. A balanced plan protects both your palms and your budget.',
      kn: 'ಹೆಚ್ಚು ಗೊಬ್ಬರ ಯಾವಾಗಲೂ ಒಳ್ಳೆಯದಲ್ಲ. ಒಂದು ಪೋಷಕಾಂಶದ ಹೆಚ್ಚಳ ಇನ್ನೊಂದರ ಕೊರತೆಯನ್ನು ತುಂಬುವುದಿಲ್ಲ. ಅಸಮಯದಲ್ಲಿ ಹಾಕಿದ ಗೊಬ್ಬರ ಭಾರಿ ಮಳೆಗೆ ಕೊಚ್ಚಿಹೋಗಬಹುದು. ಸಮತೋಲಿತ ಯೋಜನೆ ನಿಮ್ಮ ಮರಗಳನ್ನೂ, ನಿಮ್ಮ ಖರ್ಚನ್ನೂ ರಕ್ಷಿಸುತ್ತದೆ.',
    },
    focus: [
      { en: 'Reading nutrient needs from a soil test', kn: 'ಮಣ್ಣು ಪರೀಕ್ಷೆಯಿಂದ ಪೋಷಕಾಂಶದ ಅಗತ್ಯ ತಿಳಿಯುವುದು' },
      { en: 'Balancing organic and mineral sources', kn: 'ಸಾವಯವ ಮತ್ತು ರಾಸಾಯನಿಕ ಮೂಲಗಳ ಸಮತೋಲನ' },
      { en: 'Timing applications with soil moisture', kn: 'ಮಣ್ಣಿನ ತೇವಾಂಶಕ್ಕೆ ತಕ್ಕಂತೆ ಗೊಬ್ಬರ ಹಾಕುವ ಸಮಯ' },
      { en: 'Recognising visible deficiency signs', kn: 'ಕಣ್ಣಿಗೆ ಕಾಣುವ ಕೊರತೆಯ ಲಕ್ಷಣಗಳ ಗುರುತಿಸುವಿಕೆ' },
    ],
    related: ['soilTesting', 'organic', 'cropManagement'],
  },
  {
    id: 'organic',
    slug: 'organic-and-biological-solutions',
    image: 'organicCompost',
    onHome: false,
    availabilityToConfirm: true,
    title: { en: 'Organic and Biological Solutions', kn: 'ಸಾವಯವ ಮತ್ತು ಜೈವಿಕ ಪರಿಹಾರಗಳು' },
    short: {
      en: 'Build soil life with organic matter and biological inputs.',
      kn: 'ಸಾವಯವ ವಸ್ತು ಮತ್ತು ಜೈವಿಕ ಒಳಸುರಿಗಳಿಂದ ಮಣ್ಣಿನ ಜೀವಶಕ್ತಿ ಹೆಚ್ಚಿಸಿ.',
    },
    detail: {
      en: 'Compost, mulch and biological inputs improve soil structure, help it hold moisture and support the soil life that palms depend on. We help you choose and use them well alongside your existing practices.',
      kn: 'ಕಾಂಪೋಸ್ಟ್, ಹೊದಿಕೆ (ಮಲ್ಚ್) ಮತ್ತು ಜೈವಿಕ ಒಳಸುರಿಗಳು ಮಣ್ಣಿನ ರಚನೆಯನ್ನು ಸುಧಾರಿಸಿ, ತೇವಾಂಶ ಹಿಡಿದಿಡಲು ಮತ್ತು ಮರಗಳು ಅವಲಂಬಿಸಿರುವ ಮಣ್ಣಿನ ಜೀವಿಗಳಿಗೆ ನೆರವಾಗುತ್ತವೆ. ನಿಮ್ಮ ಈಗಿನ ಪದ್ಧತಿಗಳ ಜೊತೆಗೆ ಅವುಗಳನ್ನು ಸರಿಯಾಗಿ ಆಯ್ಕೆ ಮಾಡಿ ಬಳಸಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    body: {
      en: 'Quality varies a great deal between sources, and how an input is applied matters as much as what it is. We help you understand where organic and biological options fit in your garden, and where other approaches may still be needed.',
      kn: 'ಮೂಲದಿಂದ ಮೂಲಕ್ಕೆ ಗುಣಮಟ್ಟ ಬಹಳ ಬದಲಾಗುತ್ತದೆ. ಒಳಸುರಿ ಯಾವುದು ಎಂಬಷ್ಟೇ, ಅದನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ ಎಂಬುದೂ ಮುಖ್ಯ. ನಿಮ್ಮ ತೋಟದಲ್ಲಿ ಸಾವಯವ ಮತ್ತು ಜೈವಿಕ ಆಯ್ಕೆಗಳು ಎಲ್ಲಿ ಸೂಕ್ತ, ಬೇರೆ ವಿಧಾನಗಳು ಎಲ್ಲಿ ಇನ್ನೂ ಅಗತ್ಯ ಎಂಬುದನ್ನು ತಿಳಿಯಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
    },
    focus: [
      { en: 'Composting and mulching practices', kn: 'ಕಾಂಪೋಸ್ಟ್ ತಯಾರಿಕೆ ಮತ್ತು ಹೊದಿಕೆ ಪದ್ಧತಿ' },
      { en: 'Choosing biological inputs', kn: 'ಜೈವಿಕ ಒಳಸುರಿಗಳ ಆಯ್ಕೆ' },
      { en: 'Combining with your current nutrition plan', kn: 'ಈಗಿನ ಪೋಷಕಾಂಶ ಯೋಜನೆಯೊಂದಿಗೆ ಸಂಯೋಜನೆ' },
      { en: 'Improving soil structure over time', kn: 'ಕಾಲಕ್ರಮೇಣ ಮಣ್ಣಿನ ರಚನೆಯ ಸುಧಾರಣೆ' },
    ],
    related: ['nutrition', 'soilTesting', 'cropManagement'],
  },
  {
    id: 'consultation',
    slug: 'agricultural-consultation',
    image: 'farmerMeeting',
    onHome: false,
    availabilityToConfirm: true,
    title: { en: 'Agricultural Consultation', kn: 'ಕೃಷಿ ಸಮಾಲೋಚನೆ' },
    short: {
      en: 'One-to-one advice for your garden’s specific problems.',
      kn: 'ನಿಮ್ಮ ತೋಟದ ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಸಲಹೆ.',
    },
    detail: {
      en: 'When a problem does not fit a simple answer, a conversation helps. Share photos and details of your garden and we will work through the issue with you, step by step, in Kannada or English.',
      kn: 'ಸಮಸ್ಯೆಗೆ ಸರಳ ಉತ್ತರ ಸಿಗದಿದ್ದಾಗ ನೇರ ಮಾತುಕತೆ ನೆರವಾಗುತ್ತದೆ. ನಿಮ್ಮ ತೋಟದ ಫೋಟೋ ಮತ್ತು ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ — ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ, ಹಂತ ಹಂತವಾಗಿ ನಿಮ್ಮೊಂದಿಗೆ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸುತ್ತೇವೆ.',
    },
    body: {
      en: 'Consultation can start on WhatsApp or by phone. Where it is available in your area, a field visit can be arranged for problems that need to be seen in person.',
      kn: 'ಸಮಾಲೋಚನೆಯನ್ನು ವಾಟ್ಸ್‌ಆಪ್ ಅಥವಾ ದೂರವಾಣಿ ಮೂಲಕ ಆರಂಭಿಸಬಹುದು. ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಲಭ್ಯವಿದ್ದರೆ, ಸ್ಥಳದಲ್ಲೇ ನೋಡಬೇಕಾದ ಸಮಸ್ಯೆಗಳಿಗೆ ತೋಟ ಭೇಟಿಯನ್ನೂ ಏರ್ಪಡಿಸಬಹುದು.',
    },
    focus: [
      { en: 'Problem diagnosis from photos and details', kn: 'ಫೋಟೋ ಮತ್ತು ವಿವರಗಳಿಂದ ಸಮಸ್ಯೆಯ ಪತ್ತೆ' },
      { en: 'A practical action plan', kn: 'ಪ್ರಾಯೋಗಿಕ ಕ್ರಿಯಾ ಯೋಜನೆ' },
      { en: 'Field visits where available', kn: 'ಲಭ್ಯವಿರುವಲ್ಲಿ ತೋಟ ಭೇಟಿ' },
      { en: 'Follow-up on progress', kn: 'ಪ್ರಗತಿಯ ಮುಂದುವರಿದ ಪರಿಶೀಲನೆ' },
    ],
    related: ['cropManagement', 'soilTesting', 'disease'],
  },
]

export function getSolution(slug: string) {
  return solutionCatalog.find((s) => s.slug === slug)
}

export function getSolutionById(id: string) {
  return solutionCatalog.find((s) => s.id === id)
}
