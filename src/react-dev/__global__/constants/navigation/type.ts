// src/react-dev/__global__/constants/navigation/type.ts
/** @public - только ЧИСТЫЕ типы маршрутизации */

import type { LucideIcon } from 'lucide-react'

export type GlobalNavigationConstants<RelativePath extends string, AbsolutePath extends string> = {
  relativePath: RelativePath
  absolutePath: AbsolutePath

  title: string
  icon?: LucideIcon
}
