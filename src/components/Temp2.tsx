'use client'

import { useState, useEffect } from 'react'

const Temp2 = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const calculateStickyTop = (blockIndex: number) => {
        const viewportHeight = window.innerHeight
        const blockHeight = 300
        const blockTop = blockIndex * blockHeight
        const visiblePart = 50 // Видимая часть блока
        
        // Базовая линия остановки (середина экрана)
        const baseCenterLine = viewportHeight / 2
        
        // Линия остановки смещается вниз на 50px для каждого блока
        const adjustedCenterLine = baseCenterLine + (blockIndex * visiblePart)
        const stickyThreshold = blockTop - adjustedCenterLine + blockHeight / 2
        
        if (scrollY < stickyThreshold) {
            // Блок еще не достиг линии - скроллится нормально
            return 'auto'
        }
        
        // Блок достиг линии - начинает прилипать к смещенной линии
        return `${adjustedCenterLine - blockHeight / 2}px`
    }

    return (
        <div className="w-full relative">
            <div 
                className="w-full h-[300px] bg-blue-500 sticky z-10 transition-all duration-100 ease-out"
                style={{ top: calculateStickyTop(0) }}
            ></div>
            
            <div 
                className="w-full h-[300px] bg-red-500 sticky z-20 transition-all duration-100 ease-out"
                style={{ top: calculateStickyTop(1) }}
            ></div>
            
            <div 
                className="w-full h-[300px] bg-green-500 sticky z-30 transition-all duration-100 ease-out"
                style={{ top: calculateStickyTop(2) }}
            ></div>
            
            <div 
                className="w-full h-[300px] bg-yellow-500 sticky z-40 transition-all duration-100 ease-out"
                style={{ top: calculateStickyTop(3) }}
            ></div>
        </div>
    )
}

export default Temp2 