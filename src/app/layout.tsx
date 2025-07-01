// app/layout.tsx
import "./globals.css"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${inter.className} ${roboto.className} ${xWide.variable}`}>
      <body>{children}</body>
    </html>
  )
}
