import { useTranslations } from "next-intl"
import React from "react"

export default function CareersAtBGM() {
  const t = useTranslations("careers")

  const sample = [
    {
      icon: "ri-target-line",
      title: t("purpose-culture"),
      text: t("purpose-culture-text"),
    },
    {
      icon: "ri-numbers-fill",
      title: t("order-culture"),
      text: t("order-culture-text"),
    },
    {
      icon: "ri-speak-ai-fill",
      title: t("v-of-emp"),
      text: t("v-of-emp-text"),
    },
  ]

  return (
    <section
      id='life-at-bgm'
      className='max-w-7xl mx-auto flex flex-col items-center justify-center my-20 gap-16'>
      <div className=' font-[norms-pro] text-center'>
        <div className=' font-medium text-5xl bg-[linear-gradient(92.65deg,#FFFFFF,#AAAAAA)] bg-clip-text text-transparent '>
          {t("life-at-bgm")}
        </div>
        <div className='font-[450] text-lg text-[#afafaf] whitespace-pre-wrap mt-3.5'>
          {t("life-at-bgm-text")}
        </div>
      </div>
      <div className='flex w-full justify-between font-[norms-pro]'>
        {sample.map((e, i) => (
          <div
            key={i}
            className='flex flex-col items-center text-center gap-2.5 bg-[url("/career-card-bg.png")] bg-cover bg-center w-[390px] h-[400px] rounded-[30px] border border-[#4E4E4E] pt-7 px-6'>
            <div className=' font-semibold text-[30px] '>{e.title}</div>
            <div className='bg-[url("/career-card-bg.gif")]  bg-center z-10 rounded-[25px] w-[331px] h-[153px] flex justify-center items-center'>
              <div className='size-[90px] flex justify-center items-center bg-[linear-gradient(#FFBD80,#E46F03,#E46F03)] rounded-full'>
                <i
                  className={`${e.icon} text-white text-5xl leading-none`}
                  aria-hidden='true'
                />
              </div>
            </div>
            <div className=' font-[450] text-[#afafaf] text-[18px] whitespace-pre-wrap text-base/snug'>
              {e.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
