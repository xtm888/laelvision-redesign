import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data/siteData'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['ophtalmologie', 'lunettes', 'vision', 'Kinshasa', 'RDC', 'optique', 'oeil'],
  authors: [{ name: 'LAËL VISION' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="pt-[72px] lg:pt-[112px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
