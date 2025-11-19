// src/react-dev/global/constants/navigation/type.ts

import type { LucideIcon } from 'lucide-react'

export type GlobalNavigationConstants<RelativePath extends string, AbsolutePath extends string> = {
  relativePath: RelativePath
  absolutePath: AbsolutePath

  title: string
  icon?: LucideIcon
}
