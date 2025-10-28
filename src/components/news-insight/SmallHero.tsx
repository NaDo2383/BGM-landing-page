"use client"
import React from "react"
import { useTranslations } from "next-intl"
import { useScrollToId } from "@/utils/utils"

const SmallHero = () => {
  const t = useTranslations("newsInsight")
  const scrollToId = useScrollToId()

  return (
    <section className='relative min-h-[400px] flex items-center justify-center flex-col overflow-hidden '>
      <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] bg-[url("/about-us-hero.png")]  bg-contain bg-center'>
        <div className=' flex flex-col items-center justify-center mt-24'>
          <h2 className='text-[40px] md:text-[62px] font-[BGMxwidemedium] bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase font-bold'>
            {t("title1")}
          </h2>
          <span className='font-[norms-pro] text-lg text-[#AFAFAF] whitespace-pre-wrap text-center'>
            {t("title2")}
          </span>
        </div>
        <div className='z-20 mt-14 w-full justify-center flex gap-5'>
          <span
            onClick={() => scrollToId("news")}
            className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
            {t("news")}
          </span>
          <span
            onClick={() => scrollToId("news-letter")}
            className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
            {t("news-letter")}
          </span>
          <span
            onClick={() => scrollToId("outlook")}
            className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
            {t("outlook")}
          </span>
        </div>
      </div>
    </section>
  )
}

export default SmallHero
