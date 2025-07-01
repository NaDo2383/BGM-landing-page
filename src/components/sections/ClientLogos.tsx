"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function ClientLogos() {
  const logos = Array.from({ length: 12 }).map((_, i) => ({
    src: `/partners/${(i % 6) + 1}.png`,
  }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (emblaApi) emblaApi.reInit()
  }, [emblaApi])

  return (
    <section className='py-16 bg-[#020618] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Embla viewport */}
        <div className='overflow-hidden' ref={emblaRef}>
          {/* Embla container */}
          <div className='flex space-x-8'>
            {logos.map((logo, idx) => (
              <div key={idx} className='flex-none w-48'>
                <div className='flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300'>
                  <img
                    src={logo.src}
                    alt={`Client Logo ${idx + 1}`}
                    className='h-full w-auto object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
