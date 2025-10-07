import type { LucideIcon } from 'lucide-react'

export type NavigationSection = 'application' | 'author' | 'projects' | 'development' | 'secondary'

export type NavigationObject<T extends string = string> = {
  path: `/${T}`
  title: string
  icon?: LucideIcon
}

export type NavigationAccumulate = Record<NavigationSection, NavigationObject[]>

export type NavigationArray = {
  key: NavigationSection
  title: string
  links: NavigationObject[]
}
