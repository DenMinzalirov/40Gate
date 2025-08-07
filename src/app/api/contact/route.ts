import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { saveToGoogleSheets, GoogleSheetsData } from '@/lib/google-sheets'

// Типы для данных формы
interface ContactFormData {
    email: string
    companyName: string
    companyWebsite: string
    industry: string
    volume: string
    cards: boolean
    apms: boolean
    partnership: boolean
}

// Функция для отправки email
async function sendEmail(data: ContactFormData) {
    try {
        // Создаем транспортер для отправки email
        const transporter = nodemailer.createTransport({
            service: 'gmail', // или другой сервис
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        // Email для пользователя
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: 'Thank you for contacting 40Gate!',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e1e1e;">Thank you for contacting 40Gate!</h2>
          <p>Dear ${data.companyName || 'Valued Customer'},</p>
          <p>We have successfully received your inquiry and our team will be in touch with you soon.</p>
          <p><strong>Your submitted information:</strong></p>
          <ul>
            <li><strong>Company:</strong> ${data.companyName}</li>
            <li><strong>Website:</strong> ${data.companyWebsite}</li>
            <li><strong>Industry:</strong> ${data.industry}</li>
            <li><strong>Estimated Volume:</strong> ${data.volume} EUR/month</li>
            <li><strong>Interests:</strong> ${[
                    data.cards && 'Cards',
                    data.apms && 'APMs',
                    data.partnership && 'Partnership'
                ].filter(Boolean).join(', ')}</li>
          </ul>
          <p>We look forward to working with you!</p>
          <p>Best regards,<br>The 40Gate Team</p>
        </div>
      `,
        }

        // Email для администратора
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Contact Form Submission - 40Gate',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e1e1e;">New Contact Form Submission</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>Website:</strong> ${data.companyWebsite}</p>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Estimated Volume:</strong> ${data.volume} EUR/month</p>
          <p><strong>Interests:</strong></p>
          <ul>
            <li>Cards: ${data.cards ? 'Yes' : 'No'}</li>
            <li>APMs: ${data.apms ? 'Yes' : 'No'}</li>
            <li>Partnership: ${data.partnership ? 'Yes' : 'No'}</li>
          </ul>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
        }

        // Отправляем оба email
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions),
        ])

        return true
    } catch (error) {
        console.error('Error sending email:', error)
        return false
    }
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactFormData = await request.json()

        // Валидация данных
        if (!data.email || !data.companyName) {
            return NextResponse.json(
                { error: 'Email and company name are required' },
                { status: 400 }
            )
        }

        // Подготавливаем данные для Google Sheets
        const sheetsData: GoogleSheetsData = {
            email: data.email,
            companyName: data.companyName,
            companyWebsite: data.companyWebsite,
            industry: data.industry,
            volume: data.volume,
            cards: data.cards ? 'Yes' : 'No',
            apms: data.apms ? 'Yes' : 'No',
            partnership: data.partnership ? 'Yes' : 'No',
            timestamp: new Date().toISOString(),
        }

        // Сохраняем в Google Sheets
        const sheetsSaved = await saveToGoogleSheets(sheetsData)

        // Отправляем email
        // const emailSent = await sendEmail(data)

        // if (sheetsSaved && emailSent) {
        if (sheetsSaved) {
            return NextResponse.json(
                { message: 'Form submitted successfully' },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                {
                    message: 'Form submitted with some issues',
                    sheetsSaved,
                    //   emailSent
                },
                { status: 207 }
            )
        }
    } catch (error) {
        console.error('Error processing contact form:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
} 