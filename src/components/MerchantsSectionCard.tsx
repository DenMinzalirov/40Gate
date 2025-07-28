import React from 'react';

const MerchantsSectionCard = ({ 
    number, 
    title, 
    description, 
    image, 
    bgColor = "bg-[#f2f4f3]",
    textColor = "text-[#1e1e1e]"
}: { 
    number: string, 
    title: string, 
    description: string, 
    image: React.ReactNode,
    bgColor?: string,
    textColor?: string
}) => {
    return (
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center self-stretch flex-grow-0 flex-shrink-0 h-[525px] sm:h-[400px] relative p-5 sm:p-10 rounded-[40px] ${bgColor}`}>
            <div className="flex flex-col h-full justify-between sm:justify-between sm:h-80 relative">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className={`self-stretch flex-grow-0 flex-shrink-0 w-full text-base sm:text-2xl text-left ${textColor} font-instrument-sans`}>
                        {number}
                    </p>
                    <p className={`self-stretch flex-grow-0 flex-shrink-0 w-full text-3xl sm:text-[50px] text-left ${textColor} font-tinos leading-tight`}>
                        {title}
                    </p>
                </div>
                <div className="block sm:hidden sm:pt-[59px] sm:pb-[59px]">{image}</div>
                <p className={`flex-grow-0 flex-shrink-0 w-full sm:max-w-[501px] opacity-80 text-base sm:text-2xl text-left ${textColor} font-instrument-sans`}>
                    {description}
                </p>
            </div>
            <div className="sm:block hidden">{image}</div>

        </div>
    )
}

export default MerchantsSectionCard