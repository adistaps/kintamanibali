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

const siteUrl = 'https://elorafting.id'
const siteName = 'Rafting Elo Magelang'
const siteDescription =
  'Arung jeram terbaik dan termurah di Magelang. Rafting Sungai Elo cocok untuk wisata keluarga, komunitas, dan company gathering dekat Borobudur. Harga mulai Rp650.000/boat. Rekomendasi destinasi main di Magelang!'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rafting Elo Magelang | Arung Jeram Termurah & Terbaik Dekat Borobudur',
    template: '%s | Rafting Elo Magelang',
  },
  description: siteDescription,
  keywords: [
    'arung jeram magelang',
    'rafting magelang',
    'arung jeram termurah magelang',
    'arung jeram terbaik magelang',
    'arung jeram murah',
    'wisata magelang',
    'destinasi main magelang',
    'rekomendasi wisata magelang',
    'rafting sungai elo',
    'sungai elo magelang',
    'wisata arung jeram magelang',
    'rafting dekat borobudur',
    'paket rafting magelang',
    'rafting keluarga magelang',
    'rafting murah magelang',
    'arung jeram sungai elo',
    'wisata petualangan magelang',
    'company gathering magelang',
    'outbound magelang',
    'rafting elo',
  ],
  authors: [{ name: 'Rafting Elo', url: siteUrl }],
  creator: 'Rafting Elo',
  publisher: 'Rafting Elo',
  category: 'Travel & Tourism',
  classification: 'Wisata Arung Jeram Magelang',
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
    title: 'Rafting Elo Magelang | Arung Jeram Termurah & Terbaik Dekat Borobudur',
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/rafting-1.webp`,
        width: 1200,
        height: 630,
        alt: 'Arung Jeram Sungai Elo Magelang – Rafting Terbaik Dekat Borobudur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafting Elo Magelang | Arung Jeram Termurah & Terbaik',
    description: siteDescription,
    images: [`${siteUrl}/images/rafting-1.webp`],
    creator: '@elorafting',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/logob+.webp',
    apple: '/logob+.webp',
  },
  // GEO tags (injected via <head> through other: field isn't standard, use Script instead)
  other: {
    'geo.region': 'ID-JT',
    'geo.placename': 'Magelang, Jawa Tengah, Indonesia',
    'geo.position': '-7.4798;110.2174',
    'ICBM': '-7.4798, 110.2174',
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
      name: 'Rafting Elo Magelang',
      description: siteDescription,
      url: siteUrl,
      telephone: '+6285159771469',
      priceRange: 'Rp650.000',
      currenciesAccepted: 'IDR',
      paymentAccepted: 'Cash, Transfer Bank',
      image: `${siteUrl}/images/rafting-1.webp`,
      logo: `${siteUrl}/logob+.webp`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Desa Pare, Kranggan, Sudiropaten, Kec. Secang',
        addressLocality: 'Magelang',
        addressRegion: 'Jawa Tengah',
        postalCode: '56152',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -7.4812,
        longitude: 110.2185,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '17:00',
        },
      ],
      sameAs: [
        `https://wa.me/6285159771469`,
      ],
    },
    {
      '@type': 'TouristAttraction',
      '@id': `${siteUrl}/#attraction`,
      name: 'Arung Jeram Sungai Elo Magelang',
      description: 'Wisata arung jeram terbaik dan termurah di Magelang, dekat Borobudur. Cocok untuk keluarga, remaja, dan rombongan.',
      url: siteUrl,
      touristType: ['Family', 'Adventure', 'Group'],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -7.4798,
        longitude: 110.2174,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Magelang',
        addressRegion: 'Jawa Tengah',
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