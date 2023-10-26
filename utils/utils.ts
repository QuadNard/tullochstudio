import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const randomRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
}

const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export { getRandom }
