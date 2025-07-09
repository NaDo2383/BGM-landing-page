// app/layout.tsx
import "./globals.css"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"
import { getMessages, getCurrentLocale } from "@/lib/i18n"
import { NextIntlClientProvider } from "next-intl"
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"

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
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
