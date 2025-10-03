"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type CardProps = {
  title: string
  description: string

  icon?: ReactNode // url or custom node
  className?: string
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={
        "transition-all duration-300 w-full h-[363px] bg-gradient-to-r from-[#F1573F] to-[#3F61F1] rounded-[30px]"
      }>
      {/* Card surface */}
      <div className='relative h-[360px] rounded-[30px] bg-[#0f172a] ove#252c3eidden'>
        {/* Content */}
        <div className='relative z-10 flex h-full flex-col gap-3 p-6'>
          {/* Icon pill */}
          {icon !== undefined && (
            <div className='h-15 w-15 items-center justify-center flex rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,1)_20%,#282f41_40%,#282f41_60%,rgba(255,255,255,1)_80%)] border-none'>
              <div className=' inline-flex h-full w-full m-[1px] items-center justify-center rounded-2xl bg-[#282f41]  border-none'>
                {icon}
              </div>
            </div>
          )}

          {/* Title */}
          <h3 className='text-[24px] text-white font-[850px] font-[BGMfreigeist]'>
            {title}
          </h3>

          {/* Description */}
          <p className='mt-1 text-[14px] leading-6 text-[#90A1B9] line-clamp-6 whitespace-pre-wrap'>
            {description}
          </p>

          <div className='flex-1' />
        </div>
      </div>
    </motion.div>
  )
}
