"use client"

import { useTranslations } from "next-intl"
import Card from "../ui/Card"
import { ArrowBtn } from "../ui/ArrowBtn"

export default function CapabilitiesSection() {
  const t = useTranslations("capabilities")

  const capabilities = [
    { title: t("card1.title"), description: t("card1.description"), icon: "📊" },
    { title: t("card2.title"), description: t("card2.description"), icon: "🎯" },
    { title: t("card3.title"), description: t("card3.description"), icon: "💡" },
  ]

  return (
    <section className='bg-[#020618] p-6 sm:p-10 sm:pt-0 lg:p-[100px] lg:pt-[0px]'>
      <div className='mx-auto max-w-[1240px] px-2 sm:px-4 flex flex-col gap-8 sm:gap-10 lg:gap-[50px]'>
        {/* Heading */}
        <div className='flex flex-col gap-2 font-[norms-pro]'>
          <div className='flex flex-wrap items-center justify-center gap-2 text-center  font-bold'>
            <h2 className=' text-white text-2xl sm:text-3xl lg:text-[40px] leading-tight'>
              {t("title1")}
            </h2>
            <h2 className=' text-[#F1573F] text-2xl sm:text-3xl lg:text-[40px] leading-tight'>
              {t("title2")}
            </h2>
          </div>
          <p className='text-center text-[#90A1B9] font-normal tracking-normal capitalize text-sm sm:text-base leading-relaxed max-w-4xl mx-auto'>
            {t("text")}
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[50px]'>
          {capabilities.map((cap, i) => (
            <div key={i} className='h-full'>
              <Card {...cap} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='flex justify-center'>
          <div className='w-full sm:w-auto'>
            <ArrowBtn
              arrowBg='black'
              onClick={() => alert("Go!")}
              className='w-full sm:w-auto'>
              {t("seeMore")}
            </ArrowBtn>
          </div>
        </div>
      </div>
    </section>
  )
}
