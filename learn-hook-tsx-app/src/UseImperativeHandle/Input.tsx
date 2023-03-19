import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

export const Input = forwardRef<{ type: () => void }>((props, ref) => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      type
    }
  })

  const type = () => {
    let numberIndex = 0
    const initialString = 'Du Thanh Duoc'
    inputRef.current?.focus()
    let interval: any = setInterval(() => {
      setValue(initialString.slice(0, numberIndex))
      if (numberIndex === initialString.length) {
        return clearInterval(interval)
      }
      numberIndex++
    }, 100)
  }

  return (
    <div>
      <input type='text' placeholder='type something' ref={inputRef} onChange={() => {}} value={value} />
    </div>
  )
})
