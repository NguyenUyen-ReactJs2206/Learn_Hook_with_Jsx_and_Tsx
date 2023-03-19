import React, { useContext, useId } from 'react'
import { ThemeContext } from '../DifferentWaysWelcome'

export const LabelDifferent = React.memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  console.log('Label')
  const id1 = useId()
  const id2 = useId()
  return (
    <div>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
        id={id1 + 'label'}
      />
      <label htmlFor={id1 + 'label'}>Use dark mode</label>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
        id={id2 + 'label'}
      />
      <label htmlFor={id2 + 'label'}>Use dark mode</label>
    </div>
  )
})
