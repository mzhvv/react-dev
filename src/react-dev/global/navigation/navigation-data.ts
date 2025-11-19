// src/react-dev/global/navigation/navigation-data.ts

import { reactDevNavigation } from '@react-dev/shared/navigation'
import { navigationAccumulate } from '@apps/accumulators/navigation-accumulate'

import type { SectionNavigation } from './types'

// TODO! - Сортировка
const [ui, project0, dashboard01] = navigationAccumulate.development
const [uiComponentVariants] = reactDevNavigation.development
const developmentSort = [ui, uiComponentVariants, project0, dashboard01]

const NAVIGATION_SECTIONS = [
  {
    group: 'application',
    links: [...reactDevNavigation.application, ...navigationAccumulate.application],
  },
  {
    group: 'author',
    links: [...reactDevNavigation.author, ...navigationAccumulate.author],
  },
  {
    group: 'projects',
    links: [...reactDevNavigation.projects, ...navigationAccumulate.projects],
  },
  {
    group: 'development',
    links: developmentSort,
  },
] as const satisfies SectionNavigation[]

// TODO! - Педелать что ниже
const [application, author, projects, development] = NAVIGATION_SECTIONS

const MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR = [application, author, projects, development]
const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 = [
  {
    ...application,
    links: application.links.filter(item => item !== '/'),
  },
  author,
]
const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 = [projects, development]

export {
  MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR as NAVIGATION_SECTIONS_FOR_SIDEBAR,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 as NAVIGATION_SECTIONS_FOR_PAGE_1,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 as NAVIGATION_SECTIONS_FOR_PAGE_2,
}
