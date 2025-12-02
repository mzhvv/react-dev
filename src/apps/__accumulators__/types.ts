// src/apps/__accumulators__/types.ts

import type { SectionNavigation } from '@core/libs/navigation'
import type {
  TemplateAppRoutes,
  TemplateAppDomainNavigation,
  TemplateAppConstantsNavigationDomainLink,
} from '@template-app'

// #region Routes

export type AppsRoutes = TemplateAppRoutes

// #endregion
// #region Navigations

/** @description *SectionDomainPaths - являються неким ендпоитом долее все типы конфигуриуються их них!!!*/
export type ApplicationSectionDomainPaths = never
export type AuthorSectionDomainPaths = never
export type ProjectsSectionDomainPaths = never
export type DevelopmentSectionDomainPaths = TemplateAppDomainNavigation

type NavigationSection<Section extends SectionNavigation, SectionPaths> = Record<
  Section,
  SectionPaths
>
// prettier-ignore
export type AppsDomainNavigation = 
  NavigationSection<'application', ApplicationSectionDomainPaths[]> &
  NavigationSection<'author', AuthorSectionDomainPaths[]> &
  NavigationSection<'projects', ProjectsSectionDomainPaths[]> &
  NavigationSection<'development', DevelopmentSectionDomainPaths[]>

// #endregion
// #region Constants

export type AppsConstantsNavigationDomainLink = TemplateAppConstantsNavigationDomainLink

// #endregion
