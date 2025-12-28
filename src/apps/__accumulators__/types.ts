// src/apps/__accumulators__/types.ts

import type { SectionNavigation } from '@core/libs/navigation'

import type {
  TemplateAppExperienceDomainNavigation,
  TemplateAppExperienceRoutes,
} from '@template-app-experience'
import type {
  TemplateAppRoutes,
  TemplateAppDomainNavigation,
  TemplateAppConstantsNavigationDomainLink,
} from '@template-app'
import type { IsTupleRoutesCompatible } from '@core/libs/router'

// #region Routes

export type AppsRoutes = [TemplateAppExperienceRoutes, TemplateAppRoutes]
// @ts-expect-error 6196
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type __IsRoutesCompatible__ = IsTupleRoutesCompatible<AppsRoutes>

// #endregion
// #region Navigations

/** @description *SectionDomainPaths - являються неким ендпоитом долее все типы конфигуриуються их них!!!*/
export type ApplicationSectionDomainPaths = never
export type AuthorSectionDomainPaths = never
export type ProjectsSectionDomainPaths = never
export type DevelopmentSectionDomainPaths =
  | TemplateAppDomainNavigation
  | TemplateAppExperienceDomainNavigation

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
