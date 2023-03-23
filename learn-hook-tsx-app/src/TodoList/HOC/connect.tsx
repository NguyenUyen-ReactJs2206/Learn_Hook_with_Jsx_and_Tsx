import React from 'react'

// truyen props bang HOC
export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}
//constants
const debug = true

const log = (value: any) => {
  console.log(value)
}
//T co nghia: khi goi  connect(TaskInput) no se dai dien cho TaskInput props
// Omit<T, keyof ExtraInfoType> la goi y tru key cua ExtraInfoType
export default function connect<T>(Component: React.ComponentType<T & ExtraInfoType>) {
  return function (props: Omit<T, keyof ExtraInfoType>) {
    const _props = props as T
    return <Component {..._props} debug={debug} log={log} />
  }
}
