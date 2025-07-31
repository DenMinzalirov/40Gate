import { useState, useCallback } from 'react'

export const useContactModal = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isThankYouOpen, setIsThankYouOpen] = useState(false)

  const openContactModal = useCallback(() => {
    setIsContactOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setIsContactOpen(false)
  }, [])

  const openThankYouModal = useCallback(() => {
    setIsThankYouOpen(true)
  }, [])

  const closeThankYouModal = useCallback(() => {
    setIsThankYouOpen(false)
  }, [])

  const submitForm = useCallback(() => {
    closeContactModal()
    openThankYouModal()
  }, [closeContactModal, openThankYouModal])

  return {
    isContactOpen,
    isThankYouOpen,
    openContactModal,
    closeContactModal,
    openThankYouModal,
    closeThankYouModal,
    submitForm
  }
} 