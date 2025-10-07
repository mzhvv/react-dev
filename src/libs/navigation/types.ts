import type { LucideIcon } from 'lucide-react'

export type NavigationSectionKey =
  | 'application'
  | 'author'
  | 'projects'
  | 'development'
  | 'secondary'

export type NavigationLinkObject<T extends string = string> = {
  path: `/${T}`
  title: string
  icon?: LucideIcon
}

export type NavigationAccumulate = Record<NavigationSectionKey, NavigationLinkObject[]>

// export type NavigationSection = { title: string; links: NavigationLinkObject[] }
// export type NavigationSections = (NavigationSection & {
//   key: NavigationSectionKey
// })[]

export type NavigationSections = {
  key: NavigationSectionKey
  title: string
  links: NavigationLinkObject[]
}[]
