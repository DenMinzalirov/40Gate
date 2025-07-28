import Hero from '@/components/Hero'
import PartnerWithUs from '@/components/PartnerWithUs'
import CustomPaymentSolutions from '@/components/CustomPaymentSolutions'
import MerchantsSection from '@/components/MerchantsSection'
import AboutUs from '@/components/AboutUs'
import TheGate from '@/components/TheGate'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MerchantsSection />
      <PartnerWithUs />
      <CustomPaymentSolutions />
      <AboutUs />
      <TheGate />
    </main>
  )
}
