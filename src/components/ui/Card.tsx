"use client"

import { motion } from "framer-motion"

interface CardProps {
  title: string
  description: string
  icon?: string
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='bg-[#0F172B] h-[262px] p-[30px] relative flex flex-col gap-2.5  transition-all duration-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#F1573F] after:to-[#3F61F1] '>
      <h3 className='text-[24px] font-[Roboto]  text-white capitalize font-medium'>
        {title}
      </h3>
      <p className='text-[#90A1B9] text-[14px] w-full line-clamp-6 '>{description}</p>
    </motion.div>
  )
}
