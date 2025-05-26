"use client"
import { NextIntlClientProvider } from "next-intl"
import { ReactNode } from "react"

interface LocaleClientProviderProps {
  children: ReactNode
  messages: any
  locale: string
}

export function LocaleClientProvider({
  children,
  messages,
  locale,
}: LocaleClientProviderProps) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      now={new Date()}
      timeZone='UTC'>
      {children}
    </NextIntlClientProvider>
  )
}
