// src/main/__aggregator__/types.ts

import type { SectionNavigation } from '@mzhvv/routers/react-router/navigation/types'
import type {
  ApplicationSectionDomainPaths,
  AuthorSectionDomainPaths,
  ProjectsSectionDomainPaths,
  DevelopmentSectionDomainPaths,
} from '@accumulator/types'
import type { RootPath } from '@main/shared/types/prnc'

// #region Routes

// #endregion
// #region Navigations

type NavigationSection<S extends SectionNavigation, L> = {
  title: S
  links: L
}

export type GlobalNavigationSections = Array<
  | NavigationSection<'application', Array<RootPath | ApplicationSectionDomainPaths>>
  | NavigationSection<'author', AuthorSectionDomainPaths[]>
  | NavigationSection<'projects', ProjectsSectionDomainPaths[]>
  | NavigationSection<'development', DevelopmentSectionDomainPaths[]>
>

// #endregion
// #region Constants

// #endregion
