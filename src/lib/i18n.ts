// src/lib/i18n.ts
import { cookies } from "next/headers"

export const locales = ["en", "mn"] as const
export type Locale = (typeof locales)[number]

const defaultLocale: Locale = "en"

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value
  return locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : defaultLocale
}

// Load translation messages for given locale
export async function getMessages(locale: Locale) {
  try {
    const messages = (await import(`../locales/${locale}.json`)).default
    return messages
  } catch (err) {
    console.error(`Missing translation file for locale: ${locale}, falling back to ${defaultLocale}`)
    return (await import(`../locales/${defaultLocale}.json`)).default
  }
}
