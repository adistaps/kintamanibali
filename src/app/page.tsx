import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import WhyUs from "@/components/sections/WhyUs"
import Pricing from "@/components/sections/Pricing"
import Schedule from "@/components/sections/Schedule"
import TripFlow from "@/components/sections/TripFlow"
import Gallery from "@/components/sections/Gallery"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/sections/Footer"

import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <WhyUs />
        <Schedule />
        <TripFlow />
        <Gallery />
        <FAQ />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}