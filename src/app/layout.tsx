import type { Metadata } from 'next'
import { Instrument_Sans, Tinos } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

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
  title: '40Gate - Payment Gateway Platform | Build bridges, not barriers',
  description: '40Gate is a leading payment gateway platform offering over 300+ payment methods. Connect with 1000+ merchants, 30+ countries, and grow your business with our comprehensive payment solutions.',
  keywords: [
    'payment gateway',
    'payment processing',
    '40Gate',
    'payment platform',
    'merchant services',
    'payment methods',
    'payment solutions',
    'payment technology',
    'payment orchestration',
    'fraud monitoring',
    'chargeback prevention',
    'payment infrastructure',
    'payment API',
    'payment integration',
    'payment processing platform'
  ],
  authors: [{ name: '40Gate' }],
  creator: '40Gate',
  publisher: '40Gate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://40gate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '40Gate - Payment Gateway Platform | Build bridges, not barriers',
    description: '40Gate is a leading payment gateway platform offering over 300+ payment methods. Connect with 1000+ merchants, 30+ countries, and grow your business with our comprehensive payment solutions.',
    url: 'https://40gate.com',
    siteName: '40Gate',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '40Gate Payment Gateway Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '40Gate - Payment Gateway Platform',
    description: '40Gate is a leading payment gateway platform offering over 300+ payment methods. Connect with 1000+ merchants, 30+ countries, and grow your business.',
    images: ['/logo.png'],
    creator: '@40gate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'payment processing',
  classification: 'payment gateway platform',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0008D4',
  colorScheme: 'light',
  manifest: '/manifest.json',
}

// Структурированные данные для SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "40Gate",
  "alternateName": "40Gate Payment Gateway",
  "url": "https://40gate.com",
  "logo": "https://40gate.com/logo.png",
  "description": "Leading payment gateway platform offering over 300+ payment methods",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@forty.gate"
  },
  "sameAs": [
    "https://twitter.com/40gate",
    "https://linkedin.com/company/40gate"
  ],
  "serviceType": "Payment Gateway Platform",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Payment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Payment Processing",
          "description": "Over 300+ payment methods"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fraud Monitoring",
          "description": "Advanced fraud detection and prevention"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chargeback Prevention",
          "description": "Comprehensive chargeback management"
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${tinos.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0008D4" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
