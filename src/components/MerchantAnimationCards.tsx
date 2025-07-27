'use client'

import { useState, useEffect, useRef } from 'react'
import MerchantsSectionCard from './MerchantsSectionCard'
import Image from 'next/image'

const MerchantAnimationCards = () => {
    const [scrollY, setScrollY] = useState(0)
    const [blockHeights, setBlockHeights] = useState([424, 424, 424, 424])
    const blockRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const viewportHeight = window.innerHeight
        const isMobile = window.innerWidth < 640 // sm breakpoint

        // Адаптивные размеры
        const maxHeight = isMobile ? 549 : 424
        const minHeight = isMobile ? 25 : 40

        const newHeights = blockRefs.map((ref, index) => {
            if (!ref.current) return maxHeight

            // Зеленый блок (index 3) никогда не уменьшается
            if (index === 3) {
                return maxHeight
            }

            const rect = ref.current.getBoundingClientRect()
            const blockTop = rect.top + window.scrollY // Абсолютная позиция блока от верха страницы
            const scrollThreshold = blockTop - viewportHeight / 3 // Когда верх блока достигает середины экрана

            // Если блок еще не достиг середины экрана
            if (scrollY < scrollThreshold) {
                return maxHeight // Полная высота
            }

            // Если блок уже прошел анимацию
            const maxScroll = scrollThreshold + 250 // Максимальное расстояние скролла для анимации
            if (scrollY > maxScroll) {
                return minHeight // Минимальная высота
            }

            // Плавное изменение высоты во время анимации
            const progress = (scrollY - scrollThreshold) / (maxScroll - scrollThreshold)
            const heightDifference = maxHeight - minHeight
            return maxHeight - (progress * heightDifference) // От maxHeight до minHeight
        })

        setBlockHeights(newHeights)
    }, [scrollY])

    return (
        <div className="w-full">
            <div
                ref={blockRefs[0]}
                className="w-full bg-opacity-0 transition-all duration-100 ease-out"
                style={{ height: `${blockHeights[0]}px` }}
            >
                <MerchantsSectionCard
                    number="(01)"
                    title="Payment Methods"
                    description="From crypto to local bank transfers - we support 300+ payment methods to ensure your customers always find a way to pay."
                    image={<Image
                        src="/payment-methods.png"
                        alt="Payment Methods Illustration"
                        width={324}
                        height={314}
                        className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                    />}
                />
            </div>
            <div
                ref={blockRefs[1]}
                className="w-full bg-opacity-0 transition-all duration-100 ease-out"
                style={{ height: `${blockHeights[1]}px` }}
            ><MerchantsSectionCard
                    number="(02)"
                    title="Payment Orchestration"
                    description="From crypto to local bank transfers - we support 300+ payment methods to ensure your customers always find a way to pay."
                    image={<Image
                        src="/payment-orchestration.png"
                        alt="Payment Orchestration"
                        width={324}
                        height={314}
                        className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                    />}
                    bgColor="bg-[#6044FF]"
                    textColor="text-[#F2F4F3]"
                /></div>
            <div
                ref={blockRefs[2]}
                className="w-full bg-opacity-0 transition-all duration-100 ease-out"
                style={{ height: `${blockHeights[2]}px` }}
            ><MerchantsSectionCard
                    number="(03)"
                    title="Chargeback Prevention"
                    description="Reduce risk and retain revenue with proactive chargeback management. We help identify patterns, prevent disputes, and guide you with best practices to keep chargebacks under control."
                    image={<Image
                        src="/chargeback-prevention.png"
                        alt="Chargeback Prevention"
                        width={324}
                        height={314}
                        className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                    />}
                    bgColor="bg-[#1E1E1E]"
                    textColor="text-[#FFFFFF]"
                /></div>
            <div
                ref={blockRefs[3]}
                className="w-full bg-opacity-0 transition-all duration-100 ease-out"
                style={{ height: `${blockHeights[3]}px` }}
            ><MerchantsSectionCard
                    number="(04)"
                    title="Fraud Monitoring"
                    description="Stay protected with real-time fraud detection powered by machine learning. Our system flags suspicious activity early-helping you prevent losses without blocking legitimate customers."
                    image={<Image
                        src="/fraud-monitoring.png"
                        alt="Fraud Monitoring"
                        width={324}
                        height={314}
                        className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                    />}
                /></div>
        </div>
    )
}

export default MerchantAnimationCards 