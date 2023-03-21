import React, { useState } from 'react'

interface PositionType {
  x: number
  y: number
}
export default function MouseTracker({ render }: { render: (value: PositionType) => JSX.Element }) {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <p style={{ color: 'red' }}>Mouse Move</p>
      {render(position)}
    </div>
  )
}

export function withMouseTracker<T>(Component: React.ComponentType<T & PositionType>) {
  return function (props: any) {
    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    return (
      <div onMouseMove={handleMouseMove}>
        <p style={{ color: 'red' }}>Mouse Move</p>
        <Component {...props} {...position} />
      </div>
    )
  }
}
