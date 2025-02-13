import './globals.css'
import { Roboto, Montserrat, Lato } from 'next/font/google'
import type { Metadata } from 'next'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Sites para Arquitetos | Destaque-se no Mercado Digital',
  description: 'Criamos sites profissionais e modernos para arquitetos que desejam atrair mais clientes e se destacar no mercado digital.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${montserrat.variable} ${lato.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
