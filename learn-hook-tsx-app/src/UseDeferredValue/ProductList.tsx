import { useDebugValue, useDeferredValue, useState, useTransition } from 'react'
import ProductCards from './cpn/ProductCards'
import ProductInput from './cpn/ProductInput'

export default function ProductList() {
  const [name, setName] = useState<string>('')
  const [deferredName, setDeferredName] = useState<string>('')
  const [pending, startTransition] = useTransition()
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    startTransition(() => {
      setDeferredName(event.target.value)
    })
  }
  //Khi gõ liên tục thì sẽ bị hoãn tý
  // const deferredName = useDeferredValue(name)
  return (
    <div>
      <h1> Product List</h1>
      <ProductInput name={name} onChangeName={onChangeName} />
      {pending && <div>Loading....</div>}
      {!pending && <ProductCards name={deferredName} />}
    </div>
  )
}
