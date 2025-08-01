'use client'

import { Rule, SubRule } from '@/types/rules'
import { privacyPolicyRules } from '@/data/privacy-policy-rules'
import Footer from '@/components/Footer'

// Компонент для отображения одного правила
const RuleItem = ({ rule }: { rule: Rule }) => {
    return (
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-9">
            {/* Основное правило */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                <p className="flex-grow-0 flex-shrink-0 w-[377.02px] text-[40px] sm:text-[50px] text-left text-[#0008d4]">
                    ({rule.id})
                </p>
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 sm:flex-grow relative gap-3">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] sm:w-[982.98px] text-[40px] text-left text-[#1e1e1e] font-tinos">
                        {rule.title}
                    </p>
                    {rule.content && (
                        <div 
                            className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] sm:w-[982.98px] text-base text-left text-[#1e1e1e] font-instrument-sans leading-[24px]"
                            dangerouslySetInnerHTML={{ __html: rule.content as string }}
                        />
                    )}
                </div>
            </div>

            {/* Подправила */}
            {rule.subRules && rule.subRules.map((subRule) => (
                <div key={subRule.id} className="flex flex-col sm:flex-row justify-center sm:justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 w-[377.02px] text-3xl sm:text-4xl text-left text-[#0008d4]">
                        ({subRule.id})
                    </p>
                    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 sm:flex-grow relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 text-3xl text-left text-[#1e1e1e] font-tinos">
                            {subRule.title}
                        </p>
                        <div 
                            className="self-stretch flex-grow-0 flex-shrink-0 w-[335px] sm:w-[982.98px] text-base text-left text-[#1e1e1e] font-instrument-sans leading-[24px]"
                            dangerouslySetInnerHTML={{ __html: subRule.content as string }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

// Компонент для отображения списка правил
const RulesList = ({ rules }: { rules: Rule[] }) => {
    return (
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
            {rules.map((rule) => (
                <RuleItem key={rule.id} rule={rule} />
            ))}
        </div>
    )
}

const PrivacyPolicyPage = () => {

    return (
        <div className="min-h-screen bg-[#f2f4f3]">
            <div className="w-full px-5 pt-10 pb-5">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[50px]">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[50px]">
                        {/* Заголовок */}
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5 mt-10">
                            <h1 className="self-stretch flex-grow-0 flex-shrink-0 text-[40px] text-left text-[#1e1e1e] font-tinos leading-[48px]">
                                Privacy Policy
                            </h1>
                        </div>

                        {/* Разделительная линия */}
                        <div className="w-full">
                            <svg width="100%" height="2">
                                <defs>
                                    <pattern id="dash" patternUnits="userSpaceOnUse" width="20" height="2">
                                        <line x1="0" y1="1" x2="10" y2="1" stroke="#000" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="2" fill="url(#dash)" />
                            </svg>
                        </div>

                        {/* Основной контент - используем компонент RulesList */}
                        <RulesList rules={privacyPolicyRules} />
                    </div>
                </div>
            </div>
            <Footer sticky={false} />
        </div>
    )
}

export default PrivacyPolicyPage 