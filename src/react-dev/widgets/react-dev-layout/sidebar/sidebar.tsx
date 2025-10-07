import { Header } from './header'
import { Navigation } from './navigation'

export const SidebarReactDev = () => {
  return (
    <div className='flex h-svh w-75 flex-none'>
      <Header />
      <div data-decorative='true' className='bg-border/50 my-4 w-px flex-none rounded-full' />
      <Navigation />
      <div data-decorative='true' className='bg-border/50 my-4 w-px flex-none rounded-full' />
    </div>
  )
}
