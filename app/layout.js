import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayck Luciano Soares',
  description: 'Portifolio profissional de um desenvolvedor front-end e backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="AMjw5Uv5hnkDDCoWeiSZ0jQIVtQg4RbSA05s0dLSNLg" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
