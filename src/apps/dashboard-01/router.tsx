import { lazy, Suspense } from 'react'

import type { RouteObject } from '@global/router'

import type { Path } from './types'

const LazyDashboard01Page = lazy(() =>
  import('./page').then(module => ({
    default: module.Dashboard01Page,
  }))
)

const Dashboard01Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyDashboard01Page />
    </Suspense>
  )
}

export const routesDashboard01 = [
  {
    path: 'dashboard-01',
    element: <Dashboard01Page />,
  },
] as const satisfies RouteObject<Path>[]
