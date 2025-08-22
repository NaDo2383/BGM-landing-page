"use client"

import { useEffect, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function ClientLogos() {
  const logos = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({ src: `/partners/${(i % 6) + 1}.png` })),
    []
  )

  // Configure autoplay once so we can reference it later
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 1500,
        stopOnInteraction: false,
        stopOnMouseEnter: true, // pause when hovered on desktop
      }),
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoplay]
  )

  useEffect(() => {
    if (!emblaApi) return

    // Re-init on resize for better sizing when breakpoints change
    const onResize = () => emblaApi.reInit()
    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [emblaApi])

  // Respect user reduced-motion preference: stop autoplay
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (m.matches) {
      autoplay.stop?.()
    }
  }, [autoplay])

  return (
    <section className='bg-[#020618] overflow-hidden py-10 sm:py-12 lg:py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        {/* Embla viewport */}
        <div
          ref={emblaRef}
          className='overflow-hidden'
          aria-label='Our clients and partners'
          // Edge fade with CSS mask (Safari uses WebKitMask)
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          }}>
          {/* Embla container */}
          <div className='flex space-x-4 sm:space-x-6 lg:space-x-10'>
            {logos.map((logo, idx) => (
              <div
                key={idx}
                // Slide width scales with breakpoints
                className='flex-none w-24 sm:w-36 md:w-44 lg:w-52 xl:w-56'
                aria-hidden='false'>
                <div className='flex h-full items-center justify-center'>
                  <img
                    src={logo.src}
                    alt={`Client Logo ${idx + 1}`}
                    // Constrain logo height responsively; scale width automatically
                    className='
                      h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain
                      grayscale md:hover:grayscale-0 transition-all duration-300
                    '
                    loading='lazy'
                    decoding='async'
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
