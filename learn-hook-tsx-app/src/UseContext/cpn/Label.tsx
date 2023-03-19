import { useContext } from 'react'
import { ThemeContext, ThemeType } from '../Welcome'

export default function Label() {
  const { theme, onChangeTheme } = useContext(ThemeContext)
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
}
