# Руководство по настройке формы контактов

## 1. Настройка Google Sheets

### Вариант A: Google Apps Script (Рекомендуется)

1. **Создайте Google Sheets таблицу** с колонками:
   - Email
   - Company Name
   - Company Website
   - Industry
   - Volume
   - Cards
   - APMs
   - Partnership
   - Timestamp

2. **Создайте Google Apps Script:**
   - Откройте [Google Apps Script](https://script.google.com/)
   - Создайте новый проект
   - Вставьте следующий код:

```javascript
function doPost(e) {
  try {
    // Получаем данные из запроса
    const data = JSON.parse(e.postData.contents);
    
    // Открываем таблицу (замените на ID вашей таблицы)
    const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
    const sheet = spreadsheet.getActiveSheet();
    
    // Добавляем новую строку
    sheet.appendRow([
      data.email,
      data.companyName,
      data.companyWebsite,
      data.industry,
      data.volume,
      data.cards,
      data.apms,
      data.partnership,
      data.timestamp
    ]);
    
    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Возвращаем ошибку
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Опубликуйте скрипт:**
   - Нажмите "Deploy" → "New deployment"
   - Выберите "Web app"
   - Установите "Execute as": "Me"
   - Установите "Who has access": "Anyone"
   - Скопируйте URL

4. **Добавьте URL в переменные окружения:**
   ```env
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

### Вариант B: Google Sheets API

1. **Настройте Google Cloud Project**
2. **Включите Google Sheets API**
3. **Создайте сервисный аккаунт**
4. **Поделитесь таблицей с email сервисного аккаунта**

## 2. Настройка Email

### Gmail (Рекомендуется)

1. **Включите двухфакторную аутентификацию** в Google аккаунте
2. **Создайте пароль приложения:**
   - Перейдите в настройки безопасности Google
   - Выберите "Пароли приложений"
   - Создайте новый пароль для "Mail"
3. **Добавьте переменные окружения:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ADMIN_EMAIL=admin@40gate.com
   ```

### Альтернативные сервисы

Можно использовать другие сервисы:
- **SendGrid**
- **Mailgun**
- **AWS SES**
- **Resend**

## 3. Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
# Email configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@40gate.com

# Google Sheets configuration
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=12345678
```

**Важно:** 
- Скопируйте `env.example` в `.env.local`
- Замените значения на реальные
- Никогда не коммитьте `.env.local` в git

## 4. Тестирование

1. **Запустите проект:** `npm run dev`
2. **Перейдите на страницу контактов:** `http://localhost:3000/contact`
3. **Заполните и отправьте форму**
4. **Проверьте:**
   - Данные появились в Google Sheets
   - Email отправлен пользователю
   - Email отправлен администратору

## 5. Альтернативные решения

### Для Google Sheets:
- **Zapier** - автоматизация без кода
- **Integromat/Make** - визуальная автоматизация
- **Airtable** - альтернатива Google Sheets

### Для Email:
- **Resend** - простой API для email
- **SendGrid** - профессиональный сервис
- **Mailgun** - надежный сервис

## 6. Безопасность

- Никогда не коммитьте `.env.local` в git
- Используйте пароли приложений для Gmail
- Ограничьте доступ к Google Apps Script
- Настройте CORS если необходимо 