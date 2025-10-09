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
      <section className='w-full bg-[#040915]'>
        <section className='relative min-h-[248px] flex items-center justify-center overflow-hidden '>
          <div className='absolute inset-0 bg-[url("/smallHero.png")]  bg-cover bg-center ' />
          <div className='absolute inset-0 bg-cover bg-center bg-[linear-gradient(180deg,rgba(3,6,13,0)_0%,#03060D_100%)] ' />

          <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] '>
            <div className=' flex '>
              <h2 className='text-[40px] font-xwide text-white text-center mr-1.5 uppercase'>
                {t("title1")}
              </h2>
            </div>
          </div>
        </section>
        <AboutUs imageColoredBg={true} bgcolor={"#03060D"} />
        <section className='w-full bg-[#03060D]'>
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
                className='bg-[url("/card-bg.png")] bg-cover w-[360px] h-[270px] p-6 gap-3.5 flex flex-col text-center items-center justify-center'>
                <div className='text-[40px] font-[850] uppercase font-[BGMfreigeist]'>
                  {e.title}
                </div>
                <div className='font-normal uppercase font-[norms-pro]'>{e.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-[#03060D] py-10 px-6 md:p-[100px]'>
          <div className=' flex  max-w-[1112px] gap-[113px] mx-auto'>
            <div className='w-[60%] min-w-[513px] flex flex-col justify-center gap-2.5'>
              <div className=' text-[#90A1B9] font-[norms-pro] '>{t("ceo-creeting")}</div>
              <div className='text-white text-2xl font-[norms-pro] font-bold uppercase'>
                {t("ceo-name")}
              </div>
              <div>{t("ceo-sign")}</div>
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
