'use client'

import { useState } from 'react'
import Image from 'next/image'

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('merchants')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const menuItems = [
    { id: 'merchants', name: 'For merchants' },
    { id: 'partners', name: 'For partners' },
    { id: 'payments', name: 'Payments methods' },
    { id: 'about', name: 'About us' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="w-full px-5 sm:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-16 pt-5 sm:pt-0">
            {/* Логотип */}
            <div className="flex items-center">
              <a 
                href="#home" 
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
              </a>
            </div>

            {/* Набор кнопок - скрыт на мобильных */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex justify-start items-center gap-3 p-1 rounded-[100px] bg-white shadow-[0px_0px_22.9px_0_rgba(200,200,200,0.25)]">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`flex justify-center items-center gap-2.5 px-5 py-2.5 rounded-[100px] text-base text-left transition-all duration-200 ${
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
              <button className="flex justify-center items-center gap-2.5 px-5 py-2.5 rounded-[100px] bg-[#1e1e1e] text-white text-base hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 