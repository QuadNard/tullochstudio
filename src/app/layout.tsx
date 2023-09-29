



import ProvidersWrapper from '@/components/clients/Providers'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
   


  return (
    <html lang="en" className='antialiased'>
        <body>
            <ProvidersWrapper>
                {children}
            </ProvidersWrapper>
        </body>
    </html>
  )
}
