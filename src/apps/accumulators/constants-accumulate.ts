// src/apps/accumulators/constants-accumulate.ts

import { dashboard01NavigationConstants } from '@apps/dashboard-01'
import { project0NavigationConstants } from '@apps/project-0'
import { uiNavigationConstants } from '@apps/ui'

export const APPS_CONSTANTS_ACCUMULATE = {
  ...dashboard01NavigationConstants,
  ...project0NavigationConstants,
  ...uiNavigationConstants,
} as const

// // i18n

// import { useDashboard01NavigationConstants } from '@apps/dashboard-01'
// import { useProject0NavigationConstants } from '@apps/project-0'
// import { useUiNavigationConstants } from '@apps/ui'

// export const APPS_CONSTANTS_ACCUMULATE_HOOK = {
//   useDashboard01NavigationConstants,
//   useProject0NavigationConstants,
//   useUiNavigationConstants,
// }
