const AboutUs = () => {
    return (
        <section className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[100px]">
                    {/* Заголовок секции */}
                    <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full sm:w-[925px] gap-[30px]">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                <div className="w-3 h-3 rounded-full bg-[#6044ff]"></div>
                                <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-2xl text-left text-[#1e1e1e]">
                                    About us
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                                <p className="flex-grow-0 flex-shrink-0 w-full sm:w-[905.6px] text-[55px] text-left text-[#1e1e1e] font-tinos">
                                    40Gate — sounds like “Fortune” for a reason. Over 40 (actually close to 100) providers onboard.
                                </p>
                            </div>
                        </div>
                        {/* Номер секции - только для десктопа */}
                        <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-[55px] text-left text-[#6044ff] font-tinos">
                            (04)
                        </p>
                    </div>

                    {/* Статистика */}
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[85px]">
                        {/* Первая статистика - 1000M+ */}
                        <div className="flex flex-wrap justify-between items-end w-full">
                            <div className="h-[180px] text-[120px] sm:text-[261.7px] text-left text-[#6044ff] font-tinos leading-none flex items-center">
                                1000+
                            </div>
                            <div className="h-[92px]">
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
                        </div>

                        {/* Разделительная линия */}
                        <div className="self-stretch h-[1px] bg-[#1e1e1e] border-dashed border-t border-[#1e1e1e] w-full"></div>

                        {/* Вторая статистика - 300+ */}
                        <div className="flex flex-wrap justify-between items-end w-full">
                            <div className="h-[180px] text-[120px] sm:text-[261.7px] text-left text-[#6044ff] font-tinos leading-none flex items-center">
                                300+
                            </div>
                            <div className="h-[92px]">
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
                        </div>

                        {/* Разделительная линия */}
                        <div className="self-stretch h-[1px] bg-[#1e1e1e] border-dashed border-t border-[#1e1e1e]"></div>

                        {/* Третья статистика - 30+ */}
                        <div className="flex flex-wrap justify-between items-end w-full">
                            <div className="h-[180px] text-[120px] sm:text-[261.7px] text-left text-[#6044ff] font-tinos leading-none flex items-center">
                                30+
                            </div>
                            <div className="h-[92px]">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs 