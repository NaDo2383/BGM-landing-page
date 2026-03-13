"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { Newspaper, FileText, Loader2, ArrowRight } from "lucide-react"

interface Stats {
  newsCount: number
  outlookCount: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ newsCount: 0, outlookCount: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin") === "true"
    if (!isLoggedIn) {
      router.push("/admin/login")
      return
    }
    fetchStats()
  }, [router])

  const fetchStats = async () => {
    setIsLoading(true)
    try {
      const [newsRes, outlookRes] = await Promise.all([
        axios.get("/api/news"),
        axios.get("/api/outlook"),
      ])
      setStats({
        newsCount: newsRes.data.items?.length ?? newsRes.data?.length ?? 0,
        outlookCount: outlookRes.data?.length ?? 0,
      })
    } catch (err) {
      console.error("Failed to fetch stats:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const cards = [
    {
      label: "News Articles",
      count: stats.newsCount,
      icon: Newspaper,
      href: "/admin/news",
      gradient: "from-blue-600 to-blue-800",
      iconBg: "bg-blue-500/20",
    },
    {
      label: "Outlook Items",
      count: stats.outlookCount,
      icon: FileText,
      href: "/admin/outlook",
      gradient: "from-amber-600 to-amber-800",
      iconBg: "bg-amber-500/20",
    },
  ]

  return (
    <div className='p-6 lg:p-10 max-w-[1240px] mx-auto text-white'>
      {/* Header */}
      <div className='mb-10'>
        <h1 className='text-3xl font-bold mb-2'>Dashboard</h1>
        <p className='text-gray-400 text-sm'>
          Welcome to the BGM admin panel. Manage your content from here.
        </p>
      </div>

      {/* Stats Cards */}
      {isLoading ? (
        <div className='flex items-center justify-center py-20'>
          <Loader2 className='w-8 h-8 animate-spin text-blue-500' />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className={`relative overflow-hidden bg-gradient-to-br ${card.gradient} rounded-xl p-6 shadow-lg`}>
                <div className='flex items-start justify-between'>
                  <div>
                    <p className='text-white/70 text-sm font-medium mb-1'>
                      {card.label}
                    </p>
                    <p className='text-4xl font-bold text-white'>
                      {card.count}
                    </p>
                  </div>
                  <div
                    className={`${card.iconBg} p-3 rounded-xl`}>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                </div>
                <Link
                  href={card.href}
                  className='inline-flex items-center gap-1.5 mt-4 text-sm text-white/80 hover:text-white transition-colors font-medium'>
                  Manage
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Link
            href='/admin/news'
            className='flex items-center gap-4 bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all group'>
            <div className='bg-blue-600/20 p-3 rounded-lg'>
              <Newspaper className='w-5 h-5 text-blue-400' />
            </div>
            <div>
              <p className='font-medium text-white group-hover:text-blue-400 transition-colors'>
                Manage News
              </p>
              <p className='text-sm text-gray-500'>
                Create, edit and publish news articles
              </p>
            </div>
          </Link>
          <Link
            href='/admin/outlook'
            className='flex items-center gap-4 bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all group'>
            <div className='bg-amber-600/20 p-3 rounded-lg'>
              <FileText className='w-5 h-5 text-amber-400' />
            </div>
            <div>
              <p className='font-medium text-white group-hover:text-amber-400 transition-colors'>
                Manage Outlook
              </p>
              <p className='text-sm text-gray-500'>
                Add and organize outlook PDF documents
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
