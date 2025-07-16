"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"

interface NewsCardProps {
  title: string
  description: string
  img: string
  id: string
}

export default function NewsCard({ title, description, img, id }: NewsCardProps) {
  const t = useTranslations("general")

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{ backgroundImage: `url(${img})` }}
      className={`h-[480px] w-[380px]  relative flex flex-col justify-end transition-all duration-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#F1573F] after:to-[#3F61F1]`}>
      <div className='p-[20px] flex flex-col gap-2.5 items-start bg-black/70 backdrop-blur-[25px]'>
        <h3 className='text-[24px] font-[Roboto]  text-white font-medium line-clamp-2'>
          {title}
        </h3>
        <p className='text-[#90A1B9] text-[14px] w-full line-clamp-4 '>{description}</p>
        <Link href={`/newsInsight/${id}`}>
          <button className=' py-[7px] px-[14px] border border-white rounded-3xl text-[14px] capitalize cursor-pointer'>
            {t("seeMore")}
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
