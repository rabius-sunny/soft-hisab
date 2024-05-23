import { Nunito } from 'next/font/google'

import './globals.css'

import type { Metadata } from 'next'
import Providers from '~/configs/Providers'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soft Hisab',
  description: 'Billing & Invoice Management Software'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
