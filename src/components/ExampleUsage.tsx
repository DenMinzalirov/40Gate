'use client'

import { useContactModalContext } from './ContactModalProvider'

const ExampleUsage = () => {
  const { openModal } = useContactModalContext()

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Пример использования модального окна</h2>
      
      {/* Кнопка для открытия модального окна */}
      <button 
        onClick={openModal}
        className="px-6 py-3 bg-[#0008D4] text-white rounded-lg hover:bg-[#0008D4]/90 transition-colors"
      >
        Открыть форму контактов
      </button>
      
      <p className="mt-4 text-gray-600">
        Нажмите на кнопку выше, чтобы открыть модальное окно с формой контактов.
        Модальное окно можно открыть из любого компонента, используя хук useContactModalContext.
      </p>
    </div>
  )
}

export default ExampleUsage 