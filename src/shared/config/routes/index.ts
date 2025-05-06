// src/shared/config/routes/index.ts

// prettier-ignore
export type {
  ConfigRoutes_NonIndexEntry,
  ConfigRoutes_IndexEntry,
  ConfigRoutes_Entry,
  ConfigRoutes,

  ConfigRoutes_KeyWithLayout,
  ConfigRoutes_Key,

  ConfigRoutes_RelativePath,
  ConfigRoutes_RelativePathByKey,
  ConfigRoutes_AbsolutePath,
  ConfigRoutes_AbsolutePathByKey,
} from './types'

export { configRoutesAPI } from './routes'

export { getAbsolutePathByKey } from './utils/get-absolute-path-by-key'
export { getRelativePathByKey } from './utils/get-relative-path-by-key'
