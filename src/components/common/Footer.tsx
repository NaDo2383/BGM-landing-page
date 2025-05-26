"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"

export default function Footer() {
  const t = useTranslations("footer")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // For now, just simulate subscription
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setEmail("")
      alert("Successfully subscribed!")
    } catch (error) {
      console.error("Error subscribing:", error)
      alert("Error subscribing. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className='bg-gray-900 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-3xl font-bold text-white mb-4'>{t("newsletter")}</h3>
            <form onSubmit={handleSubscribe} className='flex gap-4'>
              <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='flex-1'
              />
              <Button type='submit' disabled={loading}>
                {loading ? "Subscribing..." : t("subscribe")}
              </Button>
            </form>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h4 className='text-white font-semibold mb-4'>About Us</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white transition'>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white transition'>
                    Team
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white transition'>
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Contact</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white transition'>
                    info@bgm.com
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white transition'>
                    +976 11 123456
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white transition'>
                    Ulaanbaatar, Mongolia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>&copy; 2024 BGM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
