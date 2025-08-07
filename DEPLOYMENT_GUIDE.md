# 🚀 Руководство по деплою на Vercel

## ✅ Готово к деплою!

Приложение успешно собирается и готово к деплою на Vercel.

## 📋 Быстрый деплой (5 минут)

### 1. Подготовка ✅
```bash
# Проверено - сборка работает
npm run build
```

### 2. Деплой на Vercel

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Нажмите "New Project"**
3. **Выберите репозиторий** `40Gate` из списка
4. **Нажмите "Import"**

### 3. Настройка переменных окружения

**Добавьте в Environment Variables:**

```env
# Email configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@40gate.com

# Google Sheets configuration
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbweg_N8qZDwj_7PRezzR2GadiYdYl2T-1DNFNkopw20ucp6KhBCQclaCuvf7mw_jO4T/exec

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=12345678
```

### 4. Деплой

1. **Нажмите "Deploy"**
2. **Дождитесь завершения** (2-3 минуты)
3. **Готово! 🎉**

## 🔧 Пост-деплой настройки

### 1. Настройка домена

**Добавление кастомного домена:**
1. **Settings → Domains**
2. **Add Domain** → введите `40gate.com`
3. **Настройте DNS записи:**
   ```
   A    @    76.76.19.19
   CNAME www   cname.vercel-dns.com
   ```

### 2. Настройка SSL

- ✅ **Автоматически** настроен Vercel
- ✅ **Let's Encrypt** сертификаты
- ✅ **HTTP/2** поддержка

### 3. Настройка аналитики

**Google Analytics 4:**
1. Создайте GA4 аккаунт
2. Получите Measurement ID (G-XXXXXXXXXX)
3. Добавьте в переменные окружения

**Yandex Metrica:**
1. Создайте счетчик в Yandex Metrica
2. Получите ID счетчика
3. Добавьте в переменные окружения

## 📊 Мониторинг и аналитика

### 1. Vercel Analytics

- **Автоматически включен** для всех проектов
- **Core Web Vitals** мониторинг
- **Performance insights**

### 2. Логи и ошибки

- **Function Logs** - логи API routes
- **Build Logs** - логи сборки
- **Error Tracking** - автоматическое отслеживание ошибок

## 🔄 Автоматические деплои

### 1. Git Integration

- ✅ **Автоматический деплой** при push в `main`
- ✅ **Preview деплои** для pull requests
- ✅ **Rollback** к предыдущим версиям

### 2. Branch Protection

**Настройте в GitHub:**
1. **Settings → Branches**
2. **Add rule** для `main`
3. **Require pull request reviews**
4. **Require status checks to pass**

## 🚨 Troubleshooting

### Частые проблемы:

1. **Build fails**
   - ✅ Проверено - сборка работает
   - Проверьте логи сборки в Vercel
   - Убедитесь, что все зависимости установлены

2. **Environment variables not working**
   - Проверьте названия переменных
   - Убедитесь, что они добавлены для правильной среды
   - Перезапустите деплой

3. **API routes not working**
   - Проверьте логи функций в Vercel
   - Убедитесь, что переменные окружения настроены
   - Проверьте CORS настройки

### Полезные команды:

```bash
# Локальная проверка сборки
npm run build

# Проверка типов
npx tsc --noEmit

# Линтинг
npm run lint
```

## 📈 Оптимизация производительности

### 1. Image Optimization

- ✅ **Автоматическая оптимизация** изображений
- ✅ **WebP формат** для современных браузеров
- ✅ **Lazy loading** по умолчанию

### 2. Caching

- ✅ **Edge Caching** для статических файлов
- ✅ **CDN** глобальное распределение
- ✅ **Cache headers** автоматически настроены

### 3. Bundle Analysis

```bash
# Анализ размера бандла
npm run build
# Проверьте .next/analyze/ для деталей
```

## 🔐 Безопасность

### 1. Environment Variables

- ✅ **Зашифрованы** в Vercel
- ✅ **Не доступны** в клиентском коде
- ✅ **Разделены** по средам

### 2. Headers Security

**Автоматически настроены:**
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📞 Поддержка

### Полезные ссылки:

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

### Контакты:

- **Email:** support@vercel.com
- **Discord:** [Vercel Community](https://discord.gg/vercel)
- **GitHub:** [Vercel/vercel](https://github.com/vercel/vercel)

## ✅ Чек-лист деплоя

- [x] Репозиторий подключен к Vercel
- [ ] Переменные окружения настроены
- [ ] Домен настроен (если нужен)
- [ ] SSL сертификат активен
- [ ] Аналитика подключена
- [ ] Мониторинг настроен
- [ ] Автоматические деплои работают
- [ ] Тестирование завершено

## 🎯 Результат

После деплоя у вас будет:
- ✅ **Профессиональный сайт** на Vercel
- ✅ **Автоматические деплои** из Git
- ✅ **Глобальный CDN** для быстрой загрузки
- ✅ **SSL сертификаты** автоматически
- ✅ **Мониторинг производительности**
- ✅ **Аналитика и логи**

**Готово к продакшену! 🎉** 