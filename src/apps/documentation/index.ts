// src/apps/documentation/index.ts

/* eslint-disable react-hooks/rules-of-hooks */

import { navigationBuilders } from '@core/configs/framework/dataConfig/navigation'

import { route } from './app/route'
import { NAVIGATION } from './shared/constants/navigation'

type ConstKey = 'documentation'

export const documentationDataConfig = {
  route,

  navigation: {
    domain: navigationBuilders.createLinkObject(route.children![0].path! as ConstKey), // domain: LinkObject<"documentation", "documentation", "/documentation">
  },

  CONSTATS: {
    NAVIGATION: {
      CONSTANTS: {
        // DOMAIN: NAVIGATION.useGetDomainConstants(),
        DOMAIN: {
          documentation: NAVIGATION.useGetDomainConstants(), // ВЫЗОВ!
        } satisfies Record<ConstKey, unknown>, // { documentation: { stitle: string }}
      },
    },
  },
}
