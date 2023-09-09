import './globals.css'
import { Montserrat } from 'next/font/google'

const poppins = Montserrat({ subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'Welcome to Airniro',
  description: 'This is a peer-to-peer betting platform',
  keywords: "entertainment, sport, live style"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
