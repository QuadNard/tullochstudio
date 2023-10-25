import React from "react"
import Image from "next/image"

export default function LayoutProvider({ children }) {
  return (
    <div className="text-default-color-gray min-h-screen">
      <div className="gradient-home pointer fixed inset-0 overflow-x-hidden dark:hidden">
        <Image
          src={"/imgs/bg-waves.webp"}
          alt=""
          fill
          className="object-cover opacity-[15%]"
          priority
        />
        {children}
      </div>
    </div>
  )
}
