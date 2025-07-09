import "./globals.css"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"
import { NextIntlClientProvider } from "next-intl"
import { getCurrentLocale, getMessages } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"] })
const xWide = localFont({
  src: "../fonts/fontspring_xwidemedium.otf",
  variable: "--font-xwide",
})

export const metadata = {
  title: "BGM",
  description: "Balanced Growth Management",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getCurrentLocale()
  const messages = await getMessages(locale)

  return (
    <html
      lang={locale}
      className={`${inter.className} ${roboto.className} ${xWide.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
