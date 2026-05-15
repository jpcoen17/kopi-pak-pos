import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Kopi Pakpos Nol Km — Heritage Coffee Jogja',
  description: 'Kopi Pakpos Nol Km — Tempat nongkrong terbaik di Yogyakarta. Coffee shop heritage dengan cita rasa premium, suasana vintage Jogja, buka hingga dini hari.',
  keywords: 'kopi pakpos, coffee jogja, kopi yogyakarta, nongkrong jogja, cafe vintage jogja, kopi heritage',
  openGraph: {
    title: 'Kopi Pakpos Nol Km',
    description: 'Heritage Coffee Shop Yogyakarta — Buka 07:00–01:00',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  )
}
