// src/react-dev/shared/global/navigation/navigation-data.ts

import { navigationAccumulate } from '@apps/navigation-accumulate'
import { navigationReactDev } from '@react-dev/app/navigation'

import type { NavigationSections } from './'

const NAVIGATION_SECTIONS = [
  {
    title: 'Application',
    links: [...navigationReactDev.application, ...navigationAccumulate.application],
  },
  {
    title: 'Author',
    links: [...navigationReactDev.author, ...navigationAccumulate.author],
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

const [application, author, projects, development, secondary] = NAVIGATION_SECTIONS

const MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR = [
  application,
  author,
  projects,
  development,
  secondary,
]

const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 = [
  {
    ...application,
    links: application.links.filter(item => item.path !== '/'),
  },
  author,
]
const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 = [projects, development, secondary]

export {
  MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR as NAVIGATION_SECTIONS_FOR_SIDEBAR,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 as NAVIGATION_SECTIONS_FOR_PAGE_1,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 as NAVIGATION_SECTIONS_FOR_PAGE_2,
}
