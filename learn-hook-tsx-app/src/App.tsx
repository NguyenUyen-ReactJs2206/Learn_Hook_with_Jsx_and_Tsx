import './App.css'
import Manager from './ReactPortal/cpn/Manager'
import MainLayout from './ReactPortal/MainLayout'
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
      <MainLayout>
        <Manager />
      </MainLayout>
    </div>
  )
}

export default App
