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
      <h1 className="text-5xl text-center text-white">Password Generator</h1>
    </>
  )
}

export default App
