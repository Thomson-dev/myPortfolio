import React from 'react'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'FolioGPT — Thomson',
  description: 'AI Portfolio Chatbot',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.className}>
      <body>{children}</body>
    </html>
  )
}
