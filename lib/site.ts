/**
 * Single source of truth for business contact details.
 * Leave a value empty until the verified detail is supplied — the UI shows a clearly
 * marked "to be added" state and WhatsApp/phone buttons fall back to the contact page.
 */
export const siteConfig = {
  name: 'Adike Besaya',
  nameKn: 'ಅಡಿಕೆ ಬೇಸಾಯ',
  whatsappNumber: '', // digits only, with country code, e.g. 9198XXXXXXXX
  phone: '', // display format, e.g. +91 98XXX XXXXX
  email: '',
  address: '', // full postal address of the office or store
  /** Business hours, e.g. { en: 'Mon–Sat, 9:00 AM – 6:00 PM', kn: 'ಸೋಮ–ಶನಿ, ಬೆಳಿಗ್ಗೆ 9 – ಸಂಜೆ 6' } */
  hours: { en: '', kn: '' },
  location: 'Karnataka, India',
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
}

export function whatsappHref(message?: string): string | null {
  if (!siteConfig.whatsappNumber) return null
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${siteConfig.whatsappNumber}${text}`
}

export function phoneHref(): string | null {
  if (!siteConfig.phone) return null
  return `tel:${siteConfig.phone.replace(/\s+/g, '')}`
}

export function mailHref(): string | null {
  if (!siteConfig.email) return null
  return `mailto:${siteConfig.email}`
}
