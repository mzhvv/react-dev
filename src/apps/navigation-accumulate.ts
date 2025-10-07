// src/apps/navigation-accumulate.ts

import type { LucideIcon } from 'lucide-react'

import { navigationAboutReactDev } from './about-react-dev'
import { navigationCollaboration } from './collaboration'
import { navigationPproject01 } from './project-01'
import { navigationDashboard01 } from './dashboard-01'

type NavigationSection = 'reactDev' | 'author' | 'projects' | 'development' | 'secondary'
export type NavigationObject<T extends string = string> = {
  path: T
  title: string
  icon?: LucideIcon
}

export const navigationAccumulate = {
  reactDev: [...navigationAboutReactDev],
  author: [...navigationCollaboration],
  projects: [],
  development: [...navigationPproject01],
  secondary: [...navigationDashboard01],
} as const satisfies Record<NavigationSection, NavigationObject[]>
