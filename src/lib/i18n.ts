// src/lib/i18n.ts
import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'mn'] as const
export type Locale = (typeof locales)[number]

// Choose your default here:
const defaultLocale = locales[0]

export default getRequestConfig(async ({ requestLocale }) => {
  // 1) await the potentially-undefined value
  const requested = await requestLocale

  // 2) if it’s a known locale, use it — otherwise fall back
  const locale = locales.includes(requested as any)
    ? (requested as Locale)
    : defaultLocale

  // 3) load your JSON
  const messages = (await import(`../locales/${locale}.json`)).default

  return { locale, messages }
})
