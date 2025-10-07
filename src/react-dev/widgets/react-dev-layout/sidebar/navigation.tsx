// src/react-dev/widgets/react-dev-layout/sidebar/navigation.tsx

import { NAVIGATION_SECTIONS } from '@navigation'

import { navigationReactDev } from '@react-dev/app/navigation'

import { NavigationList } from './navigation-list'

const [application, ...rest] = NAVIGATION_SECTIONS
const MODIFIED_NAVIGATION_SECTIONS = [
  { ...application, links: [...navigationReactDev, ...application.links] },
  ...rest,
]

export const Navigation = () => {
  return (
    <nav aria-label='navigation' className='h-svh flex-1'>
      <NavigationList navigationSections={MODIFIED_NAVIGATION_SECTIONS} />
    </nav>
  )
}
