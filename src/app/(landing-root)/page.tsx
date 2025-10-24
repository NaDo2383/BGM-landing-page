import AboutUs from "@/components/sections/AboutUs"
import CapabilitiesSection from "@/components/sections/CapabilitiesSection"
import ClientLogos from "@/components/sections/ClientLogos"
import ContactUsForm from "@/components/sections/ContactUsForm"
import FAQSection from "@/components/sections/FAQSection"
import HeroSection from "@/components/sections/HeroSection"
import NewsSection from "@/components/sections/NewsSection"
import WhatWeDo from "@/components/sections/WhatWeDo"

export default function Page() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <AboutUs imageColoredBg />
      <WhatWeDo />
      <CapabilitiesSection />
      <NewsSection />
      <ContactUsForm />
      <FAQSection />
    </>
  )
}
