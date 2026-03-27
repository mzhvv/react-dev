// src/apps/documentation/index.ts

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { route } from './app/route'

export const documentationDataConfig = {
  route,
  navigation: {
    domain: navigationBuilders.createLinkObject(route.children![0].path!),
  },
}
