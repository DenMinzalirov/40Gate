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
        <div className={`flex flex-col xl:flex-row xl:justify-between xl:items-center self-stretch flex-grow-0 flex-shrink-0 h-[525px] xl:h-[400px] relative p-5 xl:p-10 rounded-[40px] ${bgColor}`}>
            <div className="flex flex-col h-full justify-between xl:justify-between xl:h-80 relative">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className={`self-stretch flex-grow-0 flex-shrink-0 w-full text-base xl:text-2xl text-left ${textColor} font-instrument-sans`}>
                        {number}
                    </p>
                    <p className={`self-stretch flex-grow-0 flex-shrink-0 w-full text-3xl xl:text-[50px] text-left ${textColor} font-tinos leading-tight`}>
                        {title}
                    </p>
                </div>
                <div className="block xl:hidden xl:pt-[59px] xl:pb-[59px]">{image}</div>
                <p className={`flex-grow-0 flex-shrink-0 w-full xl:max-w-[501px] opacity-80 text-base xl:text-2xl text-left ${textColor} font-instrument-sans`}>
                    {description}
                </p>
            </div>
            <div className="xl:block hidden">{image}</div>

        </div>
    )
}

export default MerchantsSectionCard