import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import getRequestConfig, { locales, Locale } from "@/lib/i18n"
import { LocaleClientProvider } from "./components/LocaleClientProvider"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: any
}) {
  const locale = params.locale as Locale

  if (!locales.includes(locale)) {
    notFound()
  }

  const { messages } = await getRequestConfig({
    requestLocale: Promise.resolve(locale),
  })

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <LocaleClientProvider locale={locale} messages={messages}>
          {children}
        </LocaleClientProvider>
      </body>
    </html>
  )
}
