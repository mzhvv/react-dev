// src/shared/config/routes/routes.ts

import type { ConfigRoutes, ConfigRoutesAPI } from './types'

// prettier-ignore
const applicationsDomainsRoutes = {
  devLayout: { path: 'dev', children: {
    dev: { index: true },
    ui: { path: 'ui' },

    reduxLayout: { path: 'redux', children: {
      redux: { index: true }
    }}
  }},

  projectsLayout: { path: 'projects', children: {
    projects: { index: true },
    todoLayout: { path: 'todo', children: {
      todo: { index: true }
    }},
    blogLayout: { path: 'blog', children: {
      blog: { index: true },
      postId: { path: ':postId' }
    }}
  }},
} as const satisfies ConfigRoutes

// prettier-ignore
const authorizationDomainRoutes = {
  authorizationLayout: { path: '/', children: { 
    login: { path: 'login' },
    registration: { path: 'registration' }
  }},
} as const satisfies ConfigRoutes

const independentRoutes = {
  applicationMap: { path: 'application-map' },
} as const satisfies ConfigRoutes

// prettier-ignore
const homeRoutes = {
  homeLayout: { path: '/', children: {
    home: { index: true }
  }}
} as const satisfies ConfigRoutes

const systemRoutes = {
  notFound: { path: '*' },
} as const satisfies ConfigRoutes

const allRoutes = {
  ...applicationsDomainsRoutes,
  ...authorizationDomainRoutes,

  ...independentRoutes,
  ...homeRoutes,
  ...systemRoutes,
} as const satisfies ConfigRoutes

type ConfigRoutesAPI_Key =
  | 'allRoutes'
  | 'applicationsDomainsRoutes'
  | 'authorizationDomainRoutes'
  | 'independentRoutes'
  | 'homeRoutes'
  | 'systemRoutes'

/** API конфигурации маршрутов приложения */
export const configRoutesAPI = {
  allRoutes,

  applicationsDomainsRoutes,

  authorizationDomainRoutes,

  independentRoutes,
  homeRoutes,
  systemRoutes,
} as const satisfies ConfigRoutesAPI<ConfigRoutesAPI_Key>
