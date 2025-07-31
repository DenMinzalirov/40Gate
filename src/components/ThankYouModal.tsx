'use client'

import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'

interface ThankYouModalProps {
    isOpen: boolean
    onClose: () => void
}

const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay className="bg-black/50" />
            <DialogContent className="max-w-[550px] h-[400px] p-10 rounded-[40px] bg-white border-0 shadow-[0px_0px_42.5px_0_rgba(153,153,153,0.25)]">
                <DialogTitle className="sr-only">Thank You</DialogTitle>

                <div className="flex flex-col justify-center items-center h-full gap-[30px]">
                    {/* Иконка или изображение */}
                    <Image src="/thank-you.png" alt="Thank You" width={100} height={100} />
                    {/* <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#0008D4]/10">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="#0008D4" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />    
            </svg>
          </div> */}

                    {/* Контент */}
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                        <h2 className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-[50px] text-center text-[#1e1e1e] font-tinos leading-tight">
                            Thank you!
                        </h2>

                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-9">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-2xl text-center text-[#1e1e1e] font-instrument-sans">
                                <span className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-2xl text-center text-[#1e1e1e]">
                                    We&apos;ve received your message
                                </span>
                                <br />
                                <span className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-2xl text-center text-[#1e1e1e]">
                                    and will be in touch soon.
                                </span>
                            </p>

                            <button
                                onClick={onClose}
                                className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-base text-center text-[#0008D4] font-instrument-sans hover:underline cursor-pointer transition-all"
                            >
                                Return to Home Page
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ThankYouModal 