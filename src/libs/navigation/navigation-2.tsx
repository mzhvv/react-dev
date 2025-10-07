// // src/libs/navigation/navigation-2.tsx

// import { navigationAccumulate } from '@apps'

// import type { NavigationSection, NavigationSections } from './types'

// export const NAVIGATION_APPLICATION = navigationAccumulate.application
// export const NAVIGATION_AUTHOR = navigationAccumulate.author
// export const NAVIGATION_PROJECTS = navigationAccumulate.projects
// export const NAVIGATION_DEVELOPMENT = navigationAccumulate.development
// export const NAVIGATION_SECONDARY = navigationAccumulate.secondary

// export const NAVIGATION_APPLICATION_SECTION = {
//   title: 'Application',
//   links: navigationAccumulate.application,
// } as const satisfies NavigationSection

// export const NAVIGATION_AUTHOR_SECTION = {
//   title: 'Author',
//   links: navigationAccumulate.author,
// } as const satisfies NavigationSection

// export const NAVIGATION_PROJECTS_SECTION = {
//   title: 'Projects',
//   links: navigationAccumulate.projects,
// } as const satisfies NavigationSection

// export const NAVIGATION_DEVELOPMENT_SECTION = {
//   title: 'Development',
//   links: navigationAccumulate.development,
// } as const satisfies NavigationSection

// export const NAVIGATION_SECONDARY_SECTION = {
//   title: 'Secondary',
//   links: navigationAccumulate.secondary,
// } as const satisfies NavigationSection

// export const NAVIGATION_SECTIONS = [
//   {
//     key: 'application',
//     ...NAVIGATION_APPLICATION_SECTION,
//   },
//   {
//     key: 'author',
//     ...NAVIGATION_AUTHOR_SECTION,
//   },
//   {
//     key: 'projects',
//     ...NAVIGATION_PROJECTS_SECTION,
//   },
//   {
//     key: 'development',
//     ...NAVIGATION_DEVELOPMENT_SECTION,
//   },
//   {
//     key: 'secondary',
//     ...NAVIGATION_SECONDARY_SECTION,
//   },
// ] as const satisfies NavigationSections
