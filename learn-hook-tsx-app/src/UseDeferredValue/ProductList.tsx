import { useDebugValue, useDeferredValue, useState } from 'react'
import ProductCards from './cpn/ProductCards'
import ProductInput from './cpn/ProductInput'

export default function ProductList() {
  const [name, setName] = useState<string>('')
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  //Khi gõ liên tục thì sẽ bị hoãn tý
  const deferredName = useDeferredValue(name)
  return (
    <div>
      <h1> Product List</h1>
      <ProductInput name={name} onChangeName={onChangeName} />
      <ProductCards name={deferredName} />
    </div>
  )
}
