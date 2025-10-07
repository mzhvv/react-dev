// src/libs/navigation/navigation-2.tsx

import { navigationAccumulate } from '@apps'

import type { NavigationSections, NavigationSectionKey } from './types'

export const NAVIGATION_SECTIONS = [
  {
    key: 'application',
    title: 'Application',
    links: navigationAccumulate.application,
  },
  {
    key: 'author',
    title: 'Author',
    links: navigationAccumulate.author,
  },
  {
    key: 'projects',
    title: 'Projects',
    links: [],
  },
  {
    key: 'development',
    title: 'Development',
    links: navigationAccumulate.development,
  },
  {
    key: 'secondary',
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
// NAVIGATION_..._SECTION - во всех ненужный key

export const NAVIGATION_APPLICATION = navigationAccumulate.application
export const NAVIGATION_AUTHOR = navigationAccumulate.author
export const NAVIGATION_PROJECTS = navigationAccumulate.projects
export const NAVIGATION_DEVELOPMENT = navigationAccumulate.development
export const NAVIGATION_SECONDARY = navigationAccumulate.secondary
