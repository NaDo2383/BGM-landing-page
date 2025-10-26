import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://balancedgrowth.mn"),
  title: {
    default: "Balanced Growth Management",
    template: "%s · BGM",
  },
  description: "Balanced growth funds, insights, and tools.",
  applicationName: "BGM",
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      mn: "/mn",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "BGM",
    title: "Balanced Growth Management",
    description: "Balanced growth funds, insights, and tools.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bgm",
    creator: "@bgm",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png" }, // optional, for older browsers
    ],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
