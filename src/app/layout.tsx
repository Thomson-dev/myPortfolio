import React from 'react'
import { Andika } from 'next/font/google'
import './globals.css'

const andika = Andika({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 
  'swap',
})

export const metadata = {
  title: 'FolioGPT — Thomson',
  description: 'AI Portfolio Chatbot',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={andika.className}>
      <body>{children}</body>
    </html>
  )
}
