"use client"

import { useTranslations } from "next-intl"
import Button from "../ui/Button"

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-[url("/hero_desktop.png")] bg-cover bg-center ' />

      <div className='relative z-10 text-center px-4 max-w-4xl mx-auto flex justify-between flex-col gap-24 mt-28'>
        <h1 className='text-xl md:text-[40px] font-[700] text-white mb-6 animate-fade-in-up tracking-wider text-center relative whitespace-pre'>
          <div className=' font-[BGMfreigeistLight] uppercase font-normal text-[40px]'>
            {t("title1")}
          </div>
          <span
            className='relative font-[BGMfreigeist] uppercase font-bold text-[40px]'
            style={{
              textShadow:
                "0 0 10px rgba(255,255,255,0.8), 0 0 50px rgba(255,255,255,0.6)",
            }}>
            {t("title")}
          </span>
        </h1>
        <div className='font-[BGMfreigeist]'>{t("title2")}</div>
        <div className='mx-auto'>
          <Button variant={"transparent"}>{t("startInvesting")}</Button>
        </div>
      </div>
    </section>
  )
}
