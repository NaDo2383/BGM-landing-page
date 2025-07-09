"use client"

import { useLocale } from "next-intl"
import { US } from "country-flag-icons/react/3x2"
import { MN } from "country-flag-icons/react/3x2"

export default function LanguageSelector() {
  const locale = useLocale()

  const handleToggle = () => {
    const newLocale = locale === "en" ? "mn" : "en"

    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`

    // Reload to re-render with new locale
    window.location.reload()
  }

  const CurrentFlag = locale === "en" ? US : MN
  const currentText = locale === "en" ? "EN" : "MN"

  return (
    <button
      onClick={handleToggle}
      className='text-white border border-[#22369e] bg-blend-overlay! rounded-[21px] px-3 py-2 flex items-center gap-2 hover:bg-blue-500 hover:text-shadow-white transition-colors'>
      <CurrentFlag className='w-3 h-2' />
      <span className='text-sm font-medium'>{currentText}</span>
    </button>
  )
}
