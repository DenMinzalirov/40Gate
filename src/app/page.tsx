import Hero from '@/components/Hero'
import MerchantsSection from '@/components/MerchantsSection'
import MerchantAnimationCards from '@/components/MerchantAnimationCards'
import Temp2 from '@/components/Temp2'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      {/* <MerchantAnimationCards /> */}
      {/* <Temp2 /> */}
      <MerchantsSection />
    </main>
  )
}
