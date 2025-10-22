// components/NewsletterList.tsx
import React from "react"
import Image from "next/image"

export type NewsItem = {
  id: string
  title: string
  timeAgo: string
  image: string
}

type Props = {
  items: NewsItem[]
  title?: string
  className?: string
  onItemClick?: (id: string) => void
}

export default function NewsletterList({
  items,
  title = "NEWSLETTER",
  className,
  onItemClick,
}: Props) {
  return (
    <section className={`w-full ${className ?? ""}`}>
      <h2 className='font-[BGMxwidemedium] bg-[linear-gradient(90deg,#FFFFFF,#111111)] bg-clip-text text-transparent font-bold text-[32px] mb-6 ml-6'>
        {title}
      </h2>

      <ul className='space-y-5'>
        {items.map((it) => (
          <li
            key={it.id}
            className='group rounded-[30px] p-4 flex items-center gap-4 transition font-[norms-pro] font-bold border border-[#434343]'>
            <button
              className='text-left flex flex-col justify-between h-[152px]'
              onClick={() => onItemClick?.(it.id)}>
              <h3 className='text-lg text-white line-clamp-3 group-hover:text-white'>
                {it.title}
              </h3>
              <p className='mt-3 text-[14px] text-[#afafaf]'>{it.timeAgo}</p>
            </button>

            <div className='shrink-0'>
              <Image
                src={it.image}
                alt=''
                width={216}
                height={152}
                className='h-[152px] w-[216px] rounded-[20px] object-cover '
                sizes='(max-width: 1024px) 33vw, 140px'
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
