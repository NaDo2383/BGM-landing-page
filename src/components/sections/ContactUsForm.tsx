"use client"

import React, { useState } from "react"
import { ArrowBtn } from "../ui/ArrowBtn"
import { useTranslations } from "next-intl"
import axios from "axios"

export default function ContactUsForm() {
  const t = useTranslations("contactUs")
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await axios.post("/api/contact-us", form)
      alert("Message sent!")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error(err)
      alert("Failed to send")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact-us' className='bg-[#050B1A] py-10 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-stretch rounded-md overflow-hidden'>
        {/* Left Side - Image + Title */}
        <div
          className='w-full md:w-1/2 relative bg-cover bg-center py-[50px] px-[30px]'
          style={{ backgroundImage: `url("/about-us-card-image.png")` }}>
          <div className='text-white font-[Roboto] text-[40px] not-italic font-bold leading-none uppercase'>
            {t("contactUs")}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className='w-full md:w-1/2 bg-[#121C2E] p-6 flex flex-col justify-center gap-[30px] rounded-md'>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col md:flex-row gap-[20px]'>
              <input
                name='name'
                value={form.name}
                type='text'
                onChange={handleChange}
                placeholder={t("name")}
                className='w-full md:w-1/2 rounded-[24px] bg-[#1B2B44] text-white px-4 py-2 outline-none placeholder:text-[#8CA3BA]'
              />
              <input
                name='email'
                value={form.email}
                type='email'
                onChange={handleChange}
                placeholder={t("email")}
                className='w-full md:w-1/2 rounded-[24px] bg-[#1B2B44] text-white px-4 py-2 outline-none placeholder:text-[#8CA3BA]'
              />
            </div>
            <textarea
              name='message'
              value={form.message}
              placeholder={t("msg")}
              onChange={handleChange}
              className='rounded-[24px] bg-[#1B2B44] text-white px-4 py-3 h-32 resize-none outline-none placeholder:text-[#8CA3BA]'
            />
          </div>

          <ArrowBtn
            onClick={handleSubmit}
            arrowBg='black'
            className='self-start mt-2 disabled:opacity-50'
            disabled={isSubmitting}>
            {isSubmitting ? t("sending") || "Sending..." : t("contactUs")}
          </ArrowBtn>
        </div>
      </div>
    </section>
  )
}
