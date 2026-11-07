/** A piece of long-form content written in both site languages. */
export type L = { en: string; kn: string }

export function pick(text: L, locale: string): string {
  return locale === 'kn' ? text.kn : text.en
}
