// src/core/shared/libs/navigation/types.ts

import type { ToAbsolutePath } from '@core/utils/string'

export type RootPath = '/'

export type SectionNavigationKey = 'application' | 'author' | 'projects' | 'development'
export type Navigation<T> = Record<SectionNavigationKey, Array<T>>

export type NavigationOf<Path extends string> = ToAbsolutePath<Path>
