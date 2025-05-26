"use client"

import { useTranslations } from "next-intl"

interface NewsItem {
  id: string
  title: string
  description: string
  image: string
  date: string
}

export default function NewsSection() {
  const t = useTranslations("news")

  // Mock data for now
  const news: NewsItem[] = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/api/placeholder/400/300",
      date: "2024-03-20",
    },
    {
      id: "2",
      title: "Consectetur adipiscing elit",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/api/placeholder/400/300",
      date: "2024-03-19",
    },
    {
      id: "3",
      title: "Ut enim ad minim veniam",
      description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: "/api/placeholder/400/300",
      date: "2024-03-18",
    },
  ]

  return (
    <section className='py-24 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-white text-center mb-16'>{t("title")}</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {news.map((item) => (
            <div
              key={item.id}
              className='bg-gray-800 rounded-lg overflow-hidden group cursor-pointer'>
              <div className='h-48 bg-gray-700 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center'>
                  <span className='text-gray-500'>Image</span>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-400 text-sm mb-2'>{item.date}</p>
                <h3 className='text-xl font-semibold text-white mb-3'>{item.title}</h3>
                <p className='text-gray-400'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
