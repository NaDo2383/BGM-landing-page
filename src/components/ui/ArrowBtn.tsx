"use client"

import { FC, ButtonHTMLAttributes } from "react"
import { ArrowUpRight } from "lucide-react"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  arrowBg?: "white" | "black"
  children: React.ReactNode
}

export const ArrowBtn: FC<IconButtonProps> = ({
  children,
  arrowBg = "white",
  className = "",
  ...props
}) => {
  const circleBg = arrowBg === "white" ? "bg-white" : "bg-black"
  const iconColor = arrowBg === "white" ? "text-black" : "text-white"
  const textColor = arrowBg === "white" ? "text-white" : "text-black"
  const btnBg = arrowBg === "white" ? "bg-[#0F172B]" : "bg-white"

  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-5 h-12 rounded-[24px] pl-[20px] pr-[5px] py-[5px] border border-[#45556C] cursor-pointer ${className} ${btnBg}`}>
      <span className={`text-base font-normal capitalize ${textColor}`}>{children}</span>
      <div
        className={`
          flex items-center justify-center
          w-[38px] h-[38px]
          rounded-full
          ${circleBg}
        `}>
        <ArrowUpRight className={`w-4 h-4 ${iconColor}`} />
      </div>
    </button>
  )
}
