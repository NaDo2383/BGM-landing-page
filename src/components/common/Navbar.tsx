"use client"

import { useTranslations } from "next-intl"
import Logo from "./Logo"
import LanguageSelector from "./LanguageSelector"
import Button from "../ui/Button"

export default function Navbar() {
  const t = useTranslations("nav")

  return (
    <nav className='fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Logo />
          <div className='hidden md:flex items-center space-x-8'>
            <a href='#' className='text-gray-300 hover:text-white transition'>
              {t("about")}
            </a>
            <a href='#' className='text-gray-300 hover:text-white transition'>
              {t("management")}
            </a>
            <a href='#' className='text-gray-300 hover:text-white transition'>
              {t("careers")}
            </a>
            <a href='#' className='text-gray-300 hover:text-white transition'>
              {t("news")}
            </a>
            <a href='#' className='text-gray-300 hover:text-white transition'>
              {t("contact")}
            </a>
            <a href='#' className='text-gray-300 hover:text-white transition'>
              {t("faq")}
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <LanguageSelector />
            <Button variant='primary'>{t("subscribe")}</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
