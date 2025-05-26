"use client"

import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"

export default function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    const path = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(path)
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className='bg-transparent text-white border border-gray-600 rounded px-2 py-1 text-sm'>
      <option value='en' className='bg-gray-800'>
        EN
      </option>
      <option value='mn' className='bg-gray-800'>
        MN
      </option>
    </select>
  )
}
