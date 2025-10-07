// src/react-dev/widgets/react-dev-layout/sidebar/navigation.tsx

import { NAVIGATION_SECTIONS } from '@navigation'

import { navigationReactDev } from '@react-dev/app/navigation'

import { NavigationList } from './navigation-list'

const [application, author, ...rest] = NAVIGATION_SECTIONS
const MODIFIED_NAVIGATION_SECTIONS = [
  { ...application, links: [...navigationReactDev.slice(0, 2), ...application.links] },
  { ...author, links: [navigationReactDev[2], ...author.links] },
  ...rest,
] // Импорт @react-dev/app/navigation в @apps/navigation-accumulate и @navigation/navigation - Циклическая зависимость! ✅ - пока оставлю так

export const Navigation = () => {
  return (
    <nav aria-label='navigation' className='h-svh flex-1'>
      <NavigationList navigationSections={MODIFIED_NAVIGATION_SECTIONS} />
    </nav>
  )
}
