import {
  NavigationDataRender,
  NAVIGATION_SECTIONS_FOR_PAGE_1,
  NAVIGATION_SECTIONS_FOR_PAGE_2,
} from '@global/libs/navigation'

export const Navigation = () => {
  return (
    <>
      <NavigationDataRender
        navigationSections={NAVIGATION_SECTIONS_FOR_PAGE_1}
        orientation='horizontal'
        variant='page'
        size='w-45'
      />
      <NavigationDataRender
        navigationSections={NAVIGATION_SECTIONS_FOR_PAGE_2}
        orientation='horizontal'
        variant='page'
        size='w-45'
      />
    </>
  )
}
