// src/react-dev/__aggregator__/types.ts

import type { SectionNavigation } from '@core/libs/navigation'
import type {
  ApplicationSectionDomainPaths,
  AuthorSectionDomainPaths,
  ProjectsSectionDomainPaths,
  DevelopmentSectionDomainPaths,
} from '@apps/accumulators/types'
import type { RootPath } from '@react-dev/shared/types/prnc'

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
