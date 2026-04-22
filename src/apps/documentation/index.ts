// src/apps/documentation/index.ts

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { route } from './app/route'
import { NAVIGATION } from './shared/constants/navigation'

type ConstKey = 'documentation'

export const documentationDataConfig = {
  route,

  navigation: {
    domain: navigationBuilders.createLinkObject(route.children![0].path! as ConstKey), // domain: LinkObject<"documentation", "documentation", "/documentation">
  },

  CONSTANTS: {
    NAVIGATION: {
      DOMAIN: {
        useGetDomainConstants: { documentation: NAVIGATION.useGetDomainConstants } satisfies Record<
          ConstKey,
          unknown
        >,
      },
    },
  },
}
