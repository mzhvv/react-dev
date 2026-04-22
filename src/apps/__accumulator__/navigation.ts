// src/apps/__accumulator__/navigation.ts

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { templateAppDataConfig } from '@packages/@mzhvv/framework/template-app'
import { examplesDataConfig } from '@examples'
import { uiDataConfig } from '@ui'

import { homeDataConfig } from '@home'
import { documentationDataConfig } from '@documentation'

type AccumulatorNavigation = Record<'root' | 'apps', unknown>

const rootNavigation = homeDataConfig.navigation.domain

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

export const navigation = {
  root: rootNavigation,
  apps: {
    domain: appsDomainNavigation,
  },
} as const satisfies AccumulatorNavigation
