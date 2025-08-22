"use client"
import React from "react"
import { useTranslations } from "next-intl"

const SmallHero = () => {
  const t = useTranslations("newsInsight")

  return (
    <div className='relative min-h-[248px] flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-[url("/smallHero.png")] bg-cover bg-center ' />

      <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px]'>
        <div className=' flex '>
          <h2 className='text-[40px] font-xwide text-white text-center mr-1.5 uppercase'>
            {t("title1")}
          </h2>
          <h2 className='text-[40px] font-xwide text-[#F1573F] text-center uppercase'>
            {t("title2")}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SmallHero
