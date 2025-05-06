// src/modules/counters/counters.reducer.ts

import { createAction, createReducer } from '@reduxjs/toolkit'

import type { AppState } from '@/app/store'

export type CounterId = string
export type CounterState = {
  counter: number
}

export const incrementAction = createAction<{
  counterId: CounterId
}>('counters/increment')

export const decrementAction = createAction<{
  counterId: CounterId
}>('counters/decrement')

type CountersState = Record<CounterId, CounterState | undefined>

const initialCounterState: CounterState = { counter: 0 }
const initialCountersState: CountersState = {}

export const countersReducer = createReducer(initialCountersState, builder => {
  builder.addCase(incrementAction, (state, action) => {
    const { counterId } = action.payload

    if (!state[counterId]) {
      state[counterId] = { ...initialCounterState }
    }
    state[counterId].counter++

    // const currentCounter = state[counterId] ?? initialCounterState
    // return {
    //   ...state,
    //   [counterId]: {
    //     ...currentCounter,
    //     counter: currentCounter.counter + 1,
    //   },
    // }
  })

  builder.addCase(decrementAction, (state, action) => {
    const { counterId } = action.payload

    if (!state[counterId]) {
      state[counterId] = { ...initialCounterState }
    }
    state[counterId].counter--

    // const currentCounter = state[counterId] ?? initialCounterState
    // return {
    //   ...state,
    //   [counterId]: {
    //     ...currentCounter,
    //     counter: currentCounter.counter - 1,
    //   },
    // }
  })
})

// selectors

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId] ?? initialCounterState

/*
  ...

  type IncrementAction = {
    type: 'increment'
    payload: {
      counterId: CounterId
    }
  }
  type DecrementAction = {
    type: 'decrement'
    payload: {
      counterId: CounterId
    }
  }

  type Action = IncrementAction | DecrementAction

  export const countersReducer = (state = initialCountersState, action: Action): CountersState => {
    switch (action.type) {
      case 'increment': {
        const { counterId } = action.payload
        const currentCounter = state[counterId] ?? initialCounterState
        return {
          ...state,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter + 1,
          },
        }
      }

      case 'decrement': {
        const { counterId } = action.payload
        const currentCounter = state[counterId] ?? initialCounterState
        return {
          ...state,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter - 1,
          },
        }
      }

      default:
        return state
    }
  }
  
  ...
*/
