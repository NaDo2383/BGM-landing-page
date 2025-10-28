import { useTranslations } from "next-intl"
import React from "react"
import ClientLogos from "../sections/ClientLogos"

export default function CareerDevelopment() {
  const t = useTranslations("careers")

  return (
    <section
      id='career-developments'
      className='max-w-7xl mx-auto flex flex-col items-center justify-center my-20 gap-4 '>
      <div className=' font-[norms-pro] text-center'>
        <div className=' font-medium text-5xl bg-[linear-gradient(92.65deg,#FFFFFF,#AAAAAA)] bg-clip-text text-transparent '>
          {t("career-developments")}
        </div>
        <div className='font-[450] text-lg text-[#afafaf] whitespace-pre-wrap mt-3.5'>
          {t("career-developments-text")}
        </div>
      </div>
      <div className=' font-[norms-pro] font-medium text-lg px-[25px] py-[15px] mt-8 bg-[linear-gradient(180deg,#4E4E4E_0%,#111111_100%)] rounded-full'>
        {t("pro-network")}
      </div>
      <ClientLogos className='py-3 sm:py-4 lg:py-5' />
    </section>
  )
}
