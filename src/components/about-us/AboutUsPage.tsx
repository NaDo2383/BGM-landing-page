"use client"
import { useTranslations } from "next-intl"
import React from "react"

const AboutUsPage = () => {
  const t = useTranslations("about-us")

  return (
    <>
      <section className='relative min-h-[248px] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/smallHero.png")] bg-cover bg-center ' />

        <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px]'>
          <div className=' flex '>
            <h2 className='text-[40px] font-xwide text-white text-center mr-1.5 uppercase'>
              {t("title1")}
            </h2>
          </div>
        </div>
      </section>
      <section className='bg-[#050B1A] py-10 px-6 md:p-[100px] '>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex gap-2.5 justify-center mb-[50px]'>
            <div className=' text-white text-[40px] capitalize font-[roboto]'>
              {t("header1")}
            </div>
            <div className=' text-[#F1573F] text-[40px] capitalize font-[roboto]'>
              {t("header2")}
            </div>
          </div>
          <h3 className='text-white font-[roboto] text-[40px] uppercase text-center mb-[20px]'>
            {t("header3")}
          </h3>
          <div className='text-center text-[#90A1B9] mb-[150px] font-sans'>
            {t("greetings")}
          </div>
          <div className='flex flex-col '>
            <div className='w-full h-[310px] flex'>
              <div className='w-1/2 bg-[#0F172B]'></div>
              <div className='w-1/2 px-[50px] flex flex-col gap-2.5 justify-center items-start'>
                <div className='text-white font-[roboto] text-[40px] uppercase'>
                  {t("mission")}
                </div>
                <div className='text-[#90A1B9] font-sans'>{t("mission-text")}</div>
              </div>
            </div>
            <div className='w-full h-[310px] flex'>
              <div className='w-1/2 px-[50px] flex flex-col gap-2.5 justify-center items-start'>
                <div className='text-white font-[roboto] text-[40px] uppercase'>
                  {t("vision")}
                </div>
                <div className='text-[#90A1B9] font-sans'>{t("vision-text")}</div>
              </div>
              <div className='w-1/2 bg-[#0F172B]'></div>
            </div>
            <div className='w-full h-[310px] flex'>
              <div className='w-1/2 bg-[#0F172B]'></div>
              <div className='w-1/2 px-[50px] flex flex-col gap-2.5 justify-center items-start'>
                <div className='text-white font-[roboto] text-[40px] uppercase'>
                  {t("value")}
                </div>
                <div className='text-[#90A1B9] font-sans'>{t("value-text")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#0F172B] py-10 px-6 md:p-[100px]'>
        <div className='max-w-[848px] flex gap-[50px] mx-auto'>
          <div className='w-[40%]'>
            <img src={"/ceo.png"} className=' object-fill' />
          </div>
          <div className='w-[60%] flex flex-col gap-2.5'>
            <div className='text-white text-[40px] font-[roboto] uppercase'>
              {t("ceo-name")}
            </div>
            <div className=' text-[#90A1B9] font-sans '>{t("ceo-creeting")}</div>
            <div>{t("ceo-sign")}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage
