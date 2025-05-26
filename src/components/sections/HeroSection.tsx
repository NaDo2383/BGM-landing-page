"use client"

import { useTranslations } from "next-intl"
import Button from "../ui/Button"

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-linear-to-b from-purple-900/20 to-blue-900/20' />
      <div className='absolute inset-0'>
        <div className='w-full h-full bg-linear-to-r from-purple-600/30 to-blue-600/30 blur-3xl' />
      </div>

      <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
        <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up'>
          {t("title")}
        </h1>

        <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200'>
          {t("subtitle")}
        </p>

        <div className='animate-fade-in-up animation-delay-400'>
          <Button variant='secondary' className='text-lg px-8 py-3'>
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  )
}
