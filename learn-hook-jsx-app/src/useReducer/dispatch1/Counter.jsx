import { useReducer } from 'react'
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from './reducer/actions'
import reducer, { init, initialState, log } from './reducer/reducer'

export default function Counter() {
  //   const [state, setState] = useState<{ age: number }>({ age: 24 })
  const [state, dispatch] = useReducer(log(), initialState, init)
  //init value initialization
  const increaseAge = () => {
    dispatch(increaseAgeAction())
    // C1: get current value
    // const netxState = reducer(state, increaseAgeAction())
    // console.log(netxState)
  }

  const decreaseAge = () => {
    dispatch(decreaseAgeAction())
  }

  const increaseXAge = (value) => {
    dispatch(increaseXAgeAction(value))
  }
  return (
    <div>
      <button onClick={increaseAge} style={{ color: 'red' }}>
        Increase Age
      </button>
      <p>Helo! You are {state.age}</p>
      <button onClick={decreaseAge} style={{ color: 'green' }}>
        Decrease Age
      </button>
      <button onClick={() => increaseXAge(3)} style={{ color: 'blue' }}>
        Decrease X Age
      </button>
    </div>
  )
}
