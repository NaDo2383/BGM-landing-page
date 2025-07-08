import HeroSection from "@/components/sections/HeroSection"
import ClientLogos from "@/components/sections/ClientLogos"
import StatsSection from "@/components/sections/StatsSection"
import CapabilitiesSection from "@/components/sections/CapabilitiesSection"
import NewsSection from "@/components/sections/NewsSection"
import TeamSection from "@/components/sections/TeamSection"
import FAQSection from "@/components/sections/FAQSection"
import AboutUs from "@/components/sections/AboutUs"
import ContactUsForm from "@/components/sections/ContactUsForm"

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-900'>
      <HeroSection />
      <ClientLogos />
      <AboutUs />
      <StatsSection />
      <CapabilitiesSection />
      <NewsSection />
      <TeamSection />
      <FAQSection />
      <ContactUsForm />
    </main>
  )
}
