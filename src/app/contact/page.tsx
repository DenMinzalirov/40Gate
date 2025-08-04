'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

interface FormData {
    email: string
    companyName: string
    companyWebsite: string
    industry: string
    volume: string
    cards: boolean
    apms: boolean
    partnership: boolean
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        companyName: '',
        companyWebsite: '',
        industry: '',
        volume: '',
        cards: true,
        apms: false,
        partnership: false
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Здесь будет логика отправки формы
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div
                className="min-h-screen flex flex-col items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, #ACCCDC 0%, #C7D6DE 100%)'
                }}
            >
                <div className="mt-auto" />
                <div className="max-w-[335px] sm:max-w-[550px] h-[400px] sm:p-10 rounded-[40px] bg-white shadow-[0px_0px_42.5px_0_rgba(153,153,153,0.25)]">
                    <div className="flex flex-col justify-center items-center h-full gap-[30px]">
                        {/* Иконка успеха */}
                        <Image src="/thank-you.png" alt="Thank You" width={100} height={100} />


                        {/* Контент */}
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                            <h2 className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-[36px] sm:text-[50px] text-center text-[#1e1e1e] font-tinos leading-tight">
                                Thank you!
                            </h2>

                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-9">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-2xl text-center text-[#1e1e1e] font-instrument-sans">
                                    <span className="font-tinos self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-[20px] sm:text-2xl text-center text-[#1e1e1e]">
                                        We&apos;ve received your message
                                    </span>
                                    <br />
                                    <span className="font-tinos self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-[20px] sm:text-2xl text-center text-[#1e1e1e]">
                                        and will be in touch soon.
                                    </span>
                                </p>

                                <Link
                                    href="/"
                                    className="self-stretch flex-grow-0 flex-shrink-0 w-[470px] text-base text-center text-[#0008D4] font-instrument-sans hover:underline cursor-pointer transition-all"
                                >
                                    Return to Home Page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[40px] mt-auto" />
                <Footer sticky={false} />
            </div>
        )
    }

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center w-full pt-20"
            style={{
                background: 'linear-gradient(135deg, #ACCCDC 0%, #C7D6DE 100%)'
            }}
        >
            <div className="mt-auto" />
            <div className="sm:min-w-[550px] min-w-[280px] sm:p-10 p-[20px] sm:rounded-[40px] rounded-[20px] bg-white shadow-[0px_0px_42.5px_0_rgba(153,153,153,0.25)]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-12 ">
                    {/* Заголовок */}
                    <h1 className="sm:text-[50px] text-[36px] text-left text-[#1e1e1e] font-tinos leading-tight">
                        Let&apos;s get started
                    </h1>

                    {/* Основная информация */}
                    <div className="flex flex-col gap-9">
                        <h2 className="sm:text-3xl text-[24px] text-left text-[#1e1e1e] font-tinos">
                            Main information
                        </h2>

                        <div className="flex flex-col gap-9">
                            {/* Email */}
                            <div className="relative">
                                <Label
                                    htmlFor="email"
                                    className="absolute left-4 top-[-12px] bg-white px-2.5 py-2.5 text-xs text-[#1e1e1e] z-10"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Type here.."
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10 text-base placeholder:text-[#1e1e1e]/40 focus:border-[#0008D4] focus:ring-0"
                                />
                            </div>

                            {/* Company name */}
                            <div className="relative">
                                <Label
                                    htmlFor="companyName"
                                    className="absolute left-4 top-[-12px] bg-white px-2.5 py-2.5 text-xs text-[#1e1e1e] z-10"
                                >
                                    Company name
                                </Label>
                                <Input
                                    id="companyName"
                                    type="text"
                                    placeholder="Type here.."
                                    value={formData.companyName}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                    className="h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10 text-base placeholder:text-[#1e1e1e]/40 focus:border-[#0008D4] focus:ring-0"
                                />
                            </div>

                            {/* Company website */}
                            <div className="relative">
                                <Label
                                    htmlFor="companyWebsite"
                                    className="absolute left-4 top-[-12px] bg-white px-2.5 py-2.5 text-xs text-[#1e1e1e] z-10"
                                >
                                    Company website
                                </Label>
                                <Input
                                    id="companyWebsite"
                                    type="url"
                                    placeholder="Type here.."
                                    value={formData.companyWebsite}
                                    onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                                    className="h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10 text-base placeholder:text-[#1e1e1e]/40 focus:border-[#0008D4] focus:ring-0"
                                />
                            </div>

                            {/* Industry */}
                            <div className="relative">
                                <Label
                                    htmlFor="industry"
                                    className="absolute left-4 top-[-12px] bg-white px-2.5 py-2.5 text-xs text-[#1e1e1e] z-10"
                                >
                                    Industry
                                </Label>
                                <Input
                                    id="industry"
                                    type="text"
                                    placeholder="Type here.."
                                    value={formData.industry}
                                    onChange={(e) => handleInputChange('industry', e.target.value)}
                                    className="h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10 text-base placeholder:text-[#1e1e1e]/40 focus:border-[#0008D4] focus:ring-0"
                                />
                            </div>

                            {/* Volume */}
                            <div className="relative">
                                <Label
                                    htmlFor="volume"
                                    className="absolute left-4 top-[-12px] bg-white px-2.5 py-2.5 text-xs text-[#1e1e1e] z-10"
                                >
                                    Est. volume (EUR/month)
                                </Label>
                                <Input
                                    id="volume"
                                    type="text"
                                    placeholder="Type here.."
                                    value={formData.volume}
                                    onChange={(e) => handleInputChange('volume', e.target.value)}
                                    className="h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10 text-base placeholder:text-[#1e1e1e]/40 focus:border-[#0008D4] focus:ring-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Интересы */}
                    <div className="flex flex-col gap-9">
                        <h2 className="sm:text-3xl text-[24px] text-left text-[#1e1e1e] font-tinos">
                            Interested in
                        </h2>

                        <div className="flex flex-col gap-3">
                            {/* Cards */}
                            <div className="flex justify-between items-center h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10">
                                <span className="text-base text-left text-[#1e1e1e]">Cards</span>
                                <Switch
                                    checked={formData.cards}
                                    onCheckedChange={(checked) => handleInputChange('cards', checked)}
                                    className="data-[state=checked]:bg-[#0008D4]"
                                />
                            </div>

                            {/* APMs */}
                            <div className="flex justify-between items-center h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10">
                                <span className="text-base text-left text-[#1e1e1e]">APM&apos;s</span>
                                <Switch
                                    checked={formData.apms}
                                    onCheckedChange={(checked) => handleInputChange('apms', checked)}
                                    className="data-[state=checked]:bg-[#0008D4]"
                                />
                            </div>

                            {/* Partnership */}
                            <div className="flex justify-between items-center h-[50px] px-4 py-2.5 rounded-[10px] border border-[#1e1e1e]/10">
                                <span className="text-base text-left text-[#1e1e1e]">Partnership</span>
                                <Switch
                                    checked={formData.partnership}
                                    onCheckedChange={(checked) => handleInputChange('partnership', checked)}
                                    className="data-[state=checked]:bg-[#0008D4]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Кнопка отправки */}
                    <Button
                        type="submit"
                        className="h-[50px] px-5 py-2.5 rounded-[100px] bg-[#0008D4] text-base text-white hover:bg-[#0008D4]/90"
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <div className="h-[40px] mt-auto" />
            <Footer sticky={false} />
        </div>
    )
} 