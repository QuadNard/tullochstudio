"use client"

import React from "react"

import Link from "next/link"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { FaBeer } from "react-icons/fa"

interface IconTypeProps {
  width: number
  height: number
  color: string
  className?: string
}

type IconType = (props: IconTypeProps) => JSX.Element

type Props = {
  variant?:
    | "default"
    | "outline"
    | "primary"
    | "delete"
    | "recording"
    | "comment"
    | "ghost"
    | null
  size?: "default" | "sm" | "lg" | "square" | null
  raduis?: "default" | "sm" | "lg" | null
  className?: string
  label: string
  disabled?: boolean
  icon?: React.ReactNode | IconType
  isColor?: boolean
}

const buttonVariants = cva(
  "active:scale-95 space-x-2 inline-flex items-center justify-center rounded-md text-sm font-medium  cursor-pointer leading-none transition-all",
  {
    variants: {
      variant: {
        default:
          "text-gray-700 hover:text-gray-1000 shadow-xs bg-white border border-gray-400 border-opacity-30 dark:border-gray-700 dark:hover:border-gray-600 dark:bg-white dark:bg-opacity-10 dark:text-gray-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm",
        outline: "",
        primary:
          "text-white hover:text-white shadow-xs bg-blue-500 border border-blue-600 dark:border-blue-400 dark:border-opacity-50 hover:shadow-sm",
        delete:
          "bg-white border border-gray-200 dark:border-red-500 dark:hover:border-red-500  dark:bg-red-500 dark:border-opacity-20 dark:bg-opacity-10 text-red-500 hover:border-red-500 hover:text-white hover:bg-red-600 focus:bg-red-600 dark:focus:text-white",
        recording:
          "bg-green-500 border border-green-600 dark:border-green-500 dark:hover:border-green-500 dark:bg-green-500 dark:border-opacity-20 dark:bg-opacity-10  text-white hover:bg-green-600",
        comment: "",
        ghost:
          "text-gray-700 hover:text-gray-1000 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white",
      },
      size: {
        default: "px-4 py-2 text-sm",
        sm: "px-2.5 py-1.5 text-xs",
        lg: "px-4 py-3 text-sm",
        square: "p-2 text-sm",
      },
      raduis: {
        default: "rounded-md",
        sm: "rounded",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      raduis: "default",
    },
  }
)

function Button({
  label,
  variant = "default",
  size = "default",
  raduis = "default",
  className,
  disabled,
  icon,
  isColor,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ variant, raduis, size, className }))}
    >
      {typeof icon === "function"
        ? icon({ width: 20, height: 20, color: "black" })
        : icon}

      <h1 className="p-1">{label}</h1>
    </button>
  )
}

export default Button
