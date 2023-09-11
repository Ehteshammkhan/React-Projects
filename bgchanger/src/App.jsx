import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3">
        <div className="flex flex-wrap jutify-center gap-3shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>purple</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>black</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>grey</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>blue</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>orange</button>
        </div>
        <div className="flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
