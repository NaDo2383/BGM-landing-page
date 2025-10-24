"use client"

import { useTranslations } from "next-intl"
import { ArrowBtn } from "../ui/ArrowBtn"
import NewsCard from "../ui/NewsCard"
import Link from "next/link"
import { useEffect, useState } from "react"
import { newsType } from "../news-insight/NewsInsightPage"
import axios from "axios"
import {
  HeroNewsCardSkeleton,
  NewsCardSkeleton,
} from "../news-insight/HeroNewsCardSkeleton"

export default function NewsSection() {
  const t = useTranslations("news")
  const [news, setNews] = useState<newsType[]>([])
  const [loading, setLoading] = useState(true)

  const fetchNews = async (): Promise<void> => {
    try {
      setLoading(true)
      const res = await axios.get<{ items: newsType[] }>(`/api/news`)
      setNews(res.data.items)
    } catch (error) {
      console.error("Failed to fetch news:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <section className='bg-[#050505] p-6 sm:p-18 lg:p-[100px]'>
      <div className='mx-auto max-w-[1240px] px-2 sm:px-4 flex flex-col gap-8 sm:gap-10 lg:gap-[50px]'>
        {/* Heading */}
        <div className='flex flex-col gap-2'>
          <div className='flex flex-wrap items-center justify-center gap-2 text-center font-[norms-pro] font-bold'>
            <h2 className=' text-white text-2xl sm:text-3xl lg:text-[40px] leading-tight'>
              {t("title1")}
            </h2>
          </div>
          <p className='text-center text-[#90A1B9] font-normal tracking-normal capitalize text-sm sm:text-base leading-relaxed max-w-4xl mx-auto'>
            {t("text")}
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 auto-rows-fr]'>
          {loading ? (
            <>
              <HeroNewsCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
            </>
          ) : (
            news.slice(0, 5).map((item, i) => (
              <div
                key={item.id}
                className={`h-full ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <NewsCard {...item} featured={i === 0} />
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className='flex justify-center'>
          <div className='w-full sm:w-auto'>
            <Link href='/news-Insight'>
              <ArrowBtn
                arrow_bg='black'
                className='w-full sm:w-auto'
                aria-label={t("seeMore")}>
                {t("seeMore")}
              </ArrowBtn>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
