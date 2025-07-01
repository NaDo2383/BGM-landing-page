"use client"

import { useTranslations } from "next-intl"
import Card from "../ui/Card"
import { ArrowBtn } from "../ui/ArrowBtn"

export default function CapabilitiesSection() {
  const t = useTranslations("capabilities")

  const capabilities = [
    {
      title: t("card1.title"),
      description: t("card1.description"),
      icon: "📊",
    },
    {
      title: t("card2.title"),
      description: t("card2.description"),
      icon: "🎯",
    },
    {
      title: t("card3.title"),
      description: t("card3.description"),
      icon: "💡",
    },
  ]

  return (
    <section className='p-[100px] bg-[#020618]'>
      <div className='max-w-[1240px] flex flex-col gap-[50px]  mx-auto px-4'>
        <div className='flex flex-col gap-[8px]'>
          <div className='flex justify-center gap-2'>
            <h2 className='text-[40px] font-[Roboto] text-white text-center '>
              {t("title1")}
            </h2>
            <h2 className='text-[40px] font-[Roboto] text-[#F1573F] text-center'>
              {t("title2")}
            </h2>
          </div>
          <div className='font-sans text-[#90A1B9] font-normal text-base leading-none tracking-normal text-center capitalize'>
            {t("text")}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[50px]'>
          {capabilities.map((cap, index) => (
            <Card key={index} {...cap} />
          ))}
        </div>
        <div className=' self-center'>
          <ArrowBtn arrowBg='black' onClick={() => alert("Go!")}>
            {t("seeMore")}
          </ArrowBtn>
        </div>
      </div>
    </section>
  )
}
