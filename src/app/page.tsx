import Hero from '@/components/Hero'
import MerchantsSection from '@/components/MerchantsSection'
import PartnerWithUs from '@/components/PartnerWithUs'
import CustomPaymentSolutions from '@/components/CustomPaymentSolutions'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      {/* <MerchantAnimationCards /> */}
      {/* <Temp2 /> */}
      <MerchantsSection />
      <PartnerWithUs />
      <CustomPaymentSolutions />
    </main>
  )
}
