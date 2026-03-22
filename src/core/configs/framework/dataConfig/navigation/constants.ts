// src/core/configs/framework/dataConfig/navigation/constants.ts

import type { NavigationSection } from './types'

export const NAVIGATION_SECTION_IDS = {
  PROJECTS: 'projects',
  DEVELOPMENT: 'development',
} as const satisfies Record<Uppercase<NavigationSection>, NavigationSection>
