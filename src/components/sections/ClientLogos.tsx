"use client"

export default function ClientLogos() {
  const logos = [
    { name: "Client 1" },
    { name: "Client 2" },
    { name: "Client 3" },
    { name: "Client 4" },
    { name: "Client 5" },
    { name: "Client 6" },
  ]

  // Duplicate for seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <section className='py-16 bg-gray-800/50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='relative'>
          <div className='flex animate-scroll'>
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-48 mx-8 flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300'>
                <div className='h-12 w-24 bg-gray-700 rounded flex items-center justify-center'>
                  <span className='text-gray-500 text-sm'>{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
