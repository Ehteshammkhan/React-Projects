import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // Useref Hook
  const PasswordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log(char);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0, 101)
    // console.log(PasswordRef.current);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-1/3 mx-auto shadow-md rounded-lg px-6 py-8 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-center text-white mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            ref={PasswordRef}
            value={Password}
            placeholder='Password'
            className='outline-none w-full py-2 px-3'
          />
          <button className='outline-none px-4 bg-blue-700 text-white py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 flex justify-between'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value);
                console.log(e.target);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='inputs-parent flex gap-4'>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id='CharInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Charecters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
