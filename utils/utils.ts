
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const randomRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min

