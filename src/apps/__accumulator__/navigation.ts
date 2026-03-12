// src/apps/__accumulator__/navigation.ts

////////////////////////////////////////////////////////////////////////////////
// packages

type NavigationObject = { relativePath: string; absolutePath: string; constKey: string }
type MicrofrontendNavigation<T extends string = string> = Record<T, NavigationObject>

////////////////////////////////////////////////////////////////////////////////
// core

////////////////////////////////////////////////////////////////////////////////
// apps

type MainNavigation = MicrofrontendNavigation<'home'>
const mainNavigation = {
  home: { relativePath: '/', absolutePath: '/', constKey: 'home' },
} as const satisfies MainNavigation

type MzhvvNavigation = Record<string, NavigationObject>
const mzhvvNavigation = {
  examples: { relativePath: 'examples', absolutePath: '/examples', constKey: 'examples' },
  templateApp: {
    relativePath: 'template-app',
    absolutePath: '/template-app',
    constKey: 'templateApp',
  },
} as const satisfies MzhvvNavigation

////////////////////////////////////////////////////////////////////////////////

// accumulator
export const appsNavigation = {
  home: mainNavigation.home,
  apps: {
    mzhvv: { mzhvvNavigation },
  },
} as const

// aggregator
export const globalNavigation = appsNavigation

const navigation = {
  domain1Page1: { relativePath: 'page1', absolutePath: '/domain1/page1', constKey: 'page1' },
  domain1Page2: { relativePath: 'page2', absolutePath: '/domain1/page2', constKey: 'page2' },
} as const

//

const ROUTES = {
  home: {
    path: '/',
    title: 'Главная',
  },
  domain1: {
    detail: { path: '/domain1' },
    children: {
      page1: {
        path: '/domain1/page1',
      },
      page2: {
        path: '/domain1/page2',
      },
    },
  },
}
const TEST1 = navigate(ROUTES.domain1.detail.path)
const TEST2 = navigate(ROUTES.domain1.children.page1.path)
