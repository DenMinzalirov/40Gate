'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Регистрируем плагин ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const PartnerWithUs = () => {
    const router = useRouter()
    const textRef = useRef<HTMLParagraphElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const cursorRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const textElement = textRef.current
        const sectionElement = sectionRef.current

        if (!textElement || !sectionElement) return

        // Добавляем текст в элемент
        // Определяем текст в зависимости от размера экрана
        const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 640 : false
        const textContent = isMobile 
            ? "Whether you're a PSP, EMI, payment agent, or a MoR - if you're in the payments industry, we speak your language. Always open to partnerships that drive value and scale. Let's explore it."
            : "Whether you're a PSP, EMI, payment agent,<br /> or a MoR - if you're in the payments industry,<br /> we speak your language. Always open to partnerships<br /> that drive value and scale. Let's explore it."
        
        textElement.innerHTML = textContent

        // Разбиваем текст на символы с помощью SplitType
        const splitText = new SplitType(textElement, { types: 'chars' })
        const chars = splitText.chars

        // Устанавливаем начальное состояние
        gsap.set(chars, { opacity: 0.4 })

        // Создаем анимацию с ScrollTrigger
        gsap.to(chars, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.02, // Задержка между символами
            ease: "none",
            scrollTrigger: {
                trigger: sectionElement,
                start: "center center", // Начинаем когда центр секции достигает центра экрана
                end: "+=500", // Заканчиваем через 800px скролла
                scrub: 1, // Плавная анимация при скролле
                onUpdate: (self) => {
                    console.log('ScrollTrigger progress:', self.progress)
                }
            }
        })

        return () => {
            // Очищаем ScrollTrigger при размонтировании
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    // Кастомный курсор (только для десктопа)
    useEffect(() => {
        const cursor = cursorRef.current
        const section = sectionRef.current
        if (!cursor || !section) return

        // Проверяем, что это десктоп (ширина экрана > 640px)
        const isDesktop = window.innerWidth > 640

        if (!isDesktop) {
            // На мобильных устройствах скрываем курсор
            cursor.style.display = 'none'
            return
        }

        let isInSection = false
        let animationId: number

        const updateCursor = (e: MouseEvent) => {
            if (!isInSection) return

            // Используем requestAnimationFrame для плавности
            cancelAnimationFrame(animationId)
            animationId = requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX - 65}px, ${e.clientY - 65}px)`
            })
        }

        const handleMouseEnter = () => {
            isInSection = true
            cursor.classList.add('visible')
            section.style.cursor = 'none'
        }

        const handleMouseLeave = () => {
            isInSection = false
            cursor.classList.remove('visible')
            section.style.cursor = 'auto'
            cancelAnimationFrame(animationId)
        }

        // Обработчик изменения размера окна
        const handleResize = () => {
            const isDesktopNow = window.innerWidth > 640

            if (!isDesktopNow) {
                // Переключились на мобильный - скрываем курсор
                cursor.style.display = 'none'
                cursor.classList.remove('visible')
                section.style.cursor = 'auto'
                isInSection = false
                cancelAnimationFrame(animationId)
            } else {
                // Переключились на десктоп - показываем курсор
                cursor.style.display = 'flex'
            }
        }

        // Обработчики событий для секции
        section.addEventListener('mouseenter', handleMouseEnter)
        section.addEventListener('mouseleave', handleMouseLeave)
        section.addEventListener('mousemove', updateCursor, { passive: true })
        window.addEventListener('resize', handleResize)

        return () => {
            // Восстанавливаем стандартный курсор для секции
            section.style.cursor = 'auto'
            section.removeEventListener('mouseenter', handleMouseEnter)
            section.removeEventListener('mouseleave', handleMouseLeave)
            section.removeEventListener('mousemove', updateCursor)
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <>
            {/* Кастомный курсор */}
            <Link 
                href="/contact" 
                ref={cursorRef} 
                className="custom-cursor"
                onClick={(e) => e.stopPropagation()}
            >
                Contact Us
            </Link>

            <section 
                id="partner-with-us" 
                ref={sectionRef} 
                className="w-full pt-[120px] xl:pt-[200px] px-5 xl:px-10 cursor-pointer"
                onClick={() => router.push('/contact')}
            >
                <div className="w-full max-w-[1440px] mx-auto">
                    <div className="flex flex-col justify-center items-start xl:items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-8 xl:gap-[65px] py-6 xl:py-[50px]">
                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end self-stretch flex-grow-0 flex-shrink-0 gap-6 xl:gap-0">
                            <div className="flex flex-col justify-start items-start flex-grow gap-6 xl:gap-[30px]">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                    <svg
                                        width="13"
                                        height="14"
                                        viewBox="0 0 13 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-grow-0 flex-shrink-0 xl:w-[14px] xl:h-[14px]"
                                        preserveAspectRatio="none"
                                    >
                                        <circle cx="6.25" cy="7" r="6.25" fill="#0008D4" />
                                    </svg>
                                    <p className="flex-grow-0 flex-shrink-0 text-xl xl:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                        Partner With Us
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                                    <p ref={textRef} className="text-animation flex-grow-0 flex-shrink-0 w-full xl:max-w-[1189px] text-3xl xl:text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden xl:flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                            <p className="flex-grow-0 flex-shrink-0 w-full xl:max-w-[418px] opacity-80 text-lg xl:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                <span className="flex-grow-0 flex-shrink-0 w-full xl:max-w-[418px] opacity-80 text-lg xl:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                    Get in touch with us today — together, we&apos;ll turn your vision into reality and make everything better
                                </span>
                                <br />
                                <span className="flex-grow-0 flex-shrink-0 w-full xl:max-w-[418px] opacity-80 text-lg xl:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                    than ever before!
                                </span>
                            </p>


                        </div>

                        {/* Десктопная кнопка Contact Us */}
                        {/* <div className="hidden xl:flex justify-center items-center flex-grow-0 flex-shrink-0 w-[130px] h-[130px] gap-2.5 p-2.5 rounded-[500px] bg-[#6044ff] absolute left-[779.22px] top-[390px]">
                        <p className="flex-grow-0 flex-shrink-0 opacity-80 text-base text-left text-white font-instrument-sans">
                            Contact Us
                        </p>
                    </div> */}
                        {/* Мобильная кнопка Contact Us */}
                        <Link 
                            href="/contact" 
                            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-[100px] bg-[#0008D4] xl:hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white font-instrument-sans">Contact Us</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PartnerWithUs 