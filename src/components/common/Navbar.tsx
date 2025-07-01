"use client"

import { useTranslations } from "next-intl"
import LanguageSelector from "./LanguageSelector"
import Button from "../ui/Button"
import Image from "next/image"

export default function Navbar() {
  const t = useTranslations("nav")

  return (
    <nav className='fixed top-0 w-full  backdrop-blur-sm z-50'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] lg:py-[10px]'>
        <div className='flex items-center justify-between '>
          <Image src={"/bgm_logo.png"} alt='Logo' width={188} height={40} />
          <div className='hidden md:flex items-center gap-[30px]'>
            <a
              href='#'
              className='text-[#FFFFFF] text-[14px] hover:text-white transition whitespace-pre text-center'>
              {t("about")}
            </a>
            <a
              href='#'
              className='text-[#FFFFFF] text-[14px] hover:text-white transition whitespace-pre text-center'>
              {t("management")}
            </a>
            <a
              href='#'
              className='text-[#FFFFFF] text-[14px] hover:text-white transition whitespace-pre text-center'>
              {t("careers")}
            </a>
            <a
              href='#'
              className='text-[#FFFFFF] text-[14px] hover:text-white transition whitespace-pre text-center'>
              {t("news")}
            </a>
            <a
              href='#'
              className='text-[#FFFFFF] text-[14px] hover:text-white transition whitespace-pre text-center'>
              {t("contact")}
            </a>
            <a
              href='#'
              className='text-[#FFFFFF] text-[14px] hover:text-white transition whitespace-pre text-center'>
              {t("faq")}
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <LanguageSelector />
            <Button variant='transparent'>{t("subscribe")}</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
