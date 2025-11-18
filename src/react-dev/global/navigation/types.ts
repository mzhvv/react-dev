// import type { LucideIcon } from 'lucide-react'

// export type NavigationAccumulate = Record<NavigationSectionKey, NavigationLink[]>

// export type NavigationLink<T extends string = string> = {
//   path: `/${T}`
//   title: string
//   icon?: LucideIcon
// }

export type NavigationSectionKey = 'application' | 'author' | 'projects' | 'development'
export type NavigationSection = { group: NavigationSectionKey; links: string[] }

export type NavigationParentPath<T extends string> = `/${T}`
export type NavigationChildrenPath<P extends string, C extends string> = `/${P}/${C}`
