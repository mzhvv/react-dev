import { NavigationDataRender, NAVIGATION_SECTIONS_FOR_SIDEBAR } from '@global/libs/navigation'

export const NavigationSidebar = () => {
  return (
    <NavigationDataRender
      navigationSections={NAVIGATION_SECTIONS_FOR_SIDEBAR}
      orientation='vertical'
      variant='sidebar'
    />
  )
}
