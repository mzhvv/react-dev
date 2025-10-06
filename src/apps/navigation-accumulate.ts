// src/apps/navigation-accumulate.ts

import { navigationPproject01 } from './project-01'
import { navigationDashboard01 } from './dashboard-01'

export type NavigationObject<T extends string = string> = {
  path: T
  title: string
}

export const navigationAccumulate = {
  main: [...navigationPproject01],
  secondary: [...navigationDashboard01],
} as const satisfies Record<'main' | 'secondary', NavigationObject[]>
