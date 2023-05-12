import { Providers } from '@/redux/provider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Order from './components/Order'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Providers>
        <body className={`${inter.className} bg-[#111] text-white`}>
          <Navbar />
          <Order />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
