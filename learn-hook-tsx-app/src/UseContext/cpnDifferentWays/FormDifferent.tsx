import { useContext } from 'react'
import { ThemeContext } from '../DifferentWaysWelcome'

export default function FormDifferent() {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'panel-' + theme.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
const Button = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'button-' + theme.color
  return <button className={className}>{children}</button>
}
