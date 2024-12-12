import { useState } from 'react'

//###################### Fibre and reconciliation ############################
//########## Fibre:
/*(1) The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. 
  (2) Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
*/
//########## Reconciliation:
/*(1) The algorithm React uses to diffrence between one tree with another to determine which parts need to be changed.*/


function basiCount() {

  let [counter, setCount] = useState(0)        // 0 is a default value where to start counting

  let addValue = () => {
    setCount(counter + 1)                            // If we repeate this line at 3 times but its works as normally it update value by + 1 
    // setCount((previous) => previous + 1 )         // If we wanted to the previous updated value in useState then we can use this syntex
    // setCount((previous) => previous + 1 ) 
    // setCount((previous) => previous + 1 ) 
  }
  let removeValue = () => {
    setCount(counter - 1)
  }

  return (
    <>
      <div className="container m-auto text-center mt-10">
        <h2 className="text-white text-4xl mb-10">1. React - useState</h2>
        <h1 className="bg-green-400 m-auto font-semibold inline-flex p-5 rounded-xl text-3xl sm:text-4xl">The Bus Have {counter} Passenger For Now!</h1>

        <div className="mt-20">
          <button className="inline-flex justify-center rounded-lg text-md font-semibold py-2.5 px-4 bg-slate-200 text-black hover:bg-slate-300 -my-2.5 ml-8" onClick={addValue}>Add Value</button>
          <button className="inline-flex justify-center rounded-lg text-md font-semibold py-2.5 px-4 bg-slate-200 text-black hover:bg-slate-300 -my-2.5 ml-8" onClick={removeValue}>Remove Value</button>
        </div>

      </div>
    </>
  )
}

export default basiCount
