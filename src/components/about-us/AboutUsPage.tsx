"use client"
import { useTranslations } from "next-intl"
import React from "react"
import AboutUs from "../sections/AboutUs"
import Image from "next/image"

const AboutUsPage = () => {
  const t = useTranslations("about-us")

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
      <section className='w-full bg-[#050505]'>
        <section className='relative min-h-[400px] flex items-center justify-center flex-col overflow-hidden '>
          <div className='absolute inset-0 bg-[url("/about-us-hero.png")]  bg-cover bg-center ' />

          <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] '>
            <div className=' flex flex-col items-center justify-center mt-24'>
              <h2 className='text-[40px] md:text-[62px] font-[BGMxwidemedium] font-xwide bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase'>
                {t("title1")}
              </h2>
              <span className='font-[norms-pro] text-lg text-[#AFAFAF]'>
                {t("whatwedo")}
              </span>
            </div>
            <div className='z-20 mt-14 w-full justify-center flex gap-5'>
              <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
                {t("BGTheory")}
              </span>
              <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
                {t("BGMAssetmanagement")}
              </span>
              <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
                {t("Team introduction")}
              </span>
            </div>
          </div>
        </section>
        <AboutUs imageColoredBg={true} bgcolor={"#050505"} />
        <section className='w-full bg-[#050505]'>
          <div className='flex flex-col justify-center items-center max-w-7xl mx-auto gap-12 '>
            <div className='text-[64px] font-[850] font-[BGMxwidemedium] bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent whitespace-pre text-center'>
              {t("bgm-name").toUpperCase()}
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
                className='bg-[url("/about-us-card-bg.png")] bg-cover w-[360px] h-[270px] p-6 gap-3.5 flex flex-col text-center items-center justify-center'>
                <div className='text-[40px] font-[850] uppercase font-[BGMfreigeist]'>
                  {e.title}
                </div>
                <div className='font-normal uppercase font-[norms-pro]'>{e.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-[#050505] py-10 px-6 md:p-[100px]'>
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
