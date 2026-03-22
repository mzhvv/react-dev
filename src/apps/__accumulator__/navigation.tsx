// src/apps/__accumulator__/navigation.tsx

import type { NavigationLinkObject } from '@mzhvv/libs/routers/react-router/navigation/builders'
import {
  createNavigationSection,
  createNavigationDomainLinkObject,
} from '@mzhvv/libs/routers/react-router/navigation/builders'

import type { ExtractNavigationSection } from '@core/configs/framework/dataConfig/navigation'
import { NAVIGATION_SECTION_IDS } from '@core/configs/framework/dataConfig/navigation'

import { tamplateAppRoute } from '@apps/@mzhvv/template-app'
import { examplesRoute } from '@apps/@mzhvv/examples'

const rootNavigation = {
  relativePath: '/',
  absolutePath: '/',
  constKey: 'root',
} as const satisfies NavigationLinkObject<string>

const appsDomainOnlyNavigation = [
  createNavigationSection<ExtractNavigationSection<'projects'>>({
    section: { id: NAVIGATION_SECTION_IDS.PROJECTS },
    links: [
      // { relativePath: '/', absolutePath: '/', constKey: 'home' },
      // { relativePath: 'docs', absolutePath: '/docs', constKey: 'docs' },
    ],
  }),

  createNavigationSection<ExtractNavigationSection<'development'>>({
    section: { id: NAVIGATION_SECTION_IDS.DEVELOPMENT },
    links: [
      createNavigationDomainLinkObject(examplesRoute.path),
      createNavigationDomainLinkObject(tamplateAppRoute.path!),
      // { relativePath: 'ui', absolutePath: '/ui', constKey: 'ui' },
    ],
  }),
]

export const globalNavigation = {
  root: rootNavigation,
  apps: {
    domainOnly: appsDomainOnlyNavigation,
  },
}
