import { createContext, useCallback, useMemo, useState } from 'react'
import FormDifferent from './cpnDifferentWays/FormDifferent'
import { LabelDifferent } from './cpnDifferentWays/LabelDifferent'

import './welcome.css'

export interface ThemeType {
  theme: { color: 'light' | 'dark' }
  onChangeTheme: (color: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeType>({
  theme: { color: 'light' },
  onChangeTheme: () => {}
})

export default function DifferentWaysWelcome() {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const [, forceRender] = useState({})

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])
  //when click pleaseRender then welcom re render
  const pleaseRender = () => forceRender({})

  return (
    <div className='welcome'>
      <div>
        {' '}
        <button onClick={pleaseRender}>Please Render Onclick</button>
      </div>
      <ThemeContext.Provider value={valueContext}>
        <FormDifferent />
        <LabelDifferent />
      </ThemeContext.Provider>
    </div>
  )
}
