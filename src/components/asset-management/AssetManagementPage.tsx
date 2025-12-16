"use client"
import { useScrollToId } from "@/utils/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"
import FundManagerCard from "../ui/FundManagerCard"

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

  const fundManagers = [
    {
      title: t("fundeManagerTitle1"),
      name: t("fundeManagerName1"),
      imgUrl: "/billy.png",
      number: "+976 88291809",
      mail: "bilegt.g@balancedgrowth.mn",
    },
    {
      title: t("fundeManagerTitle2"),
      name: t("fundeManagerName2"),
      imgUrl: "/junai.png",
      number: "+976 94247272",
      mail: "oyunjunai@balancedgrowth.mn",
    },
    {
      title: t("fundeManagerTitle3"),
      name: t("fundeManagerName3"),
      imgUrl: "/membercardimage.png",
      number: "+976 99208523",
      mail: "aminaa@capitalgrowth.mn",
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className='relative min-h-[400px] flex items-center justify-center flex-col overflow-hidden'>
        <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] bg-[url("/about-us-hero.png")] bg-no-repeat bg-contain bg-center'>
          <div className='flex flex-col items-center justify-center mt-16 sm:mt-20 md:mt-24'>
            <h2 className='text-[28px] sm:text-[36px] md:text-[62px] font-[BGMxwidemedium] bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase leading-tight'>
              {t("title1")}
            </h2>
            <span className='font-[norms-pro] text-sm sm:text-base md:text-lg text-[#AFAFAF] mt-2'>
              {t("simplify-invest")}
            </span>
          </div>

          {/* Chips */}
          <div className='z-20 mt-6 sm:mt-8 md:mt-14 w-full justify-center flex flex-wrap gap-2.5 sm:gap-4 md:gap-5'>
            <span
              onClick={() => scrollTo("fixed-income")}
              className='inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[#afafaf] border-2 border-transparent cursor-pointer [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box] text-xs sm:text-sm md:text-base'>
              {t("fixed-income")}
            </span>
            <span
              onClick={() => scrollTo("real-state")}
              className='inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[#afafaf] border-2 border-transparent cursor-pointer [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box] text-xs sm:text-sm md:text-base'>
              {t("real-state")}
            </span>
            <span
              onClick={() => scrollTo("saving")}
              className='inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[#afafaf] border-2 border-transparent cursor-pointer [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box] text-xs sm:text-sm md:text-base'>
              {t("saving")}
            </span>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className='flex flex-col items-center gap-12 sm:gap-16 md:gap-24 my-12 sm:my-20 md:my-24 px-4 sm:px-6'>
        {data.map((e, i) => (
          <div
            id={e.id}
            key={i}
            className={[
              "max-w-[1101px] w-full flex justify-between gap-6 sm:gap-10 md:gap-12",
              "flex-col md:flex-row",
              i % 2 == 1 ? "md:flex-row-reverse" : "",
            ].join(" ")}>
            {/* Image */}
            <div className='w-full md:w-auto'>
              <Image
                src={e.img}
                alt={e.title + " image"}
                width={501}
                height={376}
                className='w-full md:w-[501px] h-auto transition-transform duration-500 ease-out hover:scale-[1.03]'
                priority={false}
              />
            </div>

            {/* Text */}
            <div className='max-w-[500px] w-full flex flex-col gap-3 sm:gap-3.5 justify-center'>
              <div
                className='inline-block text-2xl sm:text-3xl md:text-4xl font-[benzin-medium]
                bg-[linear-gradient(270deg,_#E89548_0%,_#E46F03_100%)]
                bg-clip-text text-transparent pb-0.5 sm:pb-1'>
                {e.title}
              </div>
              <div className='whitespace-pre-wrap font-[450] text-sm sm:text-base md:text-lg font-[norms-pro] text-[#AFAFAF]'>
                {e.text}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className=' max-w-[1240px] mx-auto flex flex-col gap-20 my-52'>
        <div className='flex flex-col gap-2.5 items-center justify-center font-[norms-pro]'>
          <div className='text-5xl font-medium capitalize bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent'>
            {t("teamIntroducition")}
          </div>
          <div className='text-[#afafaf] text-lg whitespace-pre-wrap text-center'>
            {t("teamIntroducitionText")}
          </div>
        </div>
        <div className='flex justify-center gap-[90px] '>
          {fundManagers.map((e, i) => (
            <FundManagerCard data={e} key={i} />
          ))}
        </div>
      </section>
    </>
  )
}
