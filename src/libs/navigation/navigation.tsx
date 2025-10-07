import type { LucideIcon } from 'lucide-react'

import { navigationAccumulate as accumulateNavigationProjects } from '@apps'

export type NavigationSection = 'reactDev' | 'author' | 'projects' | 'development' | 'secondary'

export type NavigationObject<T extends string = string> = {
  path: T
  title: string
  icon?: LucideIcon
}

export type NavigationArray = {
  key: keyof typeof accumulateNavigationProjects
  title: string
  links: NavigationObject[]
}

export const NAVIGATION_ARRAY = [
  {
    key: 'reactDev',
    title: 'react-dev',
    links: accumulateNavigationProjects.reactDev,
  },
  {
    key: 'author',
    title: 'Author',
    links: accumulateNavigationProjects.author,
  },
  {
    key: 'projects',
    title: 'Projects',
    links: [],
  },
  {
    key: 'development',
    title: 'Development',
    links: accumulateNavigationProjects.development,
  },
  {
    key: 'secondary',
    title: 'Secondary',
    links: accumulateNavigationProjects.secondary,
  },
] as const satisfies NavigationArray[]
