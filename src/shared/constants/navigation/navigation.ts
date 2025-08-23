// src/shared/constants/navigation/navigation.ts

import type { ConfigRoutes_Entry } from '@/shared/config/routes'
import { configRoutesAPI } from '@/shared/config/routes'

type RoutePath<T> = T extends { path: infer K extends string } ? K : never
type ValuesOf<T> = T[keyof T]
type ExtractPaths<T> = RoutePath<ValuesOf<T>>

function buildNavigation<T extends Record<string, ConfigRoutes_Entry>>(routes: T) {
  return Object.values(routes)
    .map(r => r.path)
    .filter((p): p is NonNullable<typeof p> => Boolean(p)) as ExtractPaths<T>[]
} // => пример: ( "ui" | "redux" )[] Идентичен ['ui', 'redux']

export const DEV_DOMAIN_API = {
  HEADER_KEY: 'dev',
  NAVIGATION_KEYS: buildNavigation(configRoutesAPI.applicationsDomainsRoutes.devLayout.children), // или configRoutesAPI.allRoutes.devLayout.children,
} as const satisfies {
  HEADER_KEY: typeof configRoutesAPI.applicationsDomainsRoutes.devLayout.path
  NAVIGATION_KEYS: ExtractPaths<
    typeof configRoutesAPI.applicationsDomainsRoutes.devLayout.children
  >[]
}

export const PROJECTS_DOMAIN_API = {
  HEADER_KEY: 'projects',
  NAVIGATION_KEYS: buildNavigation(
    configRoutesAPI.applicationsDomainsRoutes.projectsLayout.children
  ), // или configRoutesAPI.allRoutes.projectsLayout.children,
} as const satisfies {
  HEADER_KEY: typeof configRoutesAPI.applicationsDomainsRoutes.projectsLayout.path
  NAVIGATION_KEYS: ExtractPaths<
    typeof configRoutesAPI.applicationsDomainsRoutes.projectsLayout.children
  >[]
}
