// src/react-dev/app/router.tsx

import type { RouteObject } from 'react-router'

import { ReactDevPage } from '@react-dev/pages/react-dev'
import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'
import { ProjectsLayout } from '@react-dev/widgets/projects-layout'

// import { routesAccumulate as accumulateRoutesProjects } from '@projects'

export const routesReactDev = {
  path: '/',
  element: <ReactDevLayout />,
  children: [
    {
      index: true,
      element: <ReactDevPage />,
    },
  ],
} as const satisfies RouteObject

export const routesProjects = {
  path: 'projects',
  element: <ProjectsLayout />,
  children: [], // [...accumulateRoutesProjects],
} as const satisfies RouteObject
