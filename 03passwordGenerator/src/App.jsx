import { useState, useCallback, useEffect,useRef } from 'react'



function App() {

  const [length, setLength] = useState(6)
  const [numAllow, setNumber] = useState(false)
  const [charAllow, setcharacter] = useState(false)
  const [password, setPassword] = useState("")
  // console.log(length)
  // console.log(numAllow);
  const passwordGenerator = useCallback(() => {
   let pass = "";
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(numAllow){
     str +="0123456789";
   }
   if(charAllow){
    str +="!@#$%^&*(){}[]~+=";
   }

   for(let i =0; i< length; i++){
     let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char)
   }
   
   setPassword(pass)

  }, [length, numAllow, charAllow]);


  // useEffect trigger passwordGenerator onload 
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator])

  // useRef Hook
  const passwordReff = useRef(null)

const copyPasswordClipboard = useCallback( () => {
    window.navigator.clipboard.writeText(password)    // Copy the selected Text
    
    passwordReff.current?.select();                     // Highlight the selected Text
    passwordReff.current?.setSelectionRange(0, 99);      // Highlight and selecte the Text within range
}, [password])


  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 my-8 py-10 bg-gray-800 text-orange-500">
        <h1 className="text-4xl text-white text-center pb-5">Password Generator</h1>

        <div className="flex rounded-lg overflow-hidden my-5">

          <input type="text" className="outline-none w-full py-2 px-3 text-xl" value={password} placeholder="Password" readOnly ref={passwordReff}/>
          <button className="shrink-0 px-5 py-0.5 text-white text-xl bg-blue-700" onClick={copyPasswordClipboard}>Copy</button>

        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1 pr-5">
            <input type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} className="cursor-pointer" /><label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 pr-5">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => { setNumber((prev) => !prev); }} />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 pr-5">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="numberInput"
              onChange={() => { setcharacter((prev) => !prev); }} />
            <label>Character</label>
          </div>
        </div>



      </div>

    </>
  )
}

export default App
