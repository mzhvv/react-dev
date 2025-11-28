// src/react-dev/__aggregator__/navigation/navigation-data.ts

import type { SectionNavigationKey, RootPath } from '@libs/navigation'
import type { AppsDomainNavigation } from '@accumulators/types'

import { navigationAccumulate } from '@accumulators/navigation'
import { reactDevNavigation } from '@react-dev/shared/navigation'

import { sortNavigation } from './navigation-sort'

export type NavigationAggregate = {
  section: SectionNavigationKey
  links: Array<RootPath | AppsDomainNavigation>
}[]

// Формирование навигационных секций
const navigationAggregate = [
  {
    section: 'application',
    links: [...reactDevNavigation.application, ...navigationAccumulate.application],
  },
  {
    section: 'author',
    links: [...reactDevNavigation.author, ...navigationAccumulate.author],
  },
  {
    section: 'projects',
    links: [...reactDevNavigation.projects, ...navigationAccumulate.projects],
  },
  {
    section: 'development',
    links: [...reactDevNavigation.development, ...navigationAccumulate.development],
  },
] as const satisfies NavigationAggregate

//------------------------------------------------------------------------------

// Индексы секций для безопасного доступа
const sectionIndex = {
  application: 0,
  author: 1,
  projects: 2,
  development: 3,
} as const satisfies Record<SectionNavigationKey, number>

// Сортировка ссылок внутри секций
const sortedNavigationSections = sortNavigation(navigationAggregate)

export const SIDEBAR_NAVIGATION = sortedNavigationSections
export const PAGE_NAVIGATION = [
  [
    {
      ...sortedNavigationSections[sectionIndex.application],
      links: sortedNavigationSections[sectionIndex.application].links.filter(item => item !== '/'),
    },
    sortedNavigationSections[sectionIndex.author],
  ],
  [
    sortedNavigationSections[sectionIndex.projects],
    sortedNavigationSections[sectionIndex.development],
  ],
]
