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
      className='bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300'>
      {icon && <div className='text-4xl mb-4'>{icon}</div>}
      <h3 className='text-xl font-semibold text-white mb-4'>{title}</h3>
      <p className='text-gray-400'>{description}</p>
    </motion.div>
  )
}
