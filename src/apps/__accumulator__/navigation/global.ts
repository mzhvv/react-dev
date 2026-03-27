// src/apps/__accumulator__/navigation/global.ts

import type { LinkObject } from '@mzhvv/libs/routers/react-router/navigation'
import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { tamplateAppRoute } from '@apps/@mzhvv/template-app'
import { examplesRoute } from '@apps/@mzhvv/examples'
import { uiRoute } from '@apps/ui'
import { documentationRoute } from '@apps/documentation'

const rootNavigation = {
  relativePath: '/',
  absolutePath: '/',
  constKey: 'root',
} as const satisfies LinkObject<string> // Создавать отдельную функцию для root - избыточно, а проверять каждый объект `path === '/'` в createLinkObject - дорого

const appsDomainNavigation = [
  {
    section: navigationBuilders.createSectionObject('projects'),
    links: [navigationBuilders.createLinkObject(uiRoute.children![0].path!)],
  },
  {
    section: navigationBuilders.createSectionObject('development'),
    links: [
      navigationBuilders.createLinkObject(documentationRoute.children![0].path!),
      navigationBuilders.createLinkObject(examplesRoute.path),
      navigationBuilders.createLinkObject(tamplateAppRoute.path!),
    ],
  },
] as const

export const globalNavigation = {
  root: rootNavigation,
  apps: {
    // all: [!idea]
    domain: appsDomainNavigation,
  },
} as const satisfies Record<'root' | 'apps', unknown>
