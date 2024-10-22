import { useState } from "react"

function Bgchnage() {

  let [color, setColor] = useState('green');

  return (
    <>

      <div className="w-screen h-screen" style={{ backgroundColor: color }}>



        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          {/* Navbar */}
            <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-3xl">
                <button  onClick={() => setColor("red")} className="outline-none bg-red-700 px-5 py-1 rounded-3xl text-xl text-white">Red</button>
                <button  onClick={() => setColor("green")} className="outline-none bg-green-800 px-5 py-1 rounded-3xl text-xl text-white">Green</button>
                <button  onClick={() => setColor("black")} className="outline-none bg-black px-5 py-1 rounded-3xl text-xl text-white">Black</button>
                <button  onClick={() => setColor("yellow")} className="outline-none bg-yellow-500 px-5 py-1 rounded-3xl text-xl text-white">Yellow</button>
                <button  onClick={() => setColor("pink")} className="outline-none bg-pink-600 px-5 py-1 rounded-3xl text-xl text-white">Pink</button>
                <button  onClick={() => setColor("orange")} className="outline-none bg-orange-500 px-5 py-1 rounded-3xl text-xl text-white">Orange</button>
            </div>
        </div>

      </div>

    </>
  )
}

export default Bgchnage
