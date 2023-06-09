import './App.css'
import Ads from './MouseTracker/cpn/Ads'
import MouseTracker from './MouseTracker/MouseTracker'
import Manager from './ReactPortal/cpn/Manager'
import MainLayout from './ReactPortal/MainLayout'
import DifferentWaysTodoList from './TodoList/components/TodoList/DifferentWaysTodoList'
import TodoList from './TodoList/components/TodoList/TodoList'
import DifferentWaysWelcome from './UseContext/DifferentWaysWelcome'
import Welcome from './UseContext/Welcome'
import ProductList from './UseDeferredValue/ProductList'
import AutoInput from './UseImperativeHandle/AutoInput'
import Counter from './UseReducer/dispatch1/Counter'

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <DifferentWaysWelcome /> */}
      {/* <AutoInput />
      <ProductList /> */}
      {/* <MainLayout>s
        <Manager />
      </MainLayout> */}
      {/* <MouseTracker render={(value) => <Ads {...value} />} /> */}
      {/* <Ads visible /> */}
      <TodoList />
    </div>
  )
}

export default App
