"use client"

import { useTranslations } from "next-intl"

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-[url("/hero_desktop.jpg")] bg-cover bg-center ' />

      <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
        <h1 className='text-xl md:text-[40px] font-[700] text-white mb-6 animate-fade-in-up tracking-wider text-center relative whitespace-pre'>
          <span
            className='relative uppercase text-white font-xwide'
            style={{
              textShadow:
                "0 0 10px rgba(255,255,255,0.8), 0 0 50px rgba(255,255,255,0.6)",
            }}>
            {t("title")}
          </span>
        </h1>
      </div>
    </section>
  )
}
