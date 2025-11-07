"use client"

import { useTranslations } from "next-intl"
import Button from "../ui/Button"

export default function HeroSectionTest() {
  const t = useTranslations("hero")

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 -z-20'>
        <video
          muted
          loop
          autoPlay
          playsInline
          className='absolute inset-0 w-full h-full object-cover'>
          <source src='/hero-video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_56%,rgba(0,0,0,1)_100%)] z-10' />

      <div className='relative z-10 text-center px-4 max-w-4xl mx-auto flex justify-between flex-col  mt-28'>
        <h1 className='text-xl md:text-[40px] font-[700] text-white mb-6 animate-fade-in-up tracking-wider text-center relative whitespace-pre'>
          <div
            style={{
              textShadow:
                "0 0 50px rgba(255,255,255), 0px 0px 1px rgba(255,255,255), 0 0 5px rgba(255,255,255)",
            }}
            className=' font-[BGMfreigeistLight] uppercase font-normal text-[40px]'>
            {t("title1")}
          </div>
          <span
            className='relative font-[BGMfreigeistLight] uppercase font-bold text-[40px]'
            style={{
              textShadow:
                "0 0 50px rgba(255,255,255), 0px 0px 1px rgba(255,255,255), 0 0 5px rgba(255,255,255)",
            }}>
            {t("title")}
          </span>
        </h1>
        <div className='font-[BGMfreigeistLight] text-2xl tracking-wider mt-24'>
          {t("title2")}
        </div>
        <div className='mx-auto mt-[20vh]'>
          <Button variant={"transparent"}>{t("startInvesting")}</Button>
        </div>
      </div>
    </section>
  )
}
