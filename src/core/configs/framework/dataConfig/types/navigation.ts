// src/packages/@mzhvv/libs/routers/react-router/navigation

export type NavigationObject = { path: string }
type AccumulatorNavigation<T> = { section: T; navigation: Array<NavigationObject> }
type AppsNavigation = NavigationObject

// src/core/configs/framework/dataConfig/types/navigation.ts

type SectionNavigation = 'mzhvv' | 'apps'

const homeNavigation = { path: '/' }
const mzhvvNavigation = [{ path: 'examples' }, { path: 'template-app' }]

export const a = [
  { section: 'mzhvv', navigation: [{ path: '/' }] },
  { section: 'apps', navigation: [{ path: '/' }] },
] as const satisfies Array<AccumulatorNavigation<SectionNavigation>>
