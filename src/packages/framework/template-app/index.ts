// src/packages/framework/template-app/index.ts

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { route } from './app/route'

export const templateAppDataConfig = {
  route,
  navigation: {
    domain: navigationBuilders.createLinkObject(route.path!),
  },
}
