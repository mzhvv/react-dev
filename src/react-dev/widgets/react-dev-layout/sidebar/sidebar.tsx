import { useLocation } from '@/react-dev/shared/hooks'

import { cn } from '@ui/lib'

import { Header } from './header'
import { Navigation } from './navigation'

export const SidebarReactDev = () => {
  const { isHome } = useLocation()

  return (
    <div data-ishome={isHome} className='flex h-svh w-75'>
      <Header className={cn(isHome ? 'w-full' : 'w-20')} />

      {!isHome && (
        <>
          <Separator />
          <Navigation className='w-full' />
        </>
      )}

      <Separator />
    </div>
  )
}

const Separator = () => <div className='bg-border/50 my-4 w-px rounded-full' />
