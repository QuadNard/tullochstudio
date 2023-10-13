




import Provider from '@/server/client-provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/server/auth';
import TanstackProvider from '@/server/query-provider';







const inter = Inter({ subsets: ['latin'] })



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className='antialiased'>
        <body>
            <Provider session={session}>      
              <TanstackProvider>
                <main>{children}</main>
              </TanstackProvider>
            </Provider> 
        </body>
    </html>
  )
}
