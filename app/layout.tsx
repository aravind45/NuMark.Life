import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NuMark Biotechnology - AI-Powered Cancer Diagnostics',
  description: 'Revolutionizing cancer care through AI-powered diagnostics and RNA analysis. Advanced biotechnology solutions for early cancer detection and personalized treatment.',
  keywords: 'biotechnology, cancer diagnostics, AI, RNA analysis, genetic data, cancer care, medical technology',
  authors: [{ name: 'NuMark Biotechnology' }],
  openGraph: {
    title: 'NuMark Biotechnology - AI-Powered Cancer Diagnostics',
    description: 'Revolutionizing cancer care through AI-powered diagnostics and RNA analysis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}