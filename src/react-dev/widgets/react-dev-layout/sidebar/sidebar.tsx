import { Header } from './header'
import { Navigation } from './navigation'

export const SidebarReactDev = () => {
  return (
    <div className='flex w-75 flex-none'>
      <Header />
      <div
        data-decorative='true'
        className='bg-border/50 my-4 h-full w-px flex-none rounded-full'
      />
      <Navigation />
      <div
        data-decorative='true'
        className='bg-border/50 my-4 h-full w-px flex-none rounded-full'
      />
    </div>
  )
}
