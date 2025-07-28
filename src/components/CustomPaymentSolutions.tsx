const CustomPaymentSolutions = () => {
    return (
        <section className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[100px]">
                    {/* Заголовок секции */}
                    <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full sm:w-[925px] gap-[30px]">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="none"
                                >
                                    <circle cx="7.02502" cy="7" r="6.25" fill="#6044FF"></circle>
                                </svg>
                                <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-2xl text-left text-[#1e1e1e] font-instrument-sans">
                                    Custom payment solutions
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[925px] text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                                    We offer a full suite of global payment options - cards, OB, APM's, crypto - all designed to match your specific needs.
                                </p>
                            </div>
                        </div>
                        {/* Номер секции - только для десктопа */}
                        <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-[55px] text-left text-[#6044ff] font-tinos">
                            (03)
                        </p>
                    </div>

                    {/* Карточки с решениями */}
                    <div className="flex flex-col sm:flex-row justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5 sm:gap-2.5">
                        {/* Карточка 1 - Bank Cards */}
                        <div className="flex flex-col justify-between items-start flex-grow w-full sm:h-[358px] relative overflow-hidden p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] bg-[#f2f4f3]">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 sm:gap-6">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] text-lg sm:text-2xl text-left text-[#1e1e1e]">
                                    (01)
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] text-2xl sm:text-[40px] text-left text-[#1e1e1e]">
                                    Bank Cards
                                </p>
                            </div>
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] opacity-80 text-sm sm:text-base text-left text-[#1e1e1e] mt-4 sm:mt-0">
                                <span className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] opacity-80 text-sm sm:text-base text-left text-[#1e1e1e]">
                                    We support all major payment card
                                </span>
                                <br />
                                <span className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] opacity-80 text-sm sm:text-base text-left text-[#1e1e1e]">
                                    providers all over the world.
                                </span>
                            </p>
                            <div className="flex-grow-0 flex-shrink-0"></div>
                        </div>

                        {/* Карточка 2 - Crypto Payments */}
                        <div className="flex flex-col justify-between items-start flex-grow w-full sm:h-[358px] relative overflow-hidden p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] bg-[#f2f4f3]">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 sm:gap-6">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] text-lg sm:text-2xl text-left text-[#1e1e1e]">
                                    (02)
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] text-2xl sm:text-[40px] text-left text-[#1e1e1e]">
                                    Crypto Payments
                                </p>
                            </div>
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] opacity-80 text-sm sm:text-base text-left text-[#1e1e1e] mt-4 sm:mt-0">
                                Send and receive payments in crypto - including BTC, ETH, and USDT - with fast, transparent, and borderless transactions.
                            </p>
                            <div className="flex-grow-0 flex-shrink-0"></div>
                        </div>

                        {/* Карточка 3 - APMs */}
                        <div className="flex flex-col justify-between items-start flex-grow w-full sm:h-[358px] relative overflow-hidden p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] bg-[#f2f4f3]">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 sm:gap-6">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] text-lg sm:text-2xl text-left text-[#1e1e1e]">
                                    (03)
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] text-2xl sm:text-[40px] text-left text-[#1e1e1e]">
                                    APMs
                                </p>
                            </div>
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:w-[366.67px] opacity-80 text-sm sm:text-base text-left text-[#1e1e1e] mt-4 sm:mt-0">
                                Connect your PayPal, Apple Pay, or Google Pay accounts for one-tap, hassle-free checkouts on both desktop and mobile devices.
                            </p>
                            <div className="flex-grow-0 flex-shrink-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomPaymentSolutions 