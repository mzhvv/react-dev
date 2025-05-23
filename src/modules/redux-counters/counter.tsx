// src/modules/counters/counter.tsx

import { useDispatch } from 'react-redux'
// import { bindActionCreators } from '@reduxjs/toolkit'

import { useAppSelector } from '@/app/store'
import { Button } from '@/shared/ui/button'

import type { CounterId } from './counters.reducer'
import { decrementAction, incrementAction, selectCounter } from './counters.reducer'

export const Counter: React.FC<{ counterId: CounterId }> = ({ counterId }) => {
  // console.log('render Counter', counterId)

  const dispatch = useDispatch()
  const counterState = useAppSelector(store => selectCounter(store, counterId))

  // const actions = bindActionCreators(
  //   {
  //     decrementAction,
  //     incrementAction,
  //   },
  //   dispatch
  // )

  return (
    <div className='flex items-center justify-center gap-2'>
      <Button onClick={() => dispatch(decrementAction({ counterId }))}>decrement</Button>
      {/* <Button onClick={() => actions.decrementAction({ counterId })}></Button> */}

      <div>{counterState.counter}</div>

      <Button onClick={() => dispatch(incrementAction({ counterId }))}>increment</Button>
      {/* <Button onClick={() => actions.incrementAction({ counterId })}>increment</Button> */}
    </div>
  )
}
