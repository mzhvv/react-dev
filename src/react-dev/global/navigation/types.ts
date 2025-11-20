// src/react-dev/global/navigation/types.ts

import type { AppsDomainRoutePath } from '@apps'

import type {
  DomainRoutePath as ReactDevDomainRoutePath,
  RootRoutePath,
} from '@react-dev/shared/types'

export type AllPaths =
  | RootRoutePath
  | DomainPathNavigation<ReactDevDomainRoutePath | AppsDomainRoutePath>

export type SectionNavigationKey = 'application' | 'author' | 'projects' | 'development'
export type SectionsNavigation = { section: SectionNavigationKey; links: AllPaths[] }

export type DomainPathNavigation<Domain extends string> = `/${Domain}`
export type PagePathNavigation<Domain extends string, Page extends string> = `/${Domain}/${Page}`
