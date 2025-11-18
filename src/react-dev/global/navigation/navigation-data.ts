// src/react-dev/shared/global/libs/navigation/navigation-data.ts

import { navigationReactDev } from '@react-dev/shared/navigation'
import { navigationAccumulate } from '@apps/accumulators/navigation-accumulate'
import type { NavigationSection } from './types'

// TODO! - Сортировка
const [ui, project0, dashboard01] = navigationAccumulate.development
const [uiComponentVariants] = navigationReactDev.development

const NAVIGATION_SECTIONS = [
  {
    group: 'application', // Приложение
    links: [...navigationReactDev.application, ...navigationAccumulate.application],
  },
  {
    group: 'author', //  Автор
    links: [...navigationReactDev.author, ...navigationAccumulate.author],
  },
  {
    group: 'projects', // Проекты
    links: [...navigationReactDev.projects, ...navigationAccumulate.projects],
  },
  {
    group: 'development',
    links: [ui, uiComponentVariants, project0, dashboard01],
  },
] as const satisfies NavigationSection[]
const [application, author, projects, development] = NAVIGATION_SECTIONS

// TODO! - Педелать что ниже

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
