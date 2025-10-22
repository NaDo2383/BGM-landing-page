import { useTranslations } from "next-intl"
import React from "react"
import CareersAtBGM from "./CareersAtBGM"
import Benefits from "./Benefits"
import StudentsGraduates from "./StudentsGraduates"
import CareerDevelopment from "./CareerDevelopment"
import SocialCampaign from "./SocialCampaign"

export default function CareersPage() {
  const t = useTranslations("careers")

  return (
    <>
      <section className='relative min-h-[400px] flex items-center justify-center flex-col overflow-hidden '>
        <div className='absolute inset-0 bg-[url("/about-us-hero.png")]  bg-cover bg-center ' />

        <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] '>
          <div className=' flex flex-col items-center justify-center mt-24'>
            <h2 className='text-[40px] md:text-[62px] font-[BGMxwidemedium] bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase font-bold'>
              {t("title1")}
            </h2>
            <span className='font-[norms-pro] text-lg text-[#AFAFAF] whitespace-pre-wrap text-center'>
              {t("title2")}
            </span>
          </div>
          <div className='z-20 mt-14 w-full justify-center flex gap-5'>
            <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
              {t("life-at-bgm")}
            </span>
            <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
              {t("benefits")}
            </span>
            <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
              {t("students-and-graduates")}
            </span>
            <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
              {t("career-developments")}
            </span>
            <span className='font-[norms-pro] cursor-pointer font-bold text-white border border-[#90A1B9] px-5 py-2.5 rounded-full'>
              {t("social-campaign")}
            </span>
          </div>
        </div>
      </section>
      <CareersAtBGM />
      <Benefits />
      <StudentsGraduates />
      <CareerDevelopment />
      <SocialCampaign />
    </>
  )
}
