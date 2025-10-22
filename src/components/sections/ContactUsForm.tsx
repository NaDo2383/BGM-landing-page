"use client"

import React, { useMemo, useState } from "react"
import { useTranslations } from "next-intl"
import axios from "axios"
import { ChevronDown } from "lucide-react"

type TopicKey = "news" | "market" | "funds"

export default function EmailAlertsSignup() {
  const t = useTranslations("emailAlerts") // add keys below
  const [email, setEmail] = useState("")
  const [topics, setTopics] = useState<Record<TopicKey, boolean>>({
    news: false,
    market: false,
    funds: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isValidEmail = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  )

  const toggle = (k: TopicKey) => setTopics((p) => ({ ...p, [k]: !p[k] }))

  const handleSubmit = async () => {
    if (!isValidEmail) return
    setIsSubmitting(true)
    try {
      await axios.post("/api/email-alerts", {
        email: email.trim(),
        topics: Object.entries(topics)
          .filter(([, v]) => v)
          .map(([k]) => k),
      })
      setEmail("")
      setTopics({ news: false, market: false, funds: false })
      alert(t("success"))
    } catch (e) {
      console.error(e)
      alert(t("failed"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='bg-[#050505] py-20 px-6'>
      <div className='max-w-5xl mx-auto text-center font-[norms-pro]'>
        <h2 className='text-white text-5xl md:text-5xl font-medium tracking-tight'>
          {t("title")}
        </h2>
        <p className='mt-3 text-[#AFAFAF] text-base md:text-lg'>{t("subtitle")}</p>

        {/* Input Row */}
        <div className='mt-8 flex items-center gap-4 max-w-[813px] mx-auto'>
          {/* Email pill */}
          <div className='flex-1 relative'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholder")}
              aria-label={t("placeholder")}
              className='w-full h-[72px] rounded-[30px] bg-[#242424] text-white/90 placeholder:text-[#8C94A3]
                         px-6 pr-16 outline-none ring-1 ring-black/20 focus:ring-2 focus:ring-white/20
                         text-lg'
            />
          </div>

          {/* Sign Up button */}
          <button
            onClick={handleSubmit}
            disabled={!isValidEmail || isSubmitting}
            className='whitespace-nowrap h-[72px] px-8 md:px-10 rounded-[36px] text-white font-semibold text-lg
                       disabled:opacity-60 disabled:cursor-not-allowed
                       bg-[linear-gradient(180deg,#FF9C33_0%,#D16B11_100%)]
                       shadow-[0_8px_24px_rgba(209,107,17,0.45)]'>
            {isSubmitting ? t("signing") : t("cta")}
          </button>
        </div>

        {/* Topic checkboxes */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center text-left max-w-[560px] mx-auto'>
          <TopicBox
            label={t("news")}
            checked={topics.news}
            onChange={() => toggle("news")}
          />
          <TopicBox
            label={t("market")}
            checked={topics.market}
            onChange={() => toggle("market")}
          />
          <TopicBox
            label={t("funds")}
            checked={topics.funds}
            onChange={() => toggle("funds")}
          />
        </div>
      </div>
    </section>
  )
}

/** Minimal custom checkbox to match the square outline style */
function TopicBox({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      className='inline-flex items-center gap-3 cursor-pointer select-none text-[#C7CFDB]'
      onClick={onChange}>
      <span
        className={`size-4 rounded-[4px] border-2 ${
          checked ? "border-white bg-white" : "border-[#8C94A3] bg-transparent"
        }`}
        role='checkbox'
        aria-checked={checked}
      />
      <span className='text-base'>{label}</span>
    </label>
  )
}
