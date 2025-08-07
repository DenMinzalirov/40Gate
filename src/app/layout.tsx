import type { Metadata } from 'next'
import { Instrument_Sans, Tinos } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { logEnvironmentVariables } from '@/lib/env-logger'

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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0008D4',
  colorScheme: 'light',
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
    "email": "sales@fortygate.io"
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
  // Логируем переменные окружения при старте (только в development)
  if (typeof window === 'undefined') {
    logEnvironmentVariables()
  }
  
  return (
    <html lang="en" className={`${instrumentSans.variable} ${tinos.variable}`}>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_location: window.location.href,
                    page_title: document.title,
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* Yandex Metrica */}
        {process.env.NEXT_PUBLIC_YANDEX_METRICA_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
            }}
          />
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        
        {/* Yandex Metrica NoScript */}
        {process.env.NEXT_PUBLIC_YANDEX_METRICA_ID && (
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID}`}
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        )}
      </body>
    </html>
  )
}
