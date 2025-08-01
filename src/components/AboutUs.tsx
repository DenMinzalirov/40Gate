'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const AboutUs = () => {
    const number1Ref = useRef<HTMLDivElement>(null)
    const number2Ref = useRef<HTMLDivElement>(null)
    const number3Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Функция для создания анимации счетчика
        const createCounterAnimation = (element: HTMLElement, targetValue: number, suffix: string = '+', delay: number = 0) => {
            const startValue = 0
            const duration = 2

            // Создаем объект для хранения текущего значения
            const obj = { value: startValue }

            gsap.fromTo(obj,
                { value: startValue },
                {
                    value: targetValue,
                    duration: duration,
                    delay: delay,
                    ease: 'power2.out',
                    onUpdate: function () {
                        const currentValue = Math.floor(obj.value)
                        element.innerHTML = `${currentValue}${suffix}`
                    },
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }

        // Анимация для первого числа (1000+)
        if (number1Ref.current) {
            createCounterAnimation(number1Ref.current, 1000, '+', 0)
        }

        // Анимация для второго числа (300+)
        if (number2Ref.current) {
            createCounterAnimation(number2Ref.current, 300, '+', 0.5)
        }

        // Анимация для третьего числа (30+)
        if (number3Ref.current) {
            createCounterAnimation(number3Ref.current, 30, '+', 1)
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section id="about-us" className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[100px]">
                    {/* Заголовок секции */}
                    <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full sm:w-[925px] gap-[30px]">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                <div className="w-3 h-3 rounded-full bg-[#0008D4]"></div>
                                <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-2xl text-left text-[#1e1e1e]">
                                    About us
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                                <p className="flex-grow-0 flex-shrink-0 w-full sm:w-[905.6px] text-3xl sm:text-[55px] text-left text-[#1e1e1e] font-tinos">
                                    40Gate — sounds like &ldquo;Fortune&rdquo; for a reason. Over 40 (actually close to 100) providers onboard.
                                </p>
                            </div>
                        </div>
                        {/* Номер секции - только для десктопа */}
                        <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-3xl sm:text-[55px] text-left text-[#0008D4] font-tinos">
                            (04)
                        </p>
                    </div>

                    {/* Статистика */}
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[30px] sm:gap-[85px]">
                        {/* Первая статистика - 1000+ */}
                        <div className="flex flex-wrap justify-between items-end w-full">
                            <div ref={number1Ref} className="h-[180px] text-[120px] sm:text-[261.7px] text-left text-[#0008D4] font-tinos leading-none flex items-center">
                                1000+
                            </div>
                            <div className="h-[92px] min-w-[335px] hidden sm:block">
                                <div className="flex flex-row justify-start items-center">
                                    <div className="w-[100.1px] h-[1px] bg-[#1e1e1e] mr-[25px] min-w-[100px]"></div>
                                    <p className="text-[40px] text-[#1e1e1e] font-tinos">
                                        Merchants
                                    </p>
                                </div>
                                <p className="text-[40px] text-[#1e1e1e] font-tinos">
                                    already with us
                                </p>
                            </div>
                            <div className="min-w-[335px] block sm:hidden text-xl">Merchants already with us</div>
                        </div>

                        {/* Разделительная линия */}
                        <div className="w-full">
                            <svg width="100%" height="2">
                                <defs>
                                    <pattern id="dash" patternUnits="userSpaceOnUse" width="20" height="2">
                                        <line x1="0" y1="1" x2="10" y2="1" stroke="#000" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="2" fill="url(#dash)" />
                            </svg>
                        </div>

                        {/* Вторая статистика - 300+ */}
                        <div className="flex flex-wrap justify-between items-end w-full">
                            <div ref={number2Ref} className="h-[180px] text-[120px] sm:text-[261.7px] text-left text-[#0008D4] font-tinos leading-none flex items-center">
                                300+
                            </div>
                            <div className="h-[92px] min-w-[335px] hidden sm:block">
                                <div className="flex flex-row justify-start items-center">
                                    <div className="w-[100.1px] h-[1px] bg-[#1e1e1e] mr-[25px] min-w-[100px]"></div>
                                    <p className="text-[40px] text-[#1e1e1e] font-tinos">
                                        Any fiat
                                    </p>
                                </div>
                                <p className="text-[40px] text-[#1e1e1e] font-tinos">
                                    and cryptocurrencies
                                </p>
                            </div>
                            <div className="min-w-[335px] block sm:hidden text-xl">Any fiat & crypto</div>
                        </div>

                        {/* Разделительная линия */}
                        <div className="w-full">
                            <svg width="100%" height="2">
                                <defs>
                                    <pattern id="dash" patternUnits="userSpaceOnUse" width="20" height="2">
                                        <line x1="0" y1="1" x2="10" y2="1" stroke="#000" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="2" fill="url(#dash)" />
                            </svg>
                        </div>

                        {/* Третья статистика - 30+ */}
                        <div className="flex flex-wrap justify-between items-end w-full">
                            <div ref={number3Ref} className="h-[180px] text-[120px] sm:text-[261.7px] text-left text-[#0008D4] font-tinos leading-none flex items-center">
                                30+
                            </div>
                            <div className="h-[92px] min-w-[335px] hidden sm:block">
                                <div className="flex flex-row justify-start items-center">
                                    <div className="w-[100.1px] h-[1px] bg-[#1e1e1e] mr-[25px] min-w-[100px]"></div>
                                    <p className="text-[40px] text-[#1e1e1e] font-tinos">
                                        Available
                                    </p>
                                </div>
                                <p className="text-[40px] text-[#1e1e1e] font-tinos">
                                    payment methods
                                </p>
                            </div>
                            <div className="min-w-[335px] block sm:hidden text-xl">Available payment methods</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs 