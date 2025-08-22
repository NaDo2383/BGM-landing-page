"use client"

import { US } from "country-flag-icons/react/3x2"
import { MN } from "country-flag-icons/react/3x2"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LanguageSelector() {
  const [locale, setLocale] = useState<string>("")
  const router = useRouter()

  const handleToggle = () => {
    if (locale === "en") {
      setLocale("mn")
      document.cookie = `BGM_LOCALE=mn;`
    } else {
      setLocale("en")
      document.cookie = `BGM_LOCALE=en;`
    }
    router.refresh()
  }

  const CurrentFlag = locale === "en" ? US : MN
  const currentText = locale === "en" ? "EN" : "MN"

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("BGM_LOCALE="))
      ?.split("=")[1]

    if (cookieLocale) {
      setLocale(cookieLocale)
    } else {
      setLocale("en")
      document.cookie = `BGM_LOCALE=en;`
      router.refresh()
    }
  }, [router])

  return (
    <button
      onClick={handleToggle}
      className='text-white border border-[#22369e] bg-blend-overlay! rounded-[21px] px-3 py-2 flex items-center gap-2 hover:bg-blue-500 hover:text-shadow-white transition-colors'>
      <CurrentFlag className='w-3 h-2' />
      <span className='text-sm font-medium'>{currentText}</span>
    </button>
  )
}
