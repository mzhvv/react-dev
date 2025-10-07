// src/libs/navigation/navigation.tsx

import { navigationAccumulate } from '@apps'

import type { NavigationSections, NavigationSectionKey } from './types'

export const NAVIGATION_SECTIONS = [
  {
    title: 'Application',
    links: navigationAccumulate.application,
    // links: [...navigationAccumulate.application, ...navigationReactDev] - Циклическая зависимость! ✅
  },
  {
    title: 'Author',
    links: navigationAccumulate.author,
  },
  {
    title: 'Projects',
    links: navigationAccumulate.projects,
  },
  {
    title: 'Development',
    links: navigationAccumulate.development,
  },
  {
    title: 'Secondary',
    links: navigationAccumulate.secondary,
  },
] as const satisfies NavigationSections

const navigationIndexMap = {
  application: 0,
  author: 1,
  projects: 2,
  development: 3,
  secondary: 4,
} as const satisfies Record<NavigationSectionKey, 0 | 1 | 2 | 3 | 4>

export const NAVIGATION_APPLICATION_SECTION = NAVIGATION_SECTIONS[navigationIndexMap.application]
export const NAVIGATION_AUTHOR_SECTION = NAVIGATION_SECTIONS[navigationIndexMap.author]
export const NAVIGATION_PROJECTS_SECTION = NAVIGATION_SECTIONS[navigationIndexMap.projects]
export const NAVIGATION_DEVELOPMENT_SECTION = NAVIGATION_SECTIONS[navigationIndexMap.development]
export const NAVIGATION_SECONDARY_SECTION = NAVIGATION_SECTIONS[navigationIndexMap.secondary]

export const NAVIGATION_APPLICATION = navigationAccumulate.application
export const NAVIGATION_AUTHOR = navigationAccumulate.author
export const NAVIGATION_PROJECTS = navigationAccumulate.projects
export const NAVIGATION_DEVELOPMENT = navigationAccumulate.development
export const NAVIGATION_SECONDARY = navigationAccumulate.secondary
