import { Counter } from '@/modules/redux-counters'

export const CountersWidget = () => {
  return (
    <div className='mx-auto w-fit space-y-2 *:space-y-2'>
      <div>
        <h3>first counter</h3>
        <Counter counterId='first' />
      </div>
      <div>
        <h3>second counter</h3>
        <Counter counterId='second' />
      </div>
    </div>
  )
}
