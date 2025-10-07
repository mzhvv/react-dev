import { Header } from './header'
import { Navigation } from './navigation'

export const SidebarReactDev = () => {
  return (
    <div className='flex w-75 flex-none'>
      <Header />
      <hr data-decorative='true' className='bg-border/50 my-4 h-full w-px rounded-full' />
      <Navigation />
      <hr data-decorative='true' className='bg-border/50 my-4 h-full w-px rounded-full' />
    </div>
  )
}
