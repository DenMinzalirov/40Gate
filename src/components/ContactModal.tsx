'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

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

const ContactModal = ({ isOpen, onClose, onSubmit }: ContactModalProps) => {
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
    onSubmit()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="max-w-[550px] p-10 rounded-[40px] bg-white border-0 shadow-[0px_0px_42.5px_0_rgba(153,153,153,0.25)]">
        <DialogTitle className="sr-only">Contact Form</DialogTitle>
        <form onSubmit={handleSubmit} className="flex flex-col gap-12">
          {/* Заголовок */}
          <h2 className="text-[50px] text-left text-[#1e1e1e] font-tinos leading-tight">
            Let&apos;s get started
          </h2>

          {/* Основная информация */}
          <div className="flex flex-col gap-9">
            <h3 className="text-3xl text-left text-[#1e1e1e] font-tinos">
              Main information
            </h3>
            
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
                  Forecasted volume for desired solution (EUR/month)
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
            <h3 className="text-3xl text-left text-[#1e1e1e] font-tinos">
              Interested in
            </h3>
            
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
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal 