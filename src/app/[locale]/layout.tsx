import { NextIntlClientProvider, useMessages } from "next-intl"
import { ReactNode } from "react"
import "../globals.css"

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = (await import(`@/locales/${params.locale}.json`)).default
  return {
    title: messages.metaTitle || "BGM",
    description: messages.metaDescription || "Welcome to BGM",
  }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
