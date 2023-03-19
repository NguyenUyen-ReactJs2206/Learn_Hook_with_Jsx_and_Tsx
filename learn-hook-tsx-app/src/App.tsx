import './App.css'
import DifferentWaysWelcome from './UseContext/DifferentWaysWelcome'
import Welcome from './UseContext/Welcome'
import Counter from './UseReducer/dispatch1/Counter'

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      {/* <Welcome /> */}
      <DifferentWaysWelcome />
    </div>
  )
}

export default App
