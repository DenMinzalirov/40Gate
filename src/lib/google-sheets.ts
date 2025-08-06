// Утилита для работы с Google Sheets
// Для использования нужно создать Google Apps Script и опубликовать его как веб-приложение

export interface GoogleSheetsData {
  email: string
  companyName: string
  companyWebsite: string
  industry: string
  volume: string
  cards: string
  apms: string
  partnership: string
  timestamp: string
}

export async function saveToGoogleSheets(data: GoogleSheetsData): Promise<boolean> {
  try {
    // URL вашего Google Apps Script (нужно создать и опубликовать)
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbweg_N8qZDwj_7PRezzR2GadiYdYl2T-1DNFNkopw20ucp6KhBCQclaCuvf7mw_jO4T/exec'
    
    console.log('Sending data to Google Sheets:', data)
    console.log('Script URL:', scriptUrl)
    
    if (!scriptUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL not configured')
      return false
    }

    const requestBody = JSON.stringify(data)
    console.log('Request body:', requestBody)

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    const result = await response.text()
    console.log('Google Sheets response:', result)
    
    // Проверяем содержит ли ответ HTML (ошибка)
    if (result.includes('<!DOCTYPE html>')) {
      console.error('Google Apps Script error detected in response')
      console.error('Full HTML response:', result)
      return false
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    // Пытаемся парсить JSON ответ
    try {
      const jsonResult = JSON.parse(result)
      console.log('Parsed JSON response:', jsonResult)
      return jsonResult.success === true
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError)
      return false
    }
    
  } catch (error) {
    console.error('Error saving to Google Sheets:', error)
    return false
  }
}

// Альтернативный метод через Google Sheets API (требует настройки OAuth2)
export async function saveToGoogleSheetsAPI(data: GoogleSheetsData): Promise<boolean> {
  try {
    // Здесь будет код для работы с Google Sheets API
    // Требует настройки сервисного аккаунта и OAuth2
    console.log('Saving to Google Sheets via API:', data)
    return true
  } catch (error) {
    console.error('Error saving to Google Sheets API:', error)
    return false
  }
} 