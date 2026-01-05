import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Code Helper',
  description: 'My code helper is a web app created using next js to get working solutions of code any time.',
  other:{
    "google-site-verification":"vTASVyW20Aa0vivmopJUM0Y99xvphA4CwVnQ5v9hg7Q"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
