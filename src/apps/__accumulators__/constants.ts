// src/apps/__accumulators__/constants.ts

import { useDashboard01NavigationConstants } from '@apps/dashboard-01'
import { useUiNavigationConstants } from '@apps/ui'
import { useProject01NavigationConstants } from '@apps/project-01'

export const APPS_CONSTANTS_ACCUMULATE = {
  useDashboard01NavigationConstants,
  useUiNavigationConstants,
  useProject01NavigationConstants,
} as const
