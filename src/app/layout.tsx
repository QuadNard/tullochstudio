
import StickyCursor from '@/components/ui/stickyCursor'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <div id='bkg' className='bg-default-bkg h-screen dark:bg-black'>
          <div className=' text-regal-purple bg-default-bkg bg-gradient-blue dark:bg-gradient-gotham antialiased'>
              {children}
          </div>
          </div>
        </body>
    </html>
  )
}
