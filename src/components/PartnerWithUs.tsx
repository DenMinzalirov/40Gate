const PartnerWithUs = () => {
    return (
        <section className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col justify-center items-start sm:items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-8 sm:gap-[65px] py-6 sm:py-[50px]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end self-stretch flex-grow-0 flex-shrink-0 gap-6 sm:gap-0">
                        <div className="flex flex-col justify-start items-start flex-grow gap-6 sm:gap-[30px]">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
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
                                    Partner With Us
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                                <p className="flex-grow-0 flex-shrink-0 w-full sm:max-w-[1189px] text-3xl sm:text-[55px] text-left font-tinos leading-tight">
                                    <span className="flex-grow-0 flex-shrink-0 w-full sm:max-w-[1189px] text-3xl sm:text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                                        Whether you&apos;re a PSP, EMI, payment agent, or a MoR - if you&apos;re in the pay
                                    </span>
                                    <span className="flex-grow-0 flex-shrink-0 w-full sm:max-w-[1189px] text-3xl sm:text-[55px] text-left text-[#1e1e1e]/40 font-tinos leading-tight">
                                        ments industry, we speak your language. Always open to partnerships that drive value and scale. Let&apos;s explore it.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                        <p className="flex-grow-0 flex-shrink-0 w-full sm:max-w-[418px] opacity-80 text-lg sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                            <span className="flex-grow-0 flex-shrink-0 w-full sm:max-w-[418px] opacity-80 text-lg sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                Get in touch with us today — together, we&apos;ll turn your vision into reality and make everything better
                            </span>
                            <br />
                            <span className="flex-grow-0 flex-shrink-0 w-full sm:max-w-[418px] opacity-80 text-lg sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                than ever before!
                            </span>
                        </p>


                    </div>

                    {/* Десктопная кнопка Contact Us */}
                    <div className="hidden sm:flex justify-center items-center flex-grow-0 flex-shrink-0 w-[130px] h-[130px] gap-2.5 p-2.5 rounded-[500px] bg-[#6044ff] absolute left-[779.22px] top-[390px]">
                        <p className="flex-grow-0 flex-shrink-0 opacity-80 text-base text-left text-white font-instrument-sans">
                            Contact Us
                        </p>
                    </div>
                    {/* Мобильная кнопка Contact Us */}
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-[100px] bg-[#6044ff] sm:hidden">
                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white font-instrument-sans">Contact Us</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerWithUs 