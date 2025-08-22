"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ArrowBtn } from "../ui/ArrowBtn"

const AboutUs = () => {
  const t = useTranslations("aboutCard")

  return (
    <section className='bg-[#020618] overflow-hidden py-10 sm:py-14 lg:py-[100px]'>
      <div
        className='
          mx-auto max-w-[1240px]
          flex flex-col md:flex-row
          w-full
          rounded-xl overflow-hidden ring-1 ring-white/5 shadow-xl
        '>
        {/* Image */}
        <div className='relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto md:min-h-[420px] lg:min-h-[506px]'>
          <Image
            src='/about-us-card-image.png'
            alt='About us'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover'
            priority={false}
          />
        </div>

        {/* Content */}
        <div
          className='
            w-full md:w-1/2
            bg-[#0F172B]
            px-5 sm:px-7 lg:px-[30px]
            py-6 sm:py-8 lg:py-[50px]
            flex flex-col justify-between gap-6
          '>
          <div className='flex flex-col gap-3'>
            <p className='text-[#90A1B9] font-[Roboto] uppercase tracking-wide text-sm sm:text-base'>
              {t("title")}
            </p>

            <h2 className='text-white font-[Roboto] uppercase leading-tight text-2xl sm:text-3xl lg:text-[40px]'>
              {t("companyName")}
            </h2>

            <p className="text-[#90A1B9] font-['Open Sans'] capitalize text-sm sm:text-base lg:text-[16px]">
              {t("cardText")}
            </p>
          </div>

          <div>
            <ArrowBtn onClick={() => alert("Go!")}>{t("seeMore")}</ArrowBtn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
