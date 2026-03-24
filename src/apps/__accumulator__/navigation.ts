// src/apps/__accumulator__/navigation.tsx

import type { LinkObject } from '@mzhvv/libs/routers/react-router/navigation'
import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { tamplateAppRoute } from '@apps/@mzhvv/template-app'
import { examplesRoute } from '@apps/@mzhvv/examples'

const rootNavigation = {
  relativePath: '/',
  absolutePath: '/',
  constKey: 'root',
} as const satisfies LinkObject<string> // Создавать отдельную функцию для root - избыточно, а проверять каждый объект `path === '/'` в createLinkObject - дорого

const appsNavigationDomainOnly = [
  {
    section: navigationBuilders.createSectionObject('projects'),
    links: [navigationBuilders.createLinkObject('ui')],
  },
  {
    section: navigationBuilders.createSectionObject('development'),
    links: [
      navigationBuilders.createLinkObject('documentation'),
      navigationBuilders.createLinkObject(examplesRoute.path),
      navigationBuilders.createLinkObject(tamplateAppRoute.path!),
    ],
  },
] as const

export const globalNavigation = {
  root: rootNavigation,
  apps: {
    domainOnly: appsNavigationDomainOnly,
  },
} as const satisfies Record<'root' | 'apps', unknown>
