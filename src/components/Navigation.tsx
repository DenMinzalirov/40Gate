'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Navigation = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('merchants')
  const [isVisible, setIsVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const scrollThreshold = 40
  const hoverThreshold = 80
  const scrollUpThreshold = 80


  useEffect(() => {
    let lastScrollY = 0
    let scrollUpDistance = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY

      // Если скроллим вверх
      if (scrollDelta < 0) {
        scrollUpDistance += Math.abs(scrollDelta)
        
        // Если навигация скрыта и скроллили вверх на 80px
        if (!isVisible && scrollUpDistance >= scrollUpThreshold) {
          setIsVisible(true)
          scrollUpDistance = 0 // Сбрасываем счетчик
        }
      } else {
        // Если скроллим вниз, сбрасываем счетчик скролла вверх
        scrollUpDistance = 0
      }

      // Если скроллим вниз больше чем на 40px и не наводим мышь
      if (currentScrollY > scrollThreshold && !isHovering && scrollDelta > 0) {
        setIsVisible(false)
      }
      // Если находимся в начале страницы
      else if (currentScrollY <= scrollThreshold) {
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY
      
      // Если мышь в верхней полоске 80px
      if (mouseY <= hoverThreshold) {
        setIsHovering(true)
        setIsVisible(true)
      } else {
        setIsHovering(false)
        // Если убрали мышь и скроллим вниз, скрываем навигацию
        if (window.scrollY > scrollThreshold) {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isVisible, isHovering])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    
    // Навигация к соответствующим секциям
    const sectionMap: { [key: string]: string } = {
      merchants: 'merchants-section',
      partners: 'partner-with-us',
      payments: 'custom-payment-solutions',
      about: 'about-us'
    }
    
    const targetId = sectionMap[tab]
    
    // Если мы не на главной странице, сначала переходим в корень
    if (pathname !== '/') {
      router.push('/')
      // Ждем немного и затем скроллим к секции
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    } else {
      // Если уже на главной странице, просто скроллим к секции
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const menuItems = [
    { id: 'merchants', name: 'For merchants' },
    { id: 'partners', name: 'For partners' },
    { id: 'payments', name: 'Payments methods' },
    { id: 'about', name: 'About us' },
  ]

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 nav-animation ${
        isVisible ? '' : 'nav-hidden'
      }`}
    >
      <div className="w-full px-5 xl:px-10">
        <div className="mx-auto">
          <div className="flex items-center justify-between h-16 xl:h-16 pt-5 xl:pt-0">
            {/* Логотип */}
            <div className="flex items-center">
              <Link 
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="FORTY GATE Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Набор кнопок - скрыт на мобильных */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="flex justify-start items-center gap-3 p-1 rounded-[100px] bg-white shadow-[0px_0px_22.9px_0_rgba(200,200,200,0.25)]">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`flex cursor-pointer justify-center items-center gap-2.5 px-5 py-2.5 rounded-[100px] text-base text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-[#f2f4f3] text-[#1e1e1e]'
                        : 'text-[#1e1e1e] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Кнопка Contact Us - одна для всех устройств */}
            <div className="flex items-center">
              <Link 
                href="/contact"
                className="flex justify-center items-center gap-2.5 px-5 py-2.5 rounded-[100px] bg-[#1e1e1e] text-white text-base hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 