import type { LucideIcon } from 'lucide-react'

export type NavigationSectionKey = 'application' | 'author' | 'projects' | 'development'

export type NavigationLink<T extends string = string> = {
  path: `/${T}`
  title: string
  icon?: LucideIcon
}

export type NavigationAccumulate = Record<NavigationSectionKey, NavigationLink[]>

export type NavigationSection = { title: string; links: NavigationLink[] }
