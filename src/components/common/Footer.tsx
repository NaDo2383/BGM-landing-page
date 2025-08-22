"use client"

import { Phone, Mail } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { FaMapMarkerAlt } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className='relative bg-[#050B1A] text-white pt-16 pb-5 px-6 md:px-12 overflow-hidden'>
      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12'>
        {/* Left Column */}
        <div className='md:w-1/4 flex flex-col justify-between'>
          <Image src={"/bgm_logo.png"} alt='Logo' width={188} height={40} />
          <div className=' flex flex-col gap-[20px]'>
            <h2 className='text-xl font-bold leading-snug'>
              BALANCED GROWTH
              <br />
              MANAGEMENT
            </h2>
            <p className='text-gray-400 mt-3 leading-relaxed'>
              Lorem Ipsum Dolor Sit Amet,
              <br />
              Consectetur Adipisicing Elit.
            </p>
          </div>
        </div>

        {/* Center Navigation */}
        <div className=' text-sm text-gray-400'>
          <div className='flex w-full gap-[30px]'>
            <div className='flex flex-col w-full gap-[30px]'>
              <div>
                <h4 className='text-white font-medium mb-2'>About Us</h4>
                <ul className='space-y-1'>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>Our Company</li>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>
                    Company Structure
                  </li>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>
                    XOMK Structure
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-white font-medium mb-2'>News & Insight</h4>
                <ul className='space-y-1'>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>
                    News & Fund Announcement
                  </li>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>
                    Monthly Report
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col w-full gap-[30px]'>
              <div>
                <h4 className='text-white font-medium mb-2'>Asset Management</h4>
                <ul className='space-y-1'>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>
                    Fixed Income Fund
                  </li>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>
                    Real Estate Fund
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-white font-medium mb-2'>Career</h4>
                <ul className='space-y-1'>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>Life BGM</li>
                  <li className=' capitalize text-[16px] text-[#90A1B9]'>Join Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='md:w-1/4 flex flex-col gap-4 text-sm text-gray-300'>
          <div className='flex items-start gap-3'>
            <FaMapMarkerAlt className='text-[#F1573F]' size={18} />
            <p>
              Улаанбаатар хот, СБД, 8-р хороо,
              <br />
              Централ тауэр 4 давхар, 409 тоот
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <Phone className='text-[#F1573F]' size={18} />
            <p>+976 7777-0000</p>
          </div>
          <div className='flex items-center gap-3'>
            <Mail className='text-[#F1573F]' size={18} />
            <p>info@balancedgrowth.mn</p>
          </div>

          {/* Social Icons */}
          <div className='flex gap-3 mt-4'>
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
              <div
                key={i}
                className='w-9 h-9 rounded-full bg-white text-[#F1573F] flex items-center justify-center hover:scale-110 transition'>
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
        <div className='absolute bottom-[-21px] left-0 w-full h-[2px] bg-gradient-to-r from-[#F1573F] to-[#3F61F1] z-0' />
        <div className='absolute bottom-[-20px] right-0 w-40 h-40 border-b-2  border-[#3F61F1] rotate-135 translate-x-1/2 translate-y-1/2 z-10 bg-[#050b1b]' />
      </div>

      {/* Copyright - BELOW content, ABOVE gradient */}
      <div className='max-w-7xl mx-auto text-sm text-gray-500 mt-12 relative z-10 text-left'>
        © {new Date().getFullYear()} BGM. All rights reserved
      </div>

      {/* Gradient Line and Corner - Rendered at very bottom */}
    </footer>
  )
}
