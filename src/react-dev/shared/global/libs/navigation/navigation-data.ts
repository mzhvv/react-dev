// src/react-dev/shared/global/libs/navigation/navigation-data.ts

import { navigationReactDev } from '@react-dev/shared/libs/navigation'
import { navigationAccumulate } from '@apps/accumulators/navigation-accumulate'

import type { NavigationSection } from './types'

// TODO!
const [ui, project0, dashboard01] = navigationAccumulate.development
const navigationDevelopmentUI = [ui]
const RestNavigationDevelopment = [project0, dashboard01]

const NAVIGATION_SECTIONS = [
  {
    title: 'Приложение ', // Application
    links: [...navigationReactDev.application, ...navigationAccumulate.application],
  },
  {
    title: 'Автор', // Author
    links: [...navigationReactDev.author, ...navigationAccumulate.author],
  },
  {
    title: 'Проекты', // Projects
    links: [...navigationReactDev.projects],
  },
  {
    title: 'Development',
    links: [
      ...navigationDevelopmentUI,
      ...navigationReactDev.development,
      ...RestNavigationDevelopment,
    ],
  },
] as const satisfies NavigationSection[]

const [application, author, projects, development] = NAVIGATION_SECTIONS

//

const MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR = [application, author, projects, development]

const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 = [
  {
    ...application,
    links: application.links.filter(item => item.path !== '/'),
  },
  author,
]
const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 = [projects, development]

export {
  MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR as NAVIGATION_SECTIONS_FOR_SIDEBAR,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 as NAVIGATION_SECTIONS_FOR_PAGE_1,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 as NAVIGATION_SECTIONS_FOR_PAGE_2,
}
