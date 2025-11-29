import { NavigationDataRender, PAGE_NAVIGATION } from '@react-dev/features/__aggregator__/navigation'

export const Navigation = () => {
  return (
    <>
      <NavigationDataRender
        navigationSections={PAGE_NAVIGATION[0]}
        orientation='horizontal'
        variant='page'
        size='w-45'
      />
      <NavigationDataRender
        navigationSections={PAGE_NAVIGATION[1]}
        orientation='horizontal'
        variant='page'
        size='w-45'
      />
    </>
  )
}
