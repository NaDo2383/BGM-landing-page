"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ArrowBtn } from "../ui/ArrowBtn"

const AboutUs = () => {
  const t = useTranslations("aboutCard")

  return (
    <section className='py-[100px] bg-[#020618] overflow-hidden'>
      <div className=' max-w-[1240px] aspect-[1240/506] mx-auto flex w-full'>
        <div className='w-1/2 relative'>
          <Image
            src={"/about-us-card-image.png"}
            alt='about-us-card-image'
            objectFit='cover'
            fill
          />
        </div>
        <div className='w-1/2 bg-[#0F172B] py-[50px] px-[30px] flex flex-col justify-between'>
          <div className='flex flex-col gap-2.5'>
            <div className='text-[#90A1B9] font-[Roboto]  text-[20px]   font-normal  leading-normal  uppercase'>
              {t("title")}
            </div>
            <div className='text-white font-[Roboto] text-[40px] font-normal leading-normal uppercase'>
              {t("companyName")}
            </div>
            <div className="text-[#90A1B9] font-['Open Sans'] text-[16px] font-normal leading-normal capitalize">
              {t("cardText")}
            </div>
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
