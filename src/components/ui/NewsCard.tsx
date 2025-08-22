"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

interface NewsCardProps {
  title: string
  description: string
  img?: string
  id: string
  className?: string
}

export default function NewsCard({
  title,
  description,
  img,
  id,
  className,
}: NewsCardProps) {
  const t = useTranslations("general")

  return (
    <Link href={`/newsInsight/${id}`} className='block group focus:outline-none'>
      <motion.article
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={clsx(
          // responsive sizing
          "relative w-full h-[480px]",
          // card chrome
          "rounded-xl overflow-hidden shadow-lg ring-1 ring-white/5",
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px]",
          "after:bg-gradient-to-r after:from-[#F1573F] after:to-[#3F61F1]",
          "md:[transform:translateZ(0)]",
          className
        )}>
        {/* Background image */}
        {img ? (
          <Image
            src={img}
            alt={title}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover'
            priority={false}
          />
        ) : (
          // Fallback if no image
          <div className='absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900' />
        )}

        {/* Dark overlay for readability */}
        <div className='absolute inset-0 bg-black/40' />

        {/* Content */}
        <div
          className={clsx(
            "absolute bottom-0 left-0 right-0",
            "backdrop-blur-[12px] bg-black/50",
            "px-4 sm:px-5 py-4 sm:py-5"
          )}>
          <h3 className='text-white font-medium font-[Roboto] leading-snug line-clamp-2 text-base sm:text-lg md:text-xl'>
            {title}
          </h3>

          <p
            className='mt-2 text-[#90A1B9] text-sm sm:text-[14px] line-clamp-3 sm:line-clamp-4'
            // keep your HTML support
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <span
            className='
              mt-3 inline-flex items-center gap-2
              text-[13px] sm:text-[14px] text-white/90
              border border-white/70 rounded-3xl px-3 py-1.5
              transition-colors
              group-hover:bg-white group-hover:text-black
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            '
            aria-label={t("seeMore")}>
            {t("seeMore")}
          </span>
        </div>
      </motion.article>
    </Link>
  )
}
