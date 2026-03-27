// src/apps/__accumulator__/navigation/global.ts

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { homeDataConfig } from '@apps/home'
import { uiDataConfig } from '@apps/ui'
import { documentationDataConfig } from '@apps/documentation'
import { examplesDataConfig } from '@apps/@mzhvv/examples'
import { templateAppDataConfig } from '@apps/@mzhvv/template-app'

const appsDomainNavigation = [
  {
    section: navigationBuilders.createSectionObject('projects'),
    links: [uiDataConfig.navigation.domain],
  },
  {
    section: navigationBuilders.createSectionObject('development'),
    links: [
      documentationDataConfig.navigation.domain,
      examplesDataConfig.navigation.domain,
      templateAppDataConfig.navigation.domain,
    ],
  },
] as const

export const globalNavigation = {
  root: homeDataConfig.navigation.domain,
  apps: {
    // all: [!idea]
    domain: appsDomainNavigation,
  },
} as const satisfies Record<'root' | 'apps', unknown>
