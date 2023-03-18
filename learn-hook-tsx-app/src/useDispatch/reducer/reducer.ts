import { ActionType } from './actions'

export const initialState = { age: 26 }

//when you want calculate
export const init = (initialArg: typeof initialState) => {
  return { ...initialArg, age: initialArg.age + 4 }
}

// const reducer = (state: typeof initialState, action: ActionType) => {
//   if (action.type === 'increase_age') {
//     return {
//       ...state,
//       age: state.age + 1
//     }
//   }
//   if (action.type === 'decrease_age') {
//     return {
//       ...state,
//       age: state.age - 1
//     }
//   }
//   if (action.type === 'increase_xage') {
//     return {
//       ...state,
//       age: state.age + action.payload
//     }
//   }
//   //   return state
//   throw Error('Invalid Action', action)
// }
const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increase_age':
      return {
        ...state,
        age: state.age + 1
      }
    case 'decrease_age':
      return {
        ...state,
        age: state.age - 1
      }
    case 'increase_xage':
      return {
        ...state,
        age: state.age + action.payload
      }
    default:
      throw Error('Invalid Action', action)
  }
}
// C2: get current value
export const log = () => {
  return (state: typeof initialState, action: ActionType) => {
    console.group(action.type)
    console.log('Previous State', state)
    const netxState = reducer(state, action)
    console.log('Next State', netxState)
    console.groupEnd()
    return netxState
  }
}

export default reducer
