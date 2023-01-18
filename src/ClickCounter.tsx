import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  const name = 'vova'
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count = {count}</button>
    </div>
  )
}
