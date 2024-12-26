import AddTodo from "./componenets/addTodo";
import DisplayList from "./componenets/DisplayList";
import { useState } from "react";

function App() {
  
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [uiqueID, setUiqueID] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  return (
    <>
      <AddTodo name={name} setName={setName} amount={amount} setAmount={setAmount} editStatus={editStatus} setEditStatus={setEditStatus} uiqueID={uiqueID} setUiqueID={setUiqueID}/>
      <DisplayList name={name} setName={setName} amount={amount} setAmount={setAmount} setEditStatus={setEditStatus} setUiqueID={setUiqueID}/>
    </>
  )
}

export default App
