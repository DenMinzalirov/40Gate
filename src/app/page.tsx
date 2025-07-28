import Hero from '@/components/Hero'
import MerchantsSection from '@/components/MerchantsSection'
import PartnerWithUs from '@/components/PartnerWithUs'
import CustomPaymentSolutions from '@/components/CustomPaymentSolutions'
import Temp3 from '@/components/Temp3'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      {/* <Temp2 /> */}
      <Temp3 />
      <MerchantsSection />
      <PartnerWithUs />
      <CustomPaymentSolutions />
    </main>
  )
}
