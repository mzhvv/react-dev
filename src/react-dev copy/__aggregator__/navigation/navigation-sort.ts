// src/react-dev/global/navigation/navigation-sort.ts

import type { SectionsNavigation, SectionNavigationKey, AllPaths } from './types'

const EXACT_MATCH_PRIORITIES: Record<SectionNavigationKey, Partial<Record<AllPaths, number>>> = {
  application: { '/': 1, '/about': 2 },
  author: { '/collaboration': 1 },
  projects: {},
  development: {
    '/ui': 1,
    '/ui-component-variants': 2,
    '/project-0': 3,
    '/dashboard-01': 4,
  },
}

function getPathPriorityForGroup(group: SectionNavigationKey, path: AllPaths): number {
  const exactPriority = EXACT_MATCH_PRIORITIES[group][path]
  return exactPriority ?? 999
}

export function sortNavigation(sections: SectionsNavigation[]): SectionsNavigation[] {
  return sections.map(section => ({
    ...section,
    links: [...section.links].sort(
      (a, b) =>
        getPathPriorityForGroup(section.section, a) - getPathPriorityForGroup(section.section, b)
    ),
  }))
}
