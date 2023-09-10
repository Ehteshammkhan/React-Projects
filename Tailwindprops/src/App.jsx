import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  // let Myobj = {
  //   name: "armash",
  //   lastname: "Khaan"
  // }

  // let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind</h1>
      <div className='card-parent'>
        <Card userName="Stacy" btnText="Read more" />
        <Card userName="Nebula" btnText="Read more" />
      </div>
    </>
  )
}

export default App
