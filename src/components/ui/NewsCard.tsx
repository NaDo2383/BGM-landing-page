"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

interface NewsCardProps {
  title: string
  description: string
  imageUrl?: string
  id: string
  className?: string
  featured?: boolean // optional: make the first card wider elsewhere
}

export default function NewsCard({
  title,
  description,
  imageUrl,
  id,
  className,
  featured = false,
}: NewsCardProps) {
  return (
    <Link href={`/news-Insight/${id}`} className='group block h-full focus:outline-none'>
      <motion.article
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={clsx(
          "h-full rounded-[30px] p-3 sm:p-4",
          "bg-[linear-gradient(#171717,#111111)] border border-[#434343]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,.06)]",
          "flex flex-col",
          className
        )}>
        {/* Image */}
        <div
          className={clsx(
            "relative overflow-hidden rounded-[15px]",
            featured ? "aspect-[21/8]" : "aspect-[4/3]"
          )}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
              priority={false}
            />
          ) : (
            <div className='absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800' />
          )}

          {/* subtle inner border/highlight to match mock */}
          <div className='pointer-events-none absolute inset-0 rounded-[15px] ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]' />
        </div>

        {/* Text */}
        <h3 className='mt-4 text-white leading-tight font-semibold text-[18px] sm:text-[20px]'>
          {title}
        </h3>
        <p
          className='mt-2 text-white/60 text-sm leading-6 line-clamp-2'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </motion.article>
    </Link>
  )
}
