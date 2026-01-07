"use client"
import React from "react"
import { ShieldCheck, ScrollText } from "lucide-react"
import { ArrowBtn } from "../ui/ArrowBtn"
import { useTranslations } from "next-intl"

export default function DocumentsPage() {
  const t = useTranslations("docs")

  const documents = [
    {
      id: 1,
      type: "procedure",
      title: t("sonorhol-zorchil"),
      url: "/files/BGM_Sonirhliin zurchiltei heltsel hiih juram.pdf",
    },
    {
      id: 2,
      type: "procedure",
      title: t("uil-ajillagaa"),
      url: "/files/BGM_TUZ uil ajillagaanii juram.pdf",
    },
    {
      id: 3,
      type: "policy",
      title: t("hamtran ajillah"),
      url: "/files/BGM_Oroltsogch taluudtai hamtran ajillah bodlogo.pdf",
    },
    {
      id: 4,
      type: "policy",
      title: t("zalgamj halaa"),
      url: "/files/BGM_Zalgamj halaanii bodlogo.pdf",
    },
    {
      id: 5,
      type: "policy",
      title: t("tsalin"),
      url: "/files/BGM_Tsalin uramshuulliin bodlogo.pdf",
    },
  ]

  const procedures = documents.filter((doc) => doc.type === "procedure")
  const policies = documents.filter((doc) => doc.type === "policy")

  const openPdf = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Reusable Card Component
  const DocCard = ({ doc, icon: Icon }: { doc: any; icon: any }) => (
    <div className='group relative flex flex-col justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]'>
      <div>
        <div className='flex items-start justify-between mb-4'>
          <div className='p-3 bg-zinc-800 rounded-lg group-hover:bg-orange-500/10 transition-colors'>
            <Icon className='w-8 h-8 text-orange-500' />
          </div>
          <span className='text-xs font-medium text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800'>
            PDF
          </span>
        </div>

        <h3 className='text-xl font-bold text-white my-8  leading-tight group-hover:text-orange-400 transition-colors'>
          {doc.title}
        </h3>
      </div>

      <div className='mt-auto'>
        {/* Your Custom Button Component */}
        <div onClick={() => openPdf(doc.url)}>
          <ArrowBtn
            arrow_bg='black'
            className='w-full sm:w-auto hover:bg-orange-500 hover:text-white transition-colors cursor-pointer'>
            {t("download")}
          </ArrowBtn>
        </div>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-zinc-950 px-6 pb-12 pt-24 sm:px-12 lg:px-24'>
      <div className='max-w-7xl mx-auto space-y-16'>
        {/* Procedures Section */}
        <section>
          <div className='flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4'>
            <ScrollText className='w-6 h-6 text-orange-500' />
            <h2 className='text-2xl font-bold text-white'>{t("Procedures")}</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {procedures.map((doc) => (
              <DocCard key={doc.id} doc={doc} icon={ScrollText} />
            ))}
          </div>
        </section>

        {/* Policies Section */}
        <section>
          <div className='flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4'>
            <ShieldCheck className='w-6 h-6 text-orange-500' />
            <h2 className='text-2xl font-bold text-white'>{t("Policies")}</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {policies.map((doc) => (
              <DocCard key={doc.id} doc={doc} icon={ShieldCheck} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
