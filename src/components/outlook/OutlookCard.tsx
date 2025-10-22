"use client"
import { renderPdfFirstPageToDivBg } from "@/utils/utils"
import { useEffect } from "react"
import { FaFilePdf } from "react-icons/fa"

type propType = {
  data: {
    path: string
    infoId: number
    title: string
  }
}

const OutLookCard = ({ data }: propType) => {
  const { path, infoId, title } = data

  useEffect(() => {
    renderPdfFirstPageToDivBg(path, "pdf-bg-preview" + infoId).catch(console.error)
  }, [infoId, path])

  return (
    <div className='rounded-[20px] w-[400px] h-[418px] shadow-2xl flex flex-col justify-center items-center overflow-hidden mx-auto bg-[linear-gradient(90deg,#111111,#262626,#111111)] gap-2.5'>
      <div className='text-[24px] font-[550] font-[BGMxwidemedium]  text-[#AFAFAF]'>
        {title}
      </div>
      <div className=' w-[370px] h-[279px]' id={"pdf-bg-preview" + infoId}></div>
      <div className='flex  items-center justify-center gap-1.5 font-[norms-pro] font-bold text-[20px]'>
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
}

export default OutLookCard
