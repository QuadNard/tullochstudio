export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="text-default-color-gray min-h-screen">
      <div className="bg-[url('/noise.png')] overflow-x-hidden inset-0  pointer dark:hidden">
        {children}
      </div>
    </section>
  )
}
