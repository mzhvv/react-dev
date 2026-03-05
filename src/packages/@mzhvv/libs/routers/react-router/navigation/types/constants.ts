// src/packages/@mzhvv/libs/routers/react-router/navigation/types/constants.ts

import type { ToAbsolutePath } from '@/packages/@mzhvv/utils/string'
import type { LucideIcon } from 'lucide-react'

type LinkEntity<Path extends string> = {
  relativePath: Path
  absolutePath: ToAbsolutePath<Path>

  title: string
  icon?: LucideIcon
}

export type ConstantsNavigationLinkEntityOf<Path extends string> = Record<
  ToAbsolutePath<Path>,
  LinkEntity<Path>
>

//

export type ConstantsAPIWith<Navigation, Extend = object> = {
  navigation: () => Navigation
} & Partial<Extend>

export type ConstantsNavigationWith<DomainLinks, Extend = object> = {
  domainLinks: DomainLinks
} & Partial<Extend>
