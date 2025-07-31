'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useContactModal } from '@/hooks/useContactModal'
import ContactModal from './ContactModal'

interface ContactModalContextType {
  openModal: () => void
  closeModal: () => void
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
  const { isOpen, openModal, closeModal } = useContactModal()

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  )
} 