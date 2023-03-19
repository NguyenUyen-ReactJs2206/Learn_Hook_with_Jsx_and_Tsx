import React, { useContext } from 'react'
import { ThemeContext } from '../DifferentWaysWelcome'

export const LabelDifferent = React.memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  console.log('Label')
  return (
    <div>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      <label>Use dark mode</label>
    </div>
  )
})
