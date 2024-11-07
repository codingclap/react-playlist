import SimpleProps from "./componenets/SimpleProps"
import HtmlProps from "./componenets/HtmlProps"
import FunctionProp from "./componenets/FunctionProp"
import RandomNum from "./componenets/RandomNum";
import { useState } from "react";
/*
=> Props are arguments passed into React components. 
(**** props stands for properties ****)

Task-1: Passing data through Props to the child componenets.
Task-2: Passing HTML Content through component without props.
Task-3: Passing Function to useState.
Task-4: Generate a Random Number.
*/

function App() {

  const [count, setCount] = useState(0);
  const [random, setRandomNo] =  useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", width: "1920px", height: '100vh' }}>

      {/* Task-1: Passing Props to the Child Componenets*/}
      <SimpleProps name={'anuj kumar'} age={23} hobbies={["dancing", "Singing"]} />


      {/* Task-2: Passing HTML Content through component without props */}

      <HtmlProps>
        <h2>Passing HTML Through Componenet {random}</h2>
        <p>Here we use a component with closing tag and enclosed some HTMl in-between Closing Tag</p>
      </HtmlProps>



      {/*Task-3: Passing Function to useState  */}

      <FunctionProp btn={"Increment"} count={count} onClickHandler={() => setCount(count + 1)} />
      <FunctionProp btn={"Decrement"} count={count} onClickHandler={() => setCount(count - 1)} />


      {/*Task-4: Generate Random Number  */}

      <RandomNum display={random} setRandom={setRandomNo}/>
    </div>
  )
}

export default App
