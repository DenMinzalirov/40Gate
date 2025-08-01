'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import MerchantsSectionCard from './MerchantsSectionCard'

const MerchantsSection = () => {
    const stackCardsRef = useRef<HTMLUListElement>(null)

    const blocks = [
        {
            number: "(01)",
            title: "Payment Methods",
            description: "From crypto to local bank transfers - we support 300+ payment methods to ensure your customers always find a way to pay.",
            image: "/payment-methods.png",
            bgColor: "bg-[#F2F4F3]",
            textColor: "text-[#1E1E1E]",
            imageHeight: 314,
            mobileImageHeight: 210
        },
        {
            number: "(02)",
            title: "Payment Orchestration",
            description: "From crypto to local bank transfers - we support 300+ payment methods to ensure your customers always find a way to pay.",
            image: "/payment-orchestration.png",
            bgColor: "bg-[#0008D4]",
            textColor: "text-[#F2F4F3]",
            imageHeight: 314,
            mobileImageHeight: 221
        },
        {
            number: "(03)",
            title: "Chargeback Prevention",
            description: "Reduce risk and retain revenue with proactive chargeback management. We help identify patterns, prevent disputes, and guide you with best practices to keep chargebacks under control.",
            image: "/chargeback-prevention.png",
            bgColor: "bg-[#1E1E1E]",
            textColor: "text-[#FFFFFF]",
            imageHeight: 325,
            mobileImageHeight: 221
        },
        {
            number: "(04)",
            title: "Fraud Monitoring",
            description: "Stay protected with real-time fraud detection powered by machine learning. Our system flags suspicious activity early-helping you prevent losses without blocking legitimate customers.",
            image: "/fraud-monitoring.png",
            bgColor: "bg-[#F2F4F3]",
            textColor: "text-[#1E1E1E]",
            imageHeight: 313,
            mobileImageHeight: 218
        }
    ]

    useEffect(() => {
        if (!stackCardsRef.current) return

        const element = stackCardsRef.current

        const items = element.getElementsByClassName('js-stack-cards__item')
        let scrollingFn: (() => void) | false = false
        let scrolling = false

        // Сохранение CSS свойств карточек
        const setStackCards = () => {
            const marginY = 24 // gap между карточками в px
            const elementHeight = element.offsetHeight
            const cardStyle = getComputedStyle(items[0] as Element)
            // Получаем актуальное значение top из стилей карточки
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top'))) || 200
            // console.log({ cardTop })
            const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')))
            const windowHeight = window.innerHeight

            // Линия начала анимации - можно настроить
            const animationStartLine = cardTop + 600 // смещаем на 300px ниже sticky позиции
            // console.log({ animationStartLine })
            // Логирование координаты нижней границы текстового блока
            // const textBlock = document.getElementById('text-block') as HTMLElement
            // if (textBlock) {
            //     const textBlockRect = textBlock.getBoundingClientRect()
            //     const textBlockBottom = textBlockRect.bottom
            //     console.log('Text block bottom coordinate:', textBlockBottom)
            //     console.log('Text block rect:', textBlockRect)
            // }

            // Установка padding для контейнера
            element.style.paddingBottom = (marginY * (items.length - 1)) + 'px'

            // Установка начальных позиций карточек
            for (let i = 0; i < items.length; i++) {
                (items[i] as HTMLElement).style.transform = `translateY(${marginY * i}px)`
            }

            return { marginY, elementHeight, cardTop, cardHeight, windowHeight, animationStartLine }
        }

        // Анимация карточек
        const animateStackCards = () => {
            const { marginY, elementHeight, cardTop, cardHeight, windowHeight, animationStartLine } = setStackCards()
            // console.log({cardTop, cardHeight, windowHeight, elementHeight, marginY});

            const top = element.getBoundingClientRect().top
            // console.log('Element top position:', top, 'Animation start line:', animationStartLine)

            // Логируем когда блок прилипает к верху
            if (top <= 200) {
                console.log('🚀 Блок прилип к верху! top =', top)
            }

            // Логируем позицию текстового блока
            const textBlock = document.getElementById('text-block') as HTMLElement
            if (textBlock) {
                const textBlockRect = textBlock.getBoundingClientRect()
                const textBlockTop = textBlockRect.top
                // console.log('📝 Text block top position:', textBlockTop)

                // Когда текстовый блок достиг верхней границы браузера
                if (textBlockTop <= 0) {
                    const textBlockHeight = textBlockRect.height + 100
                    // console.log('🎯 Текстовый блок достиг верхней границы браузера!')
                    // console.log('📏 Полная высота текстового блока:', textBlockHeight, 'px')
                    // console.log('📍 Позиция top:', textBlockTop, 'px')

                    // Устанавливаем высоту текстового блока как top для карточек
                    for (let i = 0; i < items.length; i++) {
                        // Устанавливаем top в зависимости от размера экрана
                        const isMobile = window.innerWidth <= 640
                        const topValue = isMobile ? 30 : textBlockHeight
                            ; (items[i] as HTMLElement).style.top = `${topValue}px`
                    }
                    console.log('🎯 Установлен top для карточек:', textBlockHeight, 'px')
                }
            }

            if (animationStartLine - top + windowHeight - elementHeight - cardHeight + marginY + marginY * items.length > 0) {
                scrolling = false
                return
            }

            for (let i = 0; i < items.length; i++) {
                const scrollingDistance = animationStartLine - top - i * (cardHeight + marginY)

                if (scrollingDistance > 0) {
                    // Карточка еще не достигла линии анимации - остается в исходной позиции
                    ; (items[i] as HTMLElement).style.transform = `translateY(0px)`
                    // console.log(`📌 Карточка ${i}: еще не достигла линии анимации, scrollingDistance = ${scrollingDistance}`)
                } else {
                    // Карточка достигла линии анимации - перемещается в позицию стекирования
                    ; (items[i] as HTMLElement).style.transform = `translateY(${marginY * i}px)`
                    // console.log(`🎯 Карточка ${i}: достигла линии анимации, перемещается в позицию ${marginY * i}px`)

                    // Логируем видимую часть карточки
                    // const cardRect = (items[i] as HTMLElement).getBoundingClientRect()
                    // const visibleHeight = Math.min(cardRect.bottom, window.innerHeight) - Math.max(cardRect.top, 0)
                    // console.log(`👁️ Карточка ${i}: видимая высота = ${visibleHeight}px, top = ${cardRect.top}, bottom = ${cardRect.bottom}`)
                }
            }
            scrolling = false
        }

        // Обработчик скролла
        const stackCardsScrolling = () => {
            if (scrolling) return
            scrolling = true
            requestAnimationFrame(animateStackCards)
        }

        // Intersection Observer для оптимизации
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (scrollingFn) return
                scrollingFn = stackCardsScrolling
                window.addEventListener('scroll', scrollingFn)
            } else {
                if (!scrollingFn) return
                window.removeEventListener('scroll', scrollingFn)
                scrollingFn = false
            }
        }, { threshold: [0, 1] })

        observer.observe(element)

        // Обработчик resize
        const handleResize = () => {
            setStackCards()
            animateStackCards()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', handleResize)
            if (scrollingFn) {
                window.removeEventListener('scroll', scrollingFn)
            }
        }
    }, [])

    return (
        <section id="merchants-section" className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                {/* Текстовый блок для заполнения пустого пространства */}
                <div
                    id="text-block"
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-end self-stretch flex-grow-0 relative gap-6 sm:gap-0 mb-[100px] sm:sticky sm:-top-10"
                >
                    <div className="flex flex-col justify-start items-start flex-grow-0 w-full gap-6 sm:gap-[30px]">
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                            {/* SVG иконка - адаптивная */}
                            <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 sm:w-[14px] sm:h-[14px]"
                                preserveAspectRatio="none"
                            >
                                <circle cx="6.25" cy="7" r="6.25" fill="#0008D4" />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                For merchants
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 relative gap-3.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:max-w-[1067px] text-3xl sm:text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                                AI-powered tools to scale your business — from smart cascading to chargeback prevention.
                                Modern payment infrastructure built with machine learning created for global growth.
                            </p>
                        </div>
                    </div>
                    {/* Номер - только для десктопа */}
                    <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-[55px] text-left text-[#0008D4] font-tinos">
                        (01)
                    </p>
                </div>

                <ul ref={stackCardsRef} className="stack-cards js-stack-cards">
                    {blocks.map((block, index) => {
                        return <li
                            key={index}
                            className={`stack-cards__item js-stack-cards__item`}
                        >
                            <MerchantsSectionCard
                                number={block.number}
                                title={block.title}
                                description={block.description}
                                image={<Image
                                    src={block.image}
                                    alt={block.title}
                                    width={224}
                                    height={214}
                                    className="flex-grow-0 flex-shrink-0 sm:min-w-[324px] min-w-[214px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                                />}
                                bgColor={block.bgColor}
                                textColor={block.textColor}
                            />
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default MerchantsSection 