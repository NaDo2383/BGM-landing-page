"use client"

import { useTranslations } from "next-intl"

interface TeamMember {
  id: string
  name: string
  position: string
  image: string
}

export default function TeamSection() {
  const t = useTranslations("team")

  // Mock data for now
  const team: TeamMember[] = [
    { id: "1", name: "John Doe", position: "CEO", image: "/api/placeholder/200/300" },
    { id: "2", name: "Jane Smith", position: "CTO", image: "/api/placeholder/200/300" },
    { id: "3", name: "Mike Johnson", position: "CFO", image: "/api/placeholder/200/300" },
    {
      id: "4",
      name: "Sarah Williams",
      position: "CMO",
      image: "/api/placeholder/200/300",
    },
    { id: "5", name: "David Brown", position: "COO", image: "/api/placeholder/200/300" },
  ]

  return (
    <section className='py-24 bg-gray-800/50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-white text-center mb-4'>{t("title")}</h2>
        <p className='text-2xl text-gray-400 text-center mb-16'>{t("subtitle")}</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
          {team.map((member) => (
            <div key={member.id} className='text-center group'>
              <div className='relative overflow-hidden rounded-lg mb-4'>
                <div className='w-full h-64 bg-linear-to-br from-gray-600 to-gray-800 flex items-center justify-center'>
                  <span className='text-gray-500'>Photo</span>
                </div>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
              <h3 className='text-lg font-semibold text-white'>{member.name}</h3>
              <p className='text-gray-400'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
