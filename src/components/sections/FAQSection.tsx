"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQSection() {
  const t = useTranslations("faq")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is BGM?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How can I get started?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What services do you offer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <section className='py-24 bg-gray-900'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-white text-center mb-16'>{t("title")}</h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-gray-800 rounded-lg overflow-hidden'>
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors'>
                <span className='text-white font-medium'>{faq.question}</span>
                <span className='text-2xl text-gray-400'>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'>
                    <div className='px-6 pb-4 text-gray-400'>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
