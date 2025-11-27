// src/apps/__template-app__/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { RouteObject } from 'react-router'
import type { StrictPathRouteObject } from '@libs/router'
import type { LinkEntity } from '@libs/constants'
import type { CamelCase } from '@utils/string'

// #region Paths

type DomainRelativePath = 'template-app'
type DomainAbsolutePath = `/${DomainRelativePath}`

export type AbsolutePath = DomainAbsolutePath

// #endregion

// #region Routes

export type Routes = EntranceRoutes

export type EntranceRoutes = Omit<RouteObject, 'children'> & {
  children: Array<
    Omit<RouteObject, 'children'> & {
      children: Array<DomainRoutes[keyof DomainRoutes]>
    }
  >
}

export type DomainRoutes = Record<
  CamelCase<DomainRelativePath>,
  StrictPathRouteObject<DomainRelativePath>
>

// #endregion

// #region Navigations

export type DomainNavigation = DomainAbsolutePath

// #endregion

// #region Constants

export type Constants = {
  navigation: () => ConstantsNavigation
}

export type ConstantsNavigation = {
  domainLinks: ConstantsDomainNavigationLink
  allLinks: ConstantsNavigationLink
}

export type ConstantsNavigationLink = ConstantsDomainNavigationLink

export type ConstantsDomainNavigationLink = Record<
  DomainAbsolutePath,
  LinkEntity<DomainRelativePath, DomainAbsolutePath>
>

// #endregion
