import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [pass, setPass]= useState("")

  const passGen= useCallback(()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "~!@#$%^&*()_+=[]{}<>"

    for (let i = 1; i <= array.length; i++) {
        let char= Math.floor(Math.random()*str.length+1)
        pass= str.charAt(char)
    }
    setPass(pass)

  }, [length, numberAllowed, charAllowed, setPass])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'><h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
        />
        <button className='outline-none bg-blue-700 px-3 py-0.5 text-white shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />  
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }} />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
