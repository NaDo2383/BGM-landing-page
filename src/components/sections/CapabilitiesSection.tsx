"use client"

import { useTranslations } from "next-intl"
import Card from "../ui/Card"

export default function CapabilitiesSection() {
  const t = useTranslations("capabilities")

  const capabilities = [
    {
      title: t("card1.title"),
      description: t("card1.description"),
      icon: "📊",
    },
    {
      title: t("card2.title"),
      description: t("card2.description"),
      icon: "🎯",
    },
    {
      title: t("card3.title"),
      description: t("card3.description"),
      icon: "💡",
    },
  ]

  return (
    <section className='py-24 bg-gray-800/50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-white text-center mb-16'>{t("title")}</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {capabilities.map((cap, index) => (
            <Card key={index} {...cap} />
          ))}
        </div>
      </div>
    </section>
  )
}
