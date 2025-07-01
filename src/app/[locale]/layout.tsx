// app/[locale]/layout.tsx
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import getRequestConfig, { locales } from "@/lib/i18n"
import { LocaleClientProvider } from "./components/LocaleClientProvider"

const inter = Inter({ subsets: ["latin"] })

// Tell Next.js which locale routes to pre-render
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  // 1️⃣ Validate the locale
  if (!locales.includes(locale as any)) {
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
