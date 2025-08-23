// src/shared/lib/router/config.tsx

import type { RouteObject } from 'react-router'
import { Outlet } from 'react-router'

import {
  DevPage,
  DevUiPage,
  ReduxPage,
  ProjectsPage,
  TodoPage,
  BlogListPage,
  BlogPostPage,
  ApplicationMapPage,
  HomePage,
} from '@/pages'
import { AppLayout } from '@/widgets'

import type { configRoutesAPI } from '@/shared/config/routes'

import type { RouterRoutes } from './types'
import { conversionToRouteObject } from './utils/conversion-to-RouteObject'

// prettier-ignore
const  routerRoutes = {
  devLayout: { path: 'dev', element: <Outlet />, children: {
    dev: { index: true,   element: <DevPage /> },
    ui: { path: 'ui', element: <DevUiPage /> },

    reduxLayout: { path: 'redux', element: <Outlet />, children: {
      redux: { index: true, element: <ReduxPage /> }
    }},
  }},

  projectsLayout: { path: 'projects', element: <Outlet />, children: {
    projects: { index: true, element: <ProjectsPage /> },
    
    todoLayout: { path: 'todo', element: <Outlet />, children: {
      todo: { index: true,  element: <TodoPage /> }
    }},
    blogLayout: { path: 'blog', element: <Outlet />, children: {
      blog: { index: true, element: <BlogListPage /> },
      postId: { path: ':postId', element: <BlogPostPage /> }
    }}
  }},

  authorizationLayout: { path: '/', element: <Outlet />, children: {
    login: { path: 'login', element: 'login' },
    registration: { path: 'registration', element: 'registration'} 
  }} ,
  // ...authorizationDomainRoutes,

  applicationMap: { path: 'application-map', element: <ApplicationMapPage /> },

  homeLayout: { path: '/',  element: <Outlet />, children: { 
    home: { index: true, element: <HomePage />}
  }},

  notFound: { path: '*', element: '404' } 
} as const satisfies RouterRoutes<typeof configRoutesAPI.allRoutes>

export const configRouter: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [...conversionToRouteObject<typeof configRoutesAPI.allRoutes>(routerRoutes)],
  } satisfies { element: RouteObject['element']; children: RouteObject[] },
]

// @dev

// import type { ExtractRouterRoutes } from './types'
// // prettier-ignore
// const authorizationDomainRoutes = {
//   authorizationLayout: {
//     path: '/', element: <Outlet />, children: {
//       login: { path: 'login', element: 'login' },
//       registration: { path: 'registration', element: 'registration'}
//     },
//   }
// } as const satisfies
//   | RouterRoutes<typeof configRoutesAPI.authorizationDomainRoutes>
//   // | RouterRoutes<Pick<typeof configRoutesAPI.allRoutes, 'authorizationLayout'>>
//   | ExtractRouterRoutes<typeof configRoutesAPI.allRoutes, 'authorizationLayout'>
