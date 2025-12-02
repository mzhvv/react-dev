// src/core/shared/libs/navigation/types.ts

export type SectionNavigation = 'application' | 'author' | 'projects' | 'development'

import type { ToAbsolutePath } from '@core/utils/string'
export type NavigationOf<Path extends string> = ToAbsolutePath<Path>
