import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Order from './components/Order'
import Provider from './utils/provider'
import { ChakraProviders } from './utils/chakraProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo-Gaming',
  description:
    'Todo-Gaming E-commerce dedicado a la venta de componentes para tu PC Gamer'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Provider>
        <body
          className={`${inter.className} bg-[#111] text-white min-h-screen `}
        >
          <ChakraProviders>
            <Navbar />
            <Order />
            {children}
            <Footer />
          </ChakraProviders>
        </body>
      </Provider>
    </html>
  )
}
