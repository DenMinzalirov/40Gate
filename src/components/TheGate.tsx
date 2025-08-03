'use client'

import Footer from "./Footer"
import Link from "next/link"

const TheGate = () => {

    return (
        <section className="w-full pt-[120px] xl:pt-[200px]">
            <div className="h-[260px] xl:h-[650px] flex flex-col xl:justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-8 xl:p-5 xl:px-10">
                {/* Фоновое изображение */}
                {/* <img
                    src="/the-gate.png"
                    alt="40 - The Gate"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                /> */}
                {/* Фоновый контейнер с изображением - мобильная версия */}
                <div
                    className="w-full z-9 h-full max-w-[1440px] absolute left-1/2 transform -translate-x-1/2 overflow-hidden bg-cover bg-center bg-no-repeat sm:hidden"
                    style={{
                        backgroundImage: 'url(/the-gate-mob.png)'
                    }}
                />

                {/* Фоновый контейнер с изображением - десктопная версия */}
                <div
                    className="w-full z-9 h-full absolute left-1/2 transform -translate-x-1/2 overflow-hidden bg-cover bg-top bg-no-repeat hidden sm:block"
                    style={{
                        backgroundImage: 'url(/the-gate.png)',
                        backgroundSize: 'cover',
                    }}
                />

                {/* Контент поверх изображения */}
                <div className="relative z-10 flex flex-col xl:justify-center items-start h-full w-full mx-auto pl-5 xl:pl-10 pt-10 xl:pt-0">
                    <div className="flex-grow-0 flex-shrink-0 w-full xl:w-[536px] text-[40px] xl:text-[65px] text-left text-[#1e1e1e] font-tinos leading-none flex flex-col gap-[3px]">
                        <div className="flex-grow-0 flex-shrink-0 w-full xl:w-[536px] text-[24px] xl:text-[65px] text-left text-[#1e1e1e] font-tinos">
                            40 - The Gate
                        </div>
                        <div className="flex-grow-0 flex-shrink-0 w-full xl:w-[536px] text-[24px] xl:text-[65px] text-left text-[#1e1e1e] font-tinos">
                            that bridges,
                        </div>
                        <div className="flex-grow-0 flex-shrink-0 w-full xl:w-[536px] text-[24px] xl:text-[65px] text-left text-[#1e1e1e] font-tinos">
                            routes, and delivers.
                        </div>
                    </div>

                    {/* Кнопка Contact Us */}
                    <div className="flex-grow-0 flex-shrink-0 w-auto xl:w-[162px] h-[50px] mt-8">
                        <Link
                            href="/contact"
                            className="flex justify-center items-center h-[50px] w-auto xl:w-[162px] gap-2.5 px-6 xl:px-10 py-2.5 rounded-[100px] bg-[#1e1e1e] hover:bg-[#333] transition-colors duration-200 cursor-pointer"
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white font-instrument-sans">
                                Contact Us
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default TheGate 