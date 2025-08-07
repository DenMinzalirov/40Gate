// Утилита для логирования переменных окружения при старте приложения

export function logEnvironmentVariables() {
  if (process.env.NODE_ENV === 'development') {
    console.log('🚀 Environment Variables Check:')
    console.log('================================')
    
    // Email configuration
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    const adminEmail = process.env.ADMIN_EMAIL
    
    console.log('📧 Email Configuration:')
    console.log(`  EMAIL_USER: ${emailUser ? '✅ Configured' : '❌ Not configured'}`)
    console.log(`  EMAIL_PASSWORD: ${emailPassword ? '✅ Configured' : '❌ Not configured'}`)
    console.log(`  ADMIN_EMAIL: ${adminEmail ? '✅ Configured' : '❌ Not configured'}`)
    
    // Google Sheets configuration
    const googleSheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    
    console.log('📊 Google Sheets Configuration:')
    console.log(`  GOOGLE_SHEETS_WEBHOOK_URL: ${googleSheetsUrl ? '✅ Configured' : '❌ Not configured'}`)
    if (googleSheetsUrl) {
      console.log(`    URL: ${googleSheetsUrl}`)
    }
    
    // Analytics configuration
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID
    
    console.log('📈 Analytics Configuration:')
    console.log(`  NEXT_PUBLIC_GA_ID: ${gaId ? '✅ Configured' : '❌ Not configured'}`)
    console.log(`  NEXT_PUBLIC_YANDEX_METRICA_ID: ${yandexId ? '✅ Configured' : '❌ Not configured'}`)
    
    // Check for missing required variables
    const missingRequired = []
    if (!emailUser) missingRequired.push('EMAIL_USER')
    if (!emailPassword) missingRequired.push('EMAIL_PASSWORD')
    if (!adminEmail) missingRequired.push('ADMIN_EMAIL')
    if (!googleSheetsUrl) missingRequired.push('GOOGLE_SHEETS_WEBHOOK_URL')
    
    if (missingRequired.length > 0) {
      console.log('⚠️  Missing required environment variables:')
      missingRequired.forEach(variable => {
        console.log(`    - ${variable}`)
      })
      console.log('💡 Create .env.local file with these variables')
    } else {
      console.log('✅ All required environment variables are configured!')
    }
    
    console.log('================================')
  }
}

// Функция для логирования только публичных переменных (работает на клиенте)
export function logPublicEnvironmentVariables() {
  if (process.env.NODE_ENV === 'development') {
    console.log('🌐 Public Environment Variables:')
    console.log('================================')
    
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID
    
    console.log(`  NEXT_PUBLIC_GA_ID: ${gaId ? '✅ Configured' : '❌ Not configured'}`)
    console.log(`  NEXT_PUBLIC_YANDEX_METRICA_ID: ${yandexId ? '✅ Configured' : '❌ Not configured'}`)
    console.log('================================')
  }
} 