import type { Metadata } from 'next'
import { Instrument_Sans, Tinos } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ContactModalProvider } from '@/components/ContactModalProvider'

// Настройка шрифта Instrument Sans
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

// Настройка шрифта Tinos
const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tinos',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Growth Radin',
  description: 'Одностраничный сайт Growth Radin',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${instrumentSans.variable} ${tinos.variable}`}>
      <body>
        <ContactModalProvider>
          <Navigation />
          {children}
        </ContactModalProvider>
      </body>
    </html>
  )
}
