"use client"
import { renderPdfFirstPageToDivBg } from "@/utils/utils"
import React, { useEffect, useRef, useState } from "react"
import { FaFilePdf } from "react-icons/fa"
import { OutlookItem } from "./OutlookPage"

type propType = {
  data: OutlookItem
}

function toProxyUrl(driveShareOrId: string) {
  const p = new URLSearchParams()
  p.set("src", driveShareOrId)
  return `/api/pdf-proxy?${p.toString()}`
}

const OutLookCard = React.memo(({ data }: propType) => {
  const { path, id, title } = data
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const divId = "pdf-bg-preview" + id

  // Lazy-load: only render PDF when card scrolls into view
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" } // start loading 200px before visible
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Render PDF only after card is visible
  useEffect(() => {
    if (!isVisible || !path) return
    const pdfUrl = path.includes("https://drive.google.com")
      ? toProxyUrl(path)
      : path
    renderPdfFirstPageToDivBg(pdfUrl, divId)
      .then(() => setIsLoaded(true))
      .catch(console.error)
  }, [isVisible, path, divId])

  return (
    <div
      ref={containerRef}
      className='rounded-[20px] w-[400px] h-[418px] shadow-2xl flex flex-col justify-center items-center overflow-hidden mx-auto bg-[linear-gradient(90deg,#111111,#262626,#111111)] gap-2.5'>
      <div className='text-[24px] font-[550] font-xwide  text-[#AFAFAF]'>{title}</div>
      <div className='w-[370px] h-[279px] relative' id={divId}>
        {!isLoaded && (
          <div className='absolute inset-0 bg-gray-800/50 rounded animate-pulse' />
        )}
      </div>
      <div className='flex  items-center justify-center gap-1.5 font-norms-pro font-bold text-[20px]'>
        <a
          className='text-[#AFAFAF] flex items-center gap-[7px]'
          href={path}
          target='_blank'>
          <FaFilePdf />
          Дэлгэрэнгүй
        </a>
      </div>
    </div>
  )
})

OutLookCard.displayName = "OutLookCard"

export default OutLookCard
