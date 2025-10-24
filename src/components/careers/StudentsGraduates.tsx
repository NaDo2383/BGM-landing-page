import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

export default function StudentsGraduates() {
  const t = useTranslations("careers")

  const sample = [
    {
      name: t("career-journey"),
      path: "/careers-pic-2.png",
      text: t("career-journey-text"),
    },
    {
      name: t("early-bird"),
      path: "/careers-pic-1.png",
      text: t("early-bird-text"),
    },
  ]

  return (
    <section
      id='students-and-graduates'
      className='max-w-7xl mx-auto flex flex-col items-center justify-center my-20 pb-24 gap-16 bg-[url("/student-section-bg.png")] bg-fill bg-center'>
      <div className=' font-[norms-pro] text-center'>
        <div className=' font-medium text-5xl bg-[linear-gradient(92.65deg,#FFFFFF,#AAAAAA)] bg-clip-text text-transparent '>
          {t("students-and-graduates")}
        </div>
        <div className='font-[450] text-lg text-[#afafaf] whitespace-pre-wrap mt-3.5'>
          {t("students-and-graduates-text")}
        </div>
      </div>
      <div className=' flex justify-center gap-5 lg:gap-7 font-[norms-pro]'>
        {sample.map((e, i) => (
          <div
            key={i}
            className='w-[597px] border border-[#9D7960] bg-[radial-gradient(at_center_top,#272727_0%,#111111_100%)] h-[666px] flex flex-col gap-7 py-[33px] px-[44px] rounded-[30px] font-[norms-pro]'>
            <div className='text-center font-semibold text-[30px]'>{e.name}</div>
            <div className='relative w-[509px] h-[290px] rounded-[25px] border border-[#4E4E4E] overflow-hidden'>
              <Image src={e.path} layout='fill' objectFit='cover' alt='image' />
            </div>
            <div className='font-[450] text-lg text-[#afafaf] whitespace-pre-wrap text-center'>
              {e.text}
            </div>
            <div className=' py-2.5 px-7.5 text-white rounded-full w-fit mx-auto bg-[radial-gradient(52.44%_127.23%_at_0%_0%,_#FFBD80_0%,#E46F03_77.25%)]'>
              {t("apply-now")}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
