import { useState } from 'react'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(4)

  function decreaseCount() {
    //setCount(count - 1)
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  return(
    <>
    <button onClick={decreaseCount}>-</button>
    <span>{count}</span>
    <button onClick={increaseCount}>+</button>
    <Task>fdfdf</Task>

  </>
 )
}

export default App
