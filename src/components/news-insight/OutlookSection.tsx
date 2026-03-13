"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { renderPdfFirstPageToDivBg } from "@/utils/utils"

interface OutlookItem {
  title: string
  path: string
  id: string
  year: number
}

function toProxyUrl(driveShareOrId: string) {
  const p = new URLSearchParams()
  p.set("src", driveShareOrId)
  return `/api/pdf-proxy?${p.toString()}`
}

const PREVIEW_DIV_ID = "outlook-section-pdf-preview"

const OutlookSection = () => {
  const [latestOutlook, setLatestOutlook] = useState<OutlookItem | null>(null)
  const [years, setYears] = useState<number[]>([])

  useEffect(() => {
    const fetchOutlooks = async () => {
      try {
        const res = await axios.get<OutlookItem[]>("/api/outlook")
        const data = res.data
        if (data.length > 0) {
          setLatestOutlook(data[0])

          const uniqueYears = [...new Set(data.map((item) => item.year))]
            .sort((a, b) => b - a)
            .slice(0, 2)
            .sort((a, b) => a - b)
          setYears(uniqueYears)
        }
      } catch (err) {
        console.error("Failed to fetch outlooks:", err)
      }
    }
    fetchOutlooks()
  }, [])

  // Render PDF first page as background
  useEffect(() => {
    if (!latestOutlook?.path) return
    const pdfUrl = latestOutlook.path.includes("https://drive.google.com")
      ? toProxyUrl(latestOutlook.path)
      : latestOutlook.path
    renderPdfFirstPageToDivBg(pdfUrl, PREVIEW_DIV_ID).catch(console.error)
  }, [latestOutlook])

  if (!latestOutlook) return null

  return (
    <section
      id='outlook'
      className='bg-[#121212] min-h-[520px] md:min-h-[756px] py-12 sm:py-16 md:py-24'>
      <div className='max-w-[1280px] mx-auto w-full flex flex-col md:flex-row gap-6 sm:gap-7 md:gap-8 px-4 sm:px-6 md:px-0'>
        {/* PDF preview block */}
        <div className='w-full md:w-3/5 aspect-[16/9] sm:aspect-[3/2] md:aspect-[4/3] bg-[linear-gradient(#262626,#111111,#262626)] rounded-[18px] sm:rounded-[22px] md:rounded-[25px] p-4 sm:p-6 md:p-7'>
          <div
            id={PREVIEW_DIV_ID}
            className='rounded-[12px] sm:rounded-[14px] md:rounded-[15px] overflow-hidden w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[4/3]'
          />
        </div>

        {/* Text side */}
        <div className='flex-1 flex flex-col justify-between px-1 sm:px-0'>
          <div className='mt-6 sm:mt-10 md:mt-16 flex flex-col gap-4 sm:gap-5 md:gap-6'>
            <div className='text-2xl sm:text-3xl md:text-4xl uppercase text-white whitespace-pre font-benzin-bold leading-tight'>
              {latestOutlook.title}
            </div>
            {latestOutlook.path && (
              <Link
                href={latestOutlook.path}
                target='_blank'
                className='font-norms-pro underline text-base sm:text-xl md:text-2xl font-[450] text-white/90'>
                {latestOutlook.title}
              </Link>
            )}
          </div>

          <div className='flex flex-wrap gap-2.5 sm:gap-3.5 md:gap-3.5 font-norms-pro font-semibold mt-6 sm:mt-10 md:mt-0 mb-10 sm:mb-14 md:mb-20'>
            {years.map((year, index) => {
              const isLatest = index === years.length - 1
              return (
                <Link key={year} href={`/outlook/${year}`}>
                  <div
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] sm:rounded-[15px] border border-[#E89548] cursor-pointer text-sm sm:text-base ${
                      isLatest
                        ? "bg-[linear-gradient(#E89548,#E87811)]"
                        : ""
                    }`}>
                    {year} Global Outlook
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutlookSection
