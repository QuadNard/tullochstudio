import React from "react"

export default function LayoutProvider({ children }) {
  return (
    <section className="text-default-color-gray min-h-screen">
      <div className="bg-dots pointer inset-0 overflow-x-hidden dark:hidden">
        {children}
      </div>
    </section>
  )
}
