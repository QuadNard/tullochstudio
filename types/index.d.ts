import { ReactNode } from "react"

type IconType = () => JSX.Element
export type CategoryAttributes = {
  id: string
  title: string
  slug: string
  image?: IconType
}

export interface User {
  handle?: string
  name?: string
  role?: any
  id: string
  image?: string
}

export interface Skill {
  name: string
  image: string
  secondImage?: string
}

export interface Experience {
  id: number
  images: ExperienceImage[]
  name: string
  date: string
  place: string
  description: string
  modal: {
    longerDescription: string
  }
}

export interface ExperienceImage {
  image: string
  smallImage?: string
}

export interface Social {
  icon: IconType
  url: string
}
