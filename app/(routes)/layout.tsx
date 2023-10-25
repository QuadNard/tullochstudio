import LayoutProvider from "../providers/wrapper"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}
