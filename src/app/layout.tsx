import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const siteUrl = 'https://sunrisekintamani.id'
const siteName = 'Sunrise Kintamani'
const siteDescription =
  'Sewa Jeep 4x4 Kintamani Bali terbaik. Nikmati Sunrise Batur Jeep Tour, Black Lava Adventure, & Pura Segara. Harga paket promo mulai Rp500.000/pack sudah termasuk driver pro & bantu foto.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sunrise Kintamani | Batur Jeep Tour 4x4 Bali Terbaik & Murah',
    template: '%s | Sunrise Kintamani',
  },
  description: siteDescription,
  keywords: [
    'jeep tour kintamani',
    'batur jeep tour',
    'sunrise jeep batur',
    'sewa jeep kintamani',
    'black lava jeep tour',
    'wisata kintamani bali',
    'jeep batur murah',
    'sunrise kintamani',
    'tour gunung batur jeep',
    'pura segara kintamani',
    'jeep 4x4 bali',
    'paket jeep batur',
  ],
  authors: [{ name: 'Sunrise Kintamani', url: siteUrl }],
  creator: 'Sunrise Kintamani',
  publisher: 'Sunrise Kintamani',
  category: 'Travel & Tourism',
  classification: 'Wisata Jeep Tour Kintamani Bali',
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
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName,
    title: 'Sunrise Kintamani | Batur Jeep Tour 4x4 Bali Terbaik & Murah',
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/hero-1.webp`,
        width: 1200,
        height: 630,
        alt: 'Sunrise Kintamani Batur Jeep Tour Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunrise Kintamani | Batur Jeep Tour 4x4 Bali',
    description: siteDescription,
    images: [`${siteUrl}/images/hero-1.webp`],
    creator: '@sunrisekintamani',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  other: {
    'geo.region': 'ID-BA',
    'geo.placename': 'Kintamani, Bangli, Bali, Indonesia',
    'geo.position': '-8.2435;115.3789',
    'ICBM': '-8.2435, 115.3789',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
}

// JSON-LD structured data for Local Business + TouristAttraction
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Sunrise Kintamani Batur Jeep Tour',
      description: siteDescription,
      url: siteUrl,
      telephone: '+6285159771469',
      priceRange: 'Rp500.000',
      currenciesAccepted: 'IDR',
      paymentAccepted: 'Cash, Transfer Bank',
      image: `${siteUrl}/images/hero-1.webp`,
      logo: `${siteUrl}/logob+.webp`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kintamani, Bangli',
        addressLocality: 'Bangli',
        addressRegion: 'Bali',
        postalCode: '80652',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -8.2435,
        longitude: 115.3789,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '04:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        `https://wa.me/6285159771469`,
        `https://instagram.com/sunrise_kintamani.id`,
        `https://tiktok.com/@mybalijeep7`,
      ],
    },
    {
      '@type': 'TouristAttraction',
      '@id': `${siteUrl}/#attraction`,
      name: 'Batur Sunrise Jeep Tour Kintamani',
      description: 'Pengalaman menikmati Golden Sunrise Gunung Batur & Black Lava dari atas Jeep 4x4 di Kintamani Bali.',
      url: siteUrl,
      touristType: ['Family', 'Adventure', 'Group', 'Couple'],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -8.2435,
        longitude: 115.3789,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kintamani',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: 'id-ID',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}