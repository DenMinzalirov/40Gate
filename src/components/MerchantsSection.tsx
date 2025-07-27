import MerchantAnimationCards from "./MerchantAnimationCards"
import MerchantsSectionCard from "./MerchantsSectionCard"
import Image from 'next/image'

const MerchantsSection = () => {
    return (
        <section className="w-full pt-[120px] sm:pt-[200px] px-5 sm:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
                {/* Единая структура с адаптивными классами */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-6 sm:gap-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full sm:max-w-[925px] gap-6 sm:gap-[30px]">
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                            {/* SVG иконка - адаптивная */}
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
                                For merchants
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:max-w-[1067px] text-3xl sm:text-[55px] text-left text-[#1e1e1e] font-tinos leading-tight">
                                AI-powered tools to scale your business — from smart cascading to chargeback prevention.
                                Modern payment infrastructure built with machine learning created for global growth.
                            </p>
                        </div>
                    </div>
                    {/* Номер - только для десктопа */}
                    <p className="hidden sm:block flex-grow-0 flex-shrink-0 text-[55px] text-left text-[#6044ff] font-tinos">
                        (01)
                    </p>
                </div>

                {/* Блок с карточками */}
                <div className="mt-[50px] sm:mt-[100px] flex flex-col gap-6">
                    <MerchantAnimationCards />
                    {/* Карточка 1 - на всю ширину */}

                    {/* <MerchantsSectionCard
                        number="(01)"
                        title="Payment Methods"
                        description="From crypto to local bank transfers - we support 300+ payment methods to ensure your customers always find a way to pay."
                        image={<Image
                            src="/payment-methods.png"
                            alt="Payment Methods Illustration"
                            width={324}
                            height={314}
                            className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                        />}
                    /> */}

                    {/* Карточка 2 */}
                    {/* <MerchantsSectionCard
                        number="(02)"
                        title="Payment Orchestration"
                        description="From crypto to local bank transfers - we support 300+ payment methods to ensure your customers always find a way to pay."
                        image={<Image
                            src="/payment-orchestration.png"
                            alt="Payment Orchestration"
                            width={324}
                            height={314}
                            className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                        />}
                        bgColor="bg-[#6044FF]"
                        textColor="text-[#F2F4F3]"
                    /> */}

                    {/* Карточка 3 */}
                    {/* <MerchantsSectionCard
                        number="(03)"
                        title="Chargeback Prevention"
                        description="Reduce risk and retain revenue with proactive chargeback management. We help identify patterns, prevent disputes, and guide you with best practices to keep chargebacks under control."
                        image={<Image
                            src="/chargeback-prevention.png"
                            alt="Chargeback Prevention"
                            width={324}
                            height={314}
                            className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                        />}
                        bgColor="bg-[#1E1E1E]"
                        textColor="text-[#FFFFFF]"
                    /> */}

                    {/* Карточка 4 */}
                    {/* <MerchantsSectionCard
                        number="(04)"
                        title="Fraud Monitoring"
                        description="Stay protected with real-time fraud detection powered by machine learning. Our system flags suspicious activity early-helping you prevent losses without blocking legitimate customers."
                        image={<Image
                            src="/fraud-monitoring.png"
                            alt="Fraud Monitoring"
                            width={324}
                            height={314}
                            className="flex-grow-0 flex-shrink-0 w-[217px] h-[210px] sm:min-w-[324px] sm:min-h-[314px] order-2 sm:order-none mx-auto sm:mx-0 my-6 sm:my-0"
                        />}
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default MerchantsSection 