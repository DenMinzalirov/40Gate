# ⚡ Быстрый деплой на Vercel

## 🚀 5 минут до продакшена

### 1. Подготовка (1 минута)
```bash
# Убедитесь, что все работает локально
npm run build
npm run lint
```

### 2. Деплой на Vercel (2 минуты)

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Нажмите "New Project"**
3. **Выберите репозиторий** `40Gate`
4. **Нажмите "Import"**

### 3. Настройка переменных (1 минута)

**Добавьте в Environment Variables:**

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@40gate.com
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbweg_N8qZDwj_7PRezzR2GadiYdYl2T-1DNFNkopw20ucp6KhBCQclaCuvf7mw_jO4T/exec
```

### 4. Деплой (1 минута)

1. **Нажмите "Deploy"**
2. **Дождитесь завершения**
3. **Готово! 🎉**

## 🔗 Полезные ссылки

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Документация:** https://vercel.com/docs
- **Поддержка:** https://vercel.com/support

## ✅ Проверка

После деплоя проверьте:
- [ ] Главная страница загружается
- [ ] Контактная форма работает
- [ ] Email отправляется
- [ ] Google Sheets сохраняет данные
- [ ] Аналитика работает (если настроена)

**Ваш сайт готов к продакшену! 🚀** 