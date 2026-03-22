// src/core/configs/framework/dataConfig/navigation/types.ts

import type { ExtractFromUnion } from '@mzhvv/utils/types'

export type NavigationSection = 'projects' | 'development'

/** Абстракция над `Extract<NavigationSection, '[NavigationSection]'>` дает автокомплит */
export type ExtractNavigationSection<T extends NavigationSection> = ExtractFromUnion<
  NavigationSection,
  T
>
