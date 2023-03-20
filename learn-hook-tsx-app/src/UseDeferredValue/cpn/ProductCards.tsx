import { useEffect, useState } from 'react'

export default function ProductCards({ name }: { name: string }) {
  const [product, setProduct] = useState<string[]>([])
  useEffect(() => {
    console.log(name)
    const SIZE = 9999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProduct(result)
  }, [name])
  //Render 1ds lơn tốn thời gian nên sử dụng useDeferredValue để hoãn render lại 1 chút
  return (
    <div>
      {product.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}
