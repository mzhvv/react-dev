// src/react-dev/shared/navigation/navigation-sections.ts

import { NAVIGATION_SECTIONS } from '@navigation'
import { navigationReactDev } from './navigation' // Импорт navigationReactDev из @react-dev/shared/navigation.tsx в @apps/navigation-accumulate или @navigation/navigation - Циклическая зависимость! ✅ - пока оставлю так

const [application, author, ...rest] = NAVIGATION_SECTIONS

const MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR = [
  { ...application, links: [...navigationReactDev.slice(0, 2), ...application.links] },
  { ...author, links: [navigationReactDev[2], ...author.links] },
  ...rest,
]

const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 = [
  { ...application, links: [...navigationReactDev.slice(1, 2), ...application.links] },
  { ...author, links: [navigationReactDev[2], ...author.links] },
]
const MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 = [...rest]

export {
  MODIFIED_NAVIGATION_SECTIONS_FOR_SIDEBAR as NAVIGATION_SECTIONS_FOR_SIDEBAR,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_1 as NAVIGATION_SECTIONS_FOR_PAGE_1,
  MODIFIED_NAVIGATION_SECTIONS_FOR_PAGE_2 as NAVIGATION_SECTIONS_FOR_PAGE_2,
}
