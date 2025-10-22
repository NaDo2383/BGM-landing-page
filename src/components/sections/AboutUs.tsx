"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"

type aboutUsPropsType = {
  bgcolor?: string
  imageColoredBg?: boolean
}

const AboutUs = ({ bgcolor = "#050505" }: aboutUsPropsType) => {
  const t = useTranslations("aboutCard")

  return (
    <section className={`bg-[${bgcolor}] overflow-hidden py-10 sm:py-14 lg:py-[64px]`}>
      <div
        className='
          mx-auto max-w-[1240px]
          flex flex-col items-center md:flex-row gap-[74px]
          w-full
          rounded-xl overflow-hidden  shadow-xl
        '>
        {/* Image */}
        <div className='relative w-full md:w-[460px] aspect-[16/10] md:aspect-auto md:min-h-[420px] lg:min-h-[506px] max-h-[540px] flex justify-center items-center'>
          <Image
            src={"/about-us-card-image-colored.png"}
            alt='About us'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='fit'
            priority={false}
          />
        </div>

        {/* Content */}
        <div
          className='
            w-full md:w-1/2
            px-5 sm:px-7 lg:px-[30px]
            py-6 sm:py-8 lg:py-[50px]
            flex flex-col justify-between gap-6
          '>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-wrap items-center gap-2 text-center font-[850] font-[norms-pro]'>
              <h2 className=' not-only: text-white text-2xl sm:text-3xl lg:text-[40px] leading-tight'>
                {t("title")}
              </h2>
              <span className='  text-[#ef7a0b] text-2xl sm:text-3xl lg:text-[40px] leading-tight '>
                {t("title1")}
              </span>
              <h2 className='  text-white text-2xl sm:text-3xl lg:text-[40px] leading-tight'>
                ?
              </h2>
            </div>

            <div className=' text-lg font-[norms-pro] text-[#90A1B9]'>
              <div>{t("text")}</div>
              <br />
              <div>{t("text1")}</div>
              <br />
              <div>{t("text2")}</div>
              <br />
              <p className='text-white font-[norms-pro] capitalize text-sm sm:text-base lg:text-[18px]'>
                {t("cardText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
