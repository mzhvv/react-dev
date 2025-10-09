import { Link } from 'react-router'
import { User2Icon } from 'lucide-react'

import { Button } from '@ui/components/button'

import { Settings } from './settings'

export const Header = () => {
  return (
    <header className='flex w-fit flex-none flex-col justify-between'>
      <div className='p-4'>
        <Button asChild variant='gradient-primary-sky' size='icon' className='shadow'>
          <Link to='/' className='text-base font-bold tracking-tighter'>
            RD
          </Link>
        </Button>
      </div>

      <div className='flex flex-col gap-2 p-4'>
        <Settings />
        <Button variant='gradient-secondary-white' size='icon' className='shadow'>
          <User2Icon />
        </Button>
      </div>
    </header>
  )
}
