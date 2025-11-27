// src/core/shared/libs/constants/types.ts

import type { LucideIcon } from 'lucide-react'

export type LinkEntity<RelativePath extends string, AbsolutePath extends string> = {
  relativePath: RelativePath
  absolutePath: AbsolutePath

  title: string
  icon?: LucideIcon
}
