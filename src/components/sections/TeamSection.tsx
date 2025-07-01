"use client"

import { useTranslations } from "next-intl"
import { ArrowBtn } from "../ui/ArrowBtn"

interface TeamMember {
  image: string
}

export default function TeamSection() {
  const t = useTranslations("team")

  // Mock data for now
  const team: TeamMember[] = [
    { image: "/tuz1.png" },
    { image: "/tuz2.png" },
    { image: "/tuz3.png" },
    { image: "/tuz4.png" },
    { image: "/tuz5.png" },
  ]

  return (
    <section className='p-[100px] bg-[#020618]'>
      <div className='max-w-7xl mx-auto flex flex-col gap-[50px]'>
        <div className='flex justify-center gap-2'>
          <h2 className='text-[40px] font-[Roboto] text-[#F1573F]  text-center '>
            {t("title1")}
          </h2>
          <h2 className='text-[40px] font-[Roboto] text-white text-center'>
            {t("title2")}
          </h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8 px-[130px] h-[406px]'>
          {team.map((member, index) => (
            <div
              key={index}
              className={` group flex justify-center ${
                index % 2 === 0 ? "items-end" : "items-start"
              }`}>
              <img src={member.image} width={156} />
            </div>
          ))}
        </div>
        <p className='text-[14px] text-[#90A1B9] text-center '>{t("subtitle")}</p>
        <div className=' self-center'>
          <ArrowBtn arrowBg='black' onClick={() => alert("Go!")}>
            {t("seeMore")}
          </ArrowBtn>
        </div>
      </div>
    </section>
  )
}
