'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useContactModal } from '@/hooks/useContactModal'
import ContactModal from './ContactModal'
import ThankYouModal from './ThankYouModal'

interface ContactModalContextType {
  openModal: () => void
  closeModal: () => void
  submitForm: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export const useContactModalContext = () => {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModalContext must be used within ContactModalProvider')
  }
  return context
}

interface ContactModalProviderProps {
  children: ReactNode
}

export const ContactModalProvider = ({ children }: ContactModalProviderProps) => {
  const { 
    isContactOpen, 
    isThankYouOpen, 
    openContactModal, 
    closeContactModal, 
    closeThankYouModal,
    submitForm 
  } = useContactModal()

  return (
    <ContactModalContext.Provider value={{ 
      openModal: openContactModal, 
      closeModal: closeContactModal,
      submitForm 
    }}>
      {children}
      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} onSubmit={submitForm} />
      <ThankYouModal isOpen={isThankYouOpen} onClose={closeThankYouModal} />
    </ContactModalContext.Provider>
  )
} 