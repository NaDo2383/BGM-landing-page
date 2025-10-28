"use client"
import { useScrollToId } from "@/utils/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

export default function AssetManagementPage() {
  const t = useTranslations("asset-management")
  const scrollTo = useScrollToId()

  const data = [
    {
      id: "fixed-income",
      title: t("fixed-income"),
      text: t("fixed-income-text"),
      img: "/what-we-do/income-fund.png",
    },
    {
      id: "real-state",
      title: t("real-state"),
      text: t("real-state-text"),
      img: "/what-we-do/real-state-fund.png",
    },
    {
      id: "saving",
      title: t("saving"),
      text: t("saving-text"),
      img: "/what-we-do/saving-fund.png",
    },
  ]

  return (
    <>
      <section className='relative min-h-[400px] flex items-center justify-center flex-col overflow-hidden '>
        <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px]  bg-[url("/about-us-hero.png")] bg-no-repeat  bg-contain bg-center'>
          <div className=' flex flex-col items-center justify-center mt-24'>
            <h2 className='text-[40px] md:text-[62px] font-[BGMxwidemedium] bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase'>
              {t("title1")}
            </h2>
            <span className='font-[norms-pro] text-lg text-[#AFAFAF]'>
              {t("simplify-invest")}
            </span>
          </div>
          <div className='z-20 mt-14 w-full justify-center flex gap-5'>
            <span
              onClick={() => scrollTo("fixed-income")}
              className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
              {t("fixed-income")}
            </span>
            <span
              onClick={() => scrollTo("real-state")}
              className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
              {t("real-state")}
            </span>
            <span
              onClick={() => scrollTo("saving")}
              className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
              {t("saving")}
            </span>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-24 my-24'>
        {data.map((e, i) => (
          <div
            id={e.id}
            key={i}
            className={[
              "max-w-[1101px] w-full flex justify-between",
              i % 2 == 1 ? "flex-row-reverse" : "",
            ].join(" ")}>
            <div>
              <Image
                src={e.img}
                alt={e.title + " image"}
                width={501}
                height={376}
                className='transition-transform duration-500 ease-out hover:scale-[1.03]'
              />
            </div>
            <div className='max-w-[500px] flex flex-col gap-3.5 justify-center'>
              <div
                className='inline-block text-4xl font-[benzin-medium]
                bg-[linear-gradient(270deg,_#E89548_0%,_#E46F03_100%)]
                bg-clip-text text-transparent pb-1'>
                {e.title}
              </div>
              <div className='whitespace-pre-wrap font-[450] text-lg font-[norms-pro] text-[#AFAFAF]'>
                {e.text}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
