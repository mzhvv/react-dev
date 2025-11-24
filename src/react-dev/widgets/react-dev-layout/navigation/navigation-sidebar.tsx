import { NavigationDataRender, SIDEBAR_NAVIGATION } from '@react-dev/__aggregator__/navigation'

export const NavigationSidebar = () => {
  return (
    <NavigationDataRender
      navigationSections={SIDEBAR_NAVIGATION}
      orientation='vertical'
      variant='sidebar'
    />
  )
}
