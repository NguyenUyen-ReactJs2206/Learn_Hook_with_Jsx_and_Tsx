import React, { createContext, useState } from 'react'
import Form from './cpn/Form'
import Label from './cpn/Label'
import './welcome.css'

export interface ThemeType {
  theme: { color: 'light' | 'dark' }
  onChangeTheme: (color: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeType>({
  theme: { color: 'light' },
  onChangeTheme: () => {}
})

export default function Welcome() {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const onChangeTheme = (color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }
  return (
    <div className='welcome'>
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <Form />
        <Label />
      </ThemeContext.Provider>
    </div>
  )
}
