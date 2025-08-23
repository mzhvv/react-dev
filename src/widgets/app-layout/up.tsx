import { Button } from '@/shared/ui'
import { ArrowUpIcon } from 'lucide-react'

export const Up: React.FC = () => {
  return (
    <div>
      <Button variant='ghost' size='icon' className='px-3'>
        <ArrowUpIcon size={16} />
      </Button>
    </div>
  )
}
