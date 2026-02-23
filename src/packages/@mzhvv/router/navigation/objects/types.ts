// src/core/shared/libs/navigation/types.ts

export type SectionNavigation = 'application' | 'author' | 'projects' | 'development'

import type { ToAbsolutePath } from '@/packages/@mzhvv/utils/string'
export type NavigationOf<Path extends string> = ToAbsolutePath<Path>
