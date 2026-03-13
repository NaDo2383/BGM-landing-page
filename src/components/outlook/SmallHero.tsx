"use client"
import React, { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import axios from "axios"

interface OutlookItem {
  year: number
}

const SmallHero = ({ year }: { year: string }) => {
  const t = useTranslations("outlook")
  const router = useRouter()
  const [years, setYears] = useState<number[]>([])

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const res = await axios.get<OutlookItem[]>("/api/outlook")
        const uniqueYears = [...new Set(res.data.map((item) => item.year))]
          .sort((a, b) => a - b)
        setYears(uniqueYears)
      } catch (err) {
        console.error("Failed to fetch outlook years:", err)
      }
    }
    fetchYears()
  }, [])

  return (
    <section className='relative min-h-[400px] flex items-center justify-center flex-col overflow-hidden '>
      <div className='absolute inset-0 bg-[url("/about-us-hero.png")] bg-no-repeat  bg-contain bg-center ' />

      <div className='relative z-10 text-start max-w-[1440px] w-full px-4 sm:px-6 lg:px-[100px] '>
        <div className=' flex flex-col items-center justify-center mt-24'>
          <h2 className='text-[40px] md:text-[62px] font-xwide bg-[linear-gradient(92.65deg,#FFFFFF_17.06%,#999999_99.58%)] bg-clip-text text-transparent text-center mr-1.5 uppercase font-bold'>
            {t("title1")}
          </h2>
          <span className='font-norms-pro text-lg text-[#AFAFAF] whitespace-pre-wrap text-center'>
            {t("title2")}
          </span>
        </div>
        <div className='z-20 mt-14 w-full justify-center flex gap-5'>
          {years.map((y) => (
            <span
              key={y}
              onClick={() => router.push(`/outlook/${y}`)}
              className={`font-norms-pro cursor-pointer font-bold text-[${
                +year === y ? "#fff" : "#E89548"
              }] border border-[#E89548] ${
                +year === y && "bg-[#E89548]"
              } px-5 py-2.5 rounded-full`}>
              {y}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmallHero

