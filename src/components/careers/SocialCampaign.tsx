import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

export default function SocialCampaign() {
  const t = useTranslations("careers")

  const sample = [
    {
      title: t("health"),
      path: "/social-campaign-pic-1.png",
      text: t("health-text"),
    },
    {
      title: t("edu"),
      path: "/social-campaign-pic-2.png",
      text: t("edu-text"),
    },
    {
      title: t("env"),
      path: "/social-campaign-pic-3.png",
      text: t("env-text"),
    },
  ]

  return (
    <section
      id='social-campaign'
      className='max-w-7xl mx-auto flex flex-col items-center justify-center my-20 pb-24 gap-16 '>
      <div className=' font-[norms-pro] text-center'>
        <div className=' font-medium text-5xl bg-[linear-gradient(92.65deg,#FFFFFF,#AAAAAA)] bg-clip-text text-transparent '>
          {t("social-campaign")}
        </div>
        <div className='font-[450] text-lg text-[#afafaf] whitespace-pre-wrap mt-3.5'>
          {t("social-campaign-text")}
        </div>
      </div>
      <div className=' flex justify-center gap-5 lg:gap-7 font-[norms-pro]'>
        {sample.map((e, i) => (
          <div
            key={i}
            className='flex flex-col items-center text-center gap-2.5 w-[390px] h-[400px] rounded-[30px] border border-[#4E4E4E] py-[33px] px-[25px] bg-[radial-gradient(at_center_top,#272727_0%,#111111_100%)]'>
            <div className='relative w-[331px] h-[168px] shrink-0 rounded-[20px] border border-[#4E4E4E] overflow-hidden'>
              <Image
                src={e.path}
                fill
                sizes='331px'
                className='object-cover'
                priority={false}
                alt='image'
              />
            </div>
            <div className='font-medium text-[30px]'>{e.title}</div>
            <div className='font-[450] text-lg text-[#afafaf] whitespace-pre-wrap text-center'>
              {e.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
