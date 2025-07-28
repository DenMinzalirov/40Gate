'use client'

import { useEffect, useRef } from 'react'

const Temp3 = () => {
    const stackCardsRef = useRef<HTMLUListElement>(null)

    const blocks = [
        { color: 'bg-red-500', name: 'Красный' },
        { color: 'bg-blue-500', name: 'Синий' },
        { color: 'bg-green-500', name: 'Зеленый' },
        { color: 'bg-yellow-500', name: 'Желтый' }
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
            const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')))
            const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')))
            const windowHeight = window.innerHeight

            // Установка padding для контейнера
            element.style.paddingBottom = (marginY * (items.length - 1)) + 'px'

            // Установка начальных позиций карточек
            for (let i = 0; i < items.length; i++) {
                (items[i] as HTMLElement).style.transform = `translateY(${marginY * i}px)`
            }

            return { marginY, elementHeight, cardTop, cardHeight, windowHeight }
        }

        // Анимация карточек
        const animateStackCards = () => {
            const { marginY, elementHeight, cardTop, cardHeight, windowHeight } = setStackCards()
            const top = element.getBoundingClientRect().top

            if (cardTop - top + windowHeight - elementHeight - cardHeight + marginY + marginY * items.length > 0) {
                scrolling = false
                return
            }

            for (let i = 0; i < items.length; i++) {
                const scrollingDistance = cardTop - top - i * (cardHeight + marginY)
                if (scrollingDistance > 0) {
                    ; (items[i] as HTMLElement).style.transform = `translateY(${marginY * i}px)`
                } else {
                    ; (items[i] as HTMLElement).style.transform = `translateY(${marginY * i}px)`
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
        <section className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                {/* Текстовый блок для заполнения пустого пространства */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-6 sm:gap-0" style={{ position: 'sticky', top: 0 }}>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full sm:max-w-[925px] gap-6 sm:gap-[30px]">
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
                                <circle cx="6.25" cy="7" r="6.25" fill="#6044FF" />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                For merchants
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:max-w-[1067px] text-3xl sm:text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                                AI-powered tools to scale your business — from smart cascading to chargeback prevention.
                                Modern payment infrastructure built with machine learning created for global growth.
                            </p>
                        </div>
                    </div>
                    {/* Номер - только для десктопа */}
                    <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-[55px] text-left text-[#6044ff] font-tinos">
                        (01)
                    </p>
                </div>

                <ul ref={stackCardsRef} className="stack-cards js-stack-cards">
                    {blocks.map((block, index) => (
                        <li
                            key={index}
                            className={`stack-cards__item js-stack-cards__item ${block.color} rounded-lg shadow-lg`}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <p className="text-white text-2xl font-bold">
                                    {block.name} блок
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Temp3 