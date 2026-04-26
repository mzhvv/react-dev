// src/apps/@mzhvv/examples/index.ts

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { route } from './app/route'

export const examplesDataConfig = {
  route,
  navigation: {
    domain: navigationBuilders.createLinkObject(route.path),
  },
}
