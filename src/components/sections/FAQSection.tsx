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
    <section className='p-[100px] bg-[#020618] '>
      <div className='max-w-7xl flex gap-[196px] mx-auto'>
        <div className='text-white text-[40px] capitalize font-[Roboto] leading-tight'>
          <span className=' whitespace-pre'>{t("title1")}</span>{" "}
          <span className='text-[#F1573F]'>{t("title2")}</span>
        </div>
        <div className='max-w-3xl mx-auto w-full px-4'>
          <div className=''>
            {faqs.map((faq, index) => (
              <div key={index} className='bg-[#020618] overflow-hidden  '>
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`w-full p-[25px]  text-left flex justify-between items-center  transition-colors ${
                    activeIndex === index
                      ? "bg-[#0F172B]"
                      : "border-b border-b-[#314158] hover:bg-gray-700"
                  }`}>
                  <span className='text-white font-medium'>{faq.question}</span>
                  <span className='text-2xl text-gray-400'>
                    {activeIndex === index ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'>
                        <path
                          d='M19.1471 18.4889C19.2024 18.5404 19.2467 18.6025 19.2775 18.6715C19.3082 18.7405 19.3248 18.8149 19.3261 18.8905C19.3274 18.966 19.3135 19.041 19.2852 19.1111C19.2569 19.1811 19.2148 19.2447 19.1614 19.2981C19.108 19.3516 19.0444 19.3937 18.9743 19.422C18.9043 19.4502 18.8293 19.4641 18.7537 19.4628C18.6782 19.4615 18.6037 19.4449 18.5347 19.4142C18.4657 19.3835 18.4036 19.3391 18.3521 19.2839L11.9996 12.9323L5.64714 19.2839C5.54051 19.3832 5.39947 19.4373 5.25375 19.4347C5.10802 19.4322 4.96898 19.3731 4.86592 19.2701C4.76286 19.167 4.70383 19.028 4.70126 18.8823C4.69869 18.7365 4.75278 18.5955 4.85214 18.4889L11.2037 12.1364L4.85214 5.78386C4.75278 5.67723 4.69869 5.53619 4.70126 5.39047C4.70383 5.24474 4.76286 5.1057 4.86592 5.00264C4.96898 4.89958 5.10802 4.84055 5.25375 4.83798C5.39947 4.83541 5.54051 4.8895 5.64714 4.98886L11.9996 11.3404L18.3521 4.98886C18.4588 4.8895 18.5998 4.83541 18.7455 4.83798C18.8913 4.84055 19.0303 4.89958 19.1334 5.00264C19.2364 5.1057 19.2955 5.24474 19.298 5.39047C19.3006 5.53619 19.2465 5.67723 19.1471 5.78386L12.7956 12.1364L19.1471 18.4889Z'
                          fill='white'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'>
                        <path
                          d='M20.031 9.66776L12.531 17.1678C12.4614 17.2375 12.3787 17.2928 12.2876 17.3306C12.1966 17.3683 12.099 17.3877 12.0004 17.3877C11.9019 17.3877 11.8043 17.3683 11.7132 17.3306C11.6222 17.2928 11.5394 17.2375 11.4698 17.1678L3.96979 9.66776C3.82906 9.52703 3.75 9.33616 3.75 9.13714C3.75 8.93811 3.82906 8.74724 3.96979 8.60651C4.11052 8.46578 4.30139 8.38672 4.50042 8.38672C4.69944 8.38672 4.89031 8.46578 5.03104 8.60651L12.0004 15.5768L18.9698 8.60651C19.0395 8.53683 19.1222 8.48155 19.2132 8.44384C19.3043 8.40613 19.4019 8.38672 19.5004 8.38672C19.599 8.38672 19.6965 8.40613 19.7876 8.44384C19.8786 8.48155 19.9614 8.53683 20.031 8.60651C20.1007 8.67619 20.156 8.75892 20.1937 8.84996C20.2314 8.94101 20.2508 9.03859 20.2508 9.13714C20.2508 9.23568 20.2314 9.33326 20.1937 9.42431C20.156 9.51535 20.1007 9.59808 20.031 9.66776Z'
                          fill='white'
                        />
                      </svg>
                    )}
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
                      <div className='p-[25px] bg-[#0F172B] text-white text-[16px] relative transition-all duration-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#F1573F] after:to-[#3F61F1]'>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
