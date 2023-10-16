import Provider from "@/server/client-provider"
import "./globals.css"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/server/auth"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" className="antialiased">
      <body>
        <Provider session={session}>
            <main>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
