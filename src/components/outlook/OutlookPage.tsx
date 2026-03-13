"use client"
import React, { useCallback, useEffect, useState } from "react"
import SmallHero from "./SmallHero"
import OutLookCard from "./OutlookCard"
import axios from "axios"

export interface OutlookItem {
  title: string
  path: string
  id: string
  year: number
}

export default function OutlookPage({ year }: { year: string }) {
  const [outlooks, setOutlooks] = useState<OutlookItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchOutlooks = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      const res = await axios.get<OutlookItem[]>(`/api/outlook?year=${year}`)
      setOutlooks(res.data)
    } catch (err) {
      console.error("Failed to fetch outlooks:", err)
    } finally {
      setLoading(false)
    }
  }, [year])

  useEffect(() => {
    fetchOutlooks()
  }, [fetchOutlooks])

  return (
    <>
      <SmallHero year={year} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl gap-y-16 my-16 px-4'>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className='rounded-[20px] w-[400px] h-[418px] mx-auto bg-gray-800/50 animate-pulse'
              />
            ))
          : outlooks.map((e) => <OutLookCard data={e} key={e.id} />)}
      </div>
    </>
  )
}
