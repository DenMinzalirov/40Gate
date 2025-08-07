import Link from 'next/link'

interface FooterProps {
    sticky?: boolean
}

const Footer = ({ sticky = true }: FooterProps) => {
    return (
        <footer className={`w-full ${sticky ? 'sticky bottom-0' : ''}`}>
            {/* Мобильная версия */}
            <div className="w-full bg-[#1e1e1e] px-5 pt-10 pb-5 xl:hidden">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[50px]">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[50px]">
                        {/* Логотип */}
                        <div className="flex-grow-0 flex-shrink-0 w-[147.22px] h-[45.05px] relative">
                            <img
                                src="/logo-white.png"
                                alt="Forty Gate Logo"
                                className="w-[147.22px] h-[45.05px] absolute left-[-0.05px] top-[-0.05px] object-cover"
                            />
                        </div>

                        {/* Контакты */}
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] text-base text-left text-[#f2f4f3]">
                                Let&apos;s talk!
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-4xl text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                Support@forty.gate
                            </p>
                        </div>

                        {/* Ссылки */}
                        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[60px]">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                                <Link href="/privacy-policy" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                    Privacy Policy
                                </Link>
                                <Link href="/cookie-policy" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                    Cookie Policy
                                </Link>
                                <Link href="/terms-of-service" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>

                        {/* Копирайт */}
                        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                            <p className="flex-grow-0 flex-shrink-0 w-[180px] text-xs text-left text-[#f2f4f3]">
                                © 2025 Forty Gate
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#f2f4f3]">
                                All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Десктопная версия */}
            <div className="w-full bg-[#1e1e1e] mx-auto px-10 py-[30px] hidden xl:block">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[50px]">
                    <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
                        {/* Левая колонка - логотип и копирайт */}
                        <div className="flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                            {/* Логотип */}
                            <div className="flex-grow-0 flex-shrink-0 w-[147.22px] h-[45.05px] relative">
                                <img
                                    src="/logo-white.png"
                                    alt="Forty Gate Logo"
                                    className="w-[147.22px] h-[45.05px] absolute left-[-0.05px] top-[-0.05px] object-cover"
                                />
                            </div>
                            
                            {/* Копирайт */}
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                                <p className="flex-grow-0 flex-shrink-0 w-[180px] text-base text-left text-[#f2f4f3]">
                                    © 2025 Forty Gate
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3]">
                                    All rights reserved
                                </p>
                            </div>
                        </div>

                        {/* Правая колонка - ссылки и контакты */}
                        <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[819.39px] gap-[178px]">
                            {/* Ссылки */}
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[60px]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                                    <Link href="/privacy-policy" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/cookie-policy" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                        Cookie Policy
                                    </Link>
                                    <Link href="/terms-of-service" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                        Terms of Service
                                    </Link>
                                </div>
                            </div>

                            {/* Контакты */}
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[316px] text-base text-left text-[#f2f4f3]">
                                    Let&apos;s talk!
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-[40px] text-left text-[#f2f4f3] cursor-pointer hover:opacity-80 transition-opacity">
                                    Support@forty.gate
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 