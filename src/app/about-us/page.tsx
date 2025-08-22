import ContactUsForm from "@/components/sections/ContactUsForm"
import React from "react"
import OrgChart from "@/components/chart/OrgChart"
import AboutUsPage from "@/components/about-us/AboutUsPage"

const page = () => {
  return (
    <>
      <AboutUsPage />
      <OrgChart />
      <ContactUsForm />
    </>
  )
}

export default page
