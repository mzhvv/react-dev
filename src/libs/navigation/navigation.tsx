import { navigationAccumulate } from '@apps'

import type { NavigationArray } from './types'

export const NAVIGATION_ARRAY = [
  {
    key: 'application',
    title: 'application',
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
] as const satisfies NavigationArray[]
