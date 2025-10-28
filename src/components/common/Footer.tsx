"use client"

import { Phone, Mail } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { FaMapMarkerAlt } from "react-icons/fa"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <div className='bg-[url("/footer-gradiant.png")] bg-cover bg-center font-[norms-pro] text-white'>
      <footer className='relative text-white pt-16 pb-5 px-6 md:px-12 overflow-hidden'>
        {/* Main Content */}
        <div className='relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12'>
          {/* Left Column */}
          <div className=' flex flex-col justify-between max-w-[190px]'>
            <Image src={"/bgm_logo.png"} alt='Logo' width={188} height={40} />
            {/* Social Icons */}
            <div className='flex gap-3 mt-4'>
              {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
                <div
                  key={i}
                  className='w-[50px] h-[50px] rounded-full bg-[linear-gradient(180deg,#FFBD80_0%,#E46F03_50.48%,#E46F03_100%)] flex items-center justify-center hover:scale-110 transition'>
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          <div className='w-full max-w-[650px] flex gap-[60px]'>
            <div className='flex flex-col gap-4'>
              <div className='font-bold text-sm font-inter'>{t("links")}</div>
              <div>{t("terms-of-service")}</div>
              <div>{t("privacy-policy")}</div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='font-bold text-sm font-inter'>{t("pages")}</div>
              <Link href={"/about-us"}>
                <div>{t("about-us")}</div>
              </Link>
              <Link href={"/asset-management"}>
                <div>{t("asset-management")}</div>
              </Link>
              <Link href={"/careers"}>
                <div>{t("career")}</div>
              </Link>
              <Link href='/news-Insight'>
                <div>{t("news-insights")}</div>
              </Link>
            </div>
            <div className='  flex flex-col gap-4'>
              <div className='font-bold text-sm font-inter'>{t("contact")}</div>
              <div className='flex items-start gap-3'>
                <div className='pt-1'>
                  <FaMapMarkerAlt className='text-[#ef7a0b]' size={18} />
                </div>
                <p className=' whitespace-pre text-sm'>{t("address")}</p>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='text-[#ef7a0b]' size={18} />
                <p className='text-sm'>+976 7775-2050</p>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='text-[#ef7a0b]' size={18} />
                <p className='text-sm'>info@balancedgrowth.mn</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-[#242424] mx-auto text-sm text-gray-500 mt-12 relative z-10 text-left'>
        <div className='max-w-7xl mx-auto h-9 flex items-center'>
          © {new Date().getFullYear()}
          {t("reserved")}
        </div>
      </div>
    </div>
  )
}
