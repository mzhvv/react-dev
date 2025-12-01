// src/react-dev/__aggregator__/navigation.ts

import type { Navigation, RootPath } from '@core/libs/navigation'
import type { AppsDomainNavigation, NAVIGATIONTEST } from '@apps/accumulators/types'
import { appsDomainNavigation } from '@apps/accumulators/navigation'

type GlobalNavigation = Navigation<RootPath | NAVIGATIONTEST>

type GlobalNavigationARRAY = [
  { application: Array<'/' | NAVIGATIONTEST> },
  { author: NAVIGATIONTEST[] },
  { projects: NAVIGATIONTEST[] },
  { development: NAVIGATIONTEST[] },
]

type GlobalNavigationTUPLE = [
  application: Array<'/' | NAVIGATIONTEST>,
  author: NAVIGATIONTEST[],
  projects: NAVIGATIONTEST[],
  development: NAVIGATIONTEST[],
]

type CreateGlobalNavgition = {
  globalNavigation: GlobalNavigation
  globalNavigationARRAY: GlobalNavigationARRAY
  globalNavigationTUPLE: GlobalNavigationTUPLE

  // apps
  getAppsDomainNavigation: AppsDomainNavigation

  getApplication: AppsDomainNavigation['application']
  getAuthor: AppsDomainNavigation['author']
  getProjects: AppsDomainNavigation['projects']
  getDevelopment: AppsDomainNavigation['development']

  getAA: Array<AppsDomainNavigation['application'] | AppsDomainNavigation['author']>
  getPD: Array<AppsDomainNavigation['projects'] | AppsDomainNavigation['development']>
}

function createGlobalNavgition(appsDomainNavigation: AppsDomainNavigation) {
  const rootPath: RootPath = '/'

  const globalNavigation = {
    application: [rootPath, ...appsDomainNavigation.application],
    author: appsDomainNavigation.author,
    projects: appsDomainNavigation.projects,
    development: appsDomainNavigation.development,
  } as const satisfies GlobalNavigation

  const globalNavigationARRAY = [
    { application: [rootPath, ...appsDomainNavigation.application] },
    { author: appsDomainNavigation.author },
    { projects: appsDomainNavigation.projects },
    { development: appsDomainNavigation.development },
  ] as const satisfies GlobalNavigationARRAY

  const globalNavigationTUPLE = [
    [rootPath, ...appsDomainNavigation.application],
    appsDomainNavigation.author,
    appsDomainNavigation.projects,
    appsDomainNavigation.development,
  ] as const satisfies GlobalNavigationTUPLE

  return {
    globalNavigation,
    globalNavigationARRAY,
    globalNavigationTUPLE,

    // apps
    getAppsDomainNavigation: appsDomainNavigation,

    getApplication: appsDomainNavigation.application,
    getAuthor: appsDomainNavigation.author,
    getProjects: appsDomainNavigation.projects,
    getDevelopment: appsDomainNavigation.development,

    getAA: [appsDomainNavigation.application, appsDomainNavigation.author],
    getPD: [appsDomainNavigation.projects, appsDomainNavigation.development],
  } as const satisfies CreateGlobalNavgition
}

export const globalNavgition = createGlobalNavgition(appsDomainNavigation)
