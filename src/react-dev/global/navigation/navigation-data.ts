// src/react-dev/global/navigation/navigation-data.ts

// Аккумуляторы
import { reactDevNavigation } from '@react-dev/shared/navigation'
import { navigationAccumulate } from '@apps/accumulators/navigation-accumulate'

import type { SectionsNavigation, SectionNavigationKey } from './types'
import { sortNavigation } from './navigation-sort'

// Формирование навигационных секций
const navigationSections = [
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
] as const satisfies SectionsNavigation[]

// Индексы секций для безопасного доступа
const sectionIndex = {
  application: 0,
  author: 1,
  projects: 2,
  development: 3,
} as const satisfies Record<SectionNavigationKey, number>

// Сортировка ссылок внутри секций
const sortedNavigationSections = sortNavigation(navigationSections)

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
