"use client"
import { useTranslations } from "next-intl"
import React from "react"
import AboutUs from "../sections/AboutUs"
import Image from "next/image"
import { useScrollToId } from "@/utils/utils"

const AboutUsPage = () => {
  const t = useTranslations("about-us")
  const scrollTo = useScrollToId()

  const data = [
    {
      title: t("title1small"),
      text: t("text1small"),
    },
    {
      title: t("title2small"),
      text: t("text2small"),
    },
    {
      title: t("title3small"),
      text: t("text3small"),
    },
  ]

  return (
    <>
      <section className='w-full bg-[#000]'>
        <section className='relative min-h-[400px]   flex items-center justify-center flex-col overflow-hidden '>
          <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] bg-[url("/about-us-hero.png")] bg-no-repeat bg-center bg-contain'>
            <div className=' flex flex-col items-center justify-center mt-24'>
              <h2 className='text-[40px] md:text-[62px] font-[BGMxwidemedium] font-xwide bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase'>
                {t("title1")}
              </h2>
              <span className='font-[norms-pro] text-lg text-[#AFAFAF]'>
                {t("whatwedo")}
              </span>
            </div>
            <div className='z-20 mt-14 w-full justify-center flex gap-5'>
              <span
                onClick={() => scrollTo("bg-theory")}
                className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
                {t("BGTheory")}
              </span>
              <span
                onClick={() => scrollTo("asset-mamangement")}
                className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
                {t("BGMAssetmanagement")}
              </span>
              <span
                onClick={() => scrollTo("team")}
                className='inline-flex items-center justify-center
             rounded-full px-5 py-2.5 text-[#afafaf]
             border-2 border-transparent
             [background:linear-gradient(#0B0B0B,#0B0B0B)_padding-box,linear-gradient(180deg,#4E4E4E_0%,#232323_100%)_border-box]'>
                {t("Team introduction")}
              </span>
            </div>
          </div>
        </section>
        <AboutUs id='bg-theory' imageColoredBg={true} bgcolor={"#050505"} />
        <section id='asset-mamangement' className='w-full bg-[#000]'>
          <div className='flex flex-col justify-center items-center max-w-7xl mx-auto gap-2.5 '>
            <div className='text-[45px] font-[500] font-[norms-pro] bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent whitespace-pre text-center'>
              {t("bgm-name")}
            </div>
            <div className=' flex flex-col gap-6 max-w-[942px] text-center font-[norms-pro] text-[#90A1B9] capitalize'>
              <div>{t("text1")}</div>
              <div>{t("text2")}</div>
            </div>
          </div>
        </section>
        <section className='relative flex flex-col justify-center items-center max-w-7xl mx-auto gap-12 bg-[url("/bg-about-us.png")] bg-center min-h-[506px] min-w-[1440px]'>
          {/* gradient overlay */}
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_center,rgba(255,255,255,0)_65%,rgba(3,6,13,1)_100%)] pointer-events-none'></div>

          {/* content */}
          <div className='flex justify-between relative z-10 gap-16'>
            {data.map((e, i) => (
              <div
                key={i + "fdnjsaikl"}
                className='bg-[url("/about-us-card-bg.png")] bg-cover w-[360px] h-[270px] p-6 gap-3.5 flex flex-col text-center items-center justify-start'>
                <div className='text-[40px] font-[850] mt-8 uppercase font-[BGMfreigeist]'>
                  {e.title}
                </div>
                <div className='font-medium whitespace-pre-wrap font-[norms-pro] text-lg text-[#AFAFAF]'>
                  {e.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='team' className='bg-[#000] py-10 px-6 md:p-[100px]'>
          <div className=' flex  max-w-[1112px] gap-[113px] mx-auto'>
            <div className='w-[60%] min-w-[513px] flex flex-col justify-center gap-6'>
              <div className=' text-[#fff] font-[norms-pro] font-[450] text-3xl whitespace-pre-wrap'>
                {t("ceo-creeting")}
              </div>
              <div className='flex items-end gap-[44px]'>
                <div className='text-white text-[32px] font-[500] font-[norms-pro] leading-none'>
                  {t("ceo-name")}
                </div>
                <div className='text-[#F1883F] text-[20px] font-[norms-pro] leading-none'>
                  {t("ceo-pos")}
                </div>
              </div>
            </div>
            <div className='w-[40%] min-w-[460px] '>
              <Image
                src='/ceo.png'
                alt='CEO portrait'
                width={460}
                height={540}
                className='object-fill rounded-lg'
                priority
              />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default AboutUsPage
