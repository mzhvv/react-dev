// src/shared/constants/link/link.tsx

import type {
  ConfigRoutes_RelativePath,
  ConfigRoutes_AbsolutePath,
  ConfigRoutes_KeyWithLayout,
} from '@/shared/config/routes'

/*                                             types                                              */

// type NavKey = `nav.${string}`
type NavKey =
  | 'nav.home'
  | 'nav.dev'
  | 'nav.ui'
  | 'nav.redux'
  | 'nav.projects'
  | 'nav.todo'
  | 'nav.blog'
  | 'nav.postId'
  | 'nav.applicationMap'

type LinkMapValue = {
  relativePath: ConfigRoutes_RelativePath
  absolutePath: ConfigRoutes_AbsolutePath

  labelKey: NavKey
}

export type ConfigLinkMap = Record<ConfigRoutes_KeyWithLayout, LinkMapValue>

/*                                             config                                             */

const configLinkMap = {
  home: { relativePath: '/', absolutePath: '/', labelKey: 'nav.home' },

  dev: { relativePath: 'dev', absolutePath: '/dev', labelKey: 'nav.dev' },
  ui: { relativePath: 'ui', absolutePath: '/dev/ui', labelKey: 'nav.ui' },
  redux: { relativePath: 'redux', absolutePath: '/dev/redux', labelKey: 'nav.redux' },

  projects: { relativePath: 'projects', absolutePath: '/projects', labelKey: 'nav.projects' },
  todo: { relativePath: 'todo', absolutePath: '/projects/todo', labelKey: 'nav.todo' },
  blog: { relativePath: 'blog', absolutePath: '/projects/blog', labelKey: 'nav.blog' },
  postId: {
    relativePath: ':postId',
    absolutePath: '/projects/blog/:postId',
    labelKey: 'nav.postId',
  },

  applicationMap: {
    relativePath: 'application-map',
    absolutePath: '/application-map',
    labelKey: 'nav.applicationMap',
  },
} as const satisfies Partial<ConfigLinkMap>

/*                                              maps                                              */

export const LINK_MAP_BY_KEY = configLinkMap

//

// import { getAbsolutePathFromCongigRoutes } from './utilities/get-absolute-path'

// /*                                             const                                              */

// /** getAbsolutePathFromCongigRoutes*/
// const gAP = getAbsolutePathFromCongigRoutes

//

// export const linkMapByRelativePath = {
//   '/': configLinkMap['root'],
//   drafts: configLinkMap['drafts'],
//   __dev__: configLinkMap['__dev__'],
//   redux: configLinkMap['redux'],
//   projects: configLinkMap['projects'],
//   todo: configLinkMap['todo'],
//   blog: configLinkMap['blog'],
//   ':postId': configLinkMap['postId'],
//   'application-map': configLinkMap['applicationMap'],
// } as const satisfies Record<ConfigRoutesRelativePath, LinkMapValue>

// export const linkMapByAbsolutePath = {
//   '/': configLinkMap['root'],
//   '/drafts': configLinkMap['drafts'],
//   '/drafts/__dev__': configLinkMap['__dev__'],
//   '/drafts/redux': configLinkMap['redux'],
//   '/projects': configLinkMap['projects'],
//   '/projects/todo': configLinkMap['todo'],
//   '/projects/blog': configLinkMap['blog'],
//   '/projects/blog/:postId': configLinkMap['postId'],
//   '/application-map': configLinkMap['applicationMap'],
// } as const satisfies Record<ConfigRoutesAbsolutePath, LinkMapValue>
