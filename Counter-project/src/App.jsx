import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCount] = useState(5)

  // let Counter = 5
  const addValue = () => {
    // console.log("Add Value", Counter)
    // Counter = Counter + 1
    // setCount(Counter)

    if (Counter < 20){
      setCount(Counter + 1)
    }


  }
  

  const removeValue = () => {
    // if (Counter > 0){
    //   console.log("Remove Counter", Counter)
    //   Counter = Counter - 1
    // }
    // console.log("Remove Counter", Counter)
    // Counter = Counter - 1
    // setCount(Counter - 1)
    if (Counter > 0){
      setCount(Counter - 1)
    }
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value {Counter}</button>
      <p>Header: {Counter}</p>
    </>
  )
}

export default App
