import { redirect } from "next/navigation"
import { locales } from "@/lib/i18n"

const defaultLocale = locales[0]

export default function Page() {
  // Redirect root “/” to the default locale (e.g. “/en”)
  redirect(`/${defaultLocale}`)
}
