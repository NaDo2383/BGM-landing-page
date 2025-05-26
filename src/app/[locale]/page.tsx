import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ClientLogos from "@/components/sections/ClientLogos"
import StatsSection from "@/components/sections/StatsSection"
import CapabilitiesSection from "@/components/sections/CapabilitiesSection"
import NewsSection from "@/components/sections/NewsSection"
import TeamSection from "@/components/sections/TeamSection"
import FAQSection from "@/components/sections/FAQSection"

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-900'>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <CapabilitiesSection />
      <NewsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
