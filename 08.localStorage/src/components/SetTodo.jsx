import { useEffect, useState } from "react";

export default function SetTodo() {

    const [inputValue, setinputValue] = useState("")
    const [IsEditable, setIsEditable] = useState(false);
    const [currentID, setcurrentID] = useState(false);

    const [todo, settodo] = useState([])

    const submitHandler = (e) => {

        e.preventDefault()
        if (inputValue.trim()) {

            if (!IsEditable) {
                settodo([...todo, { id: Date.now(), text: inputValue }])
                setinputValue("")
                setcurrentID(null)
            } else {
                settodo(todo.map((todos) => todos.id === currentID ? {...todos, text:inputValue } : todos))
                setinputValue("")
                 setIsEditable(false)
                 setcurrentID(null)
                
            }

        }
    }

    // Edit Todo
    const editTodo = (id) => {
        const findEditItem = todo.find((todoo) => todoo.id === id);
        setinputValue(findEditItem.text)
        setIsEditable(true)
        setcurrentID(id)
          
    }

    // Deleted Todo
    const deleteTodo = (id) => {

        settodo(todo.filter((newTodo) =>  newTodo.id !== id))

    }



    useEffect(() => {
        const saveTodo = JSON.parse(localStorage.getItem("todo"))
        if (saveTodo && saveTodo.length > 0) {
            settodo(saveTodo)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
        console.log(todo)
    }, [todo])


    return (
        <>
            <h2><b>Add Todo</b> &nbsp;</h2>
            <form onSubmit={submitHandler}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <input style={{ padding: "10px 0px", fontSize: "17px" }} placeholder="Enter your input" type="text" id="name" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />

                    <button style={{ border: "1px solid black", marginTop: "10px" }}>Save</button>

                </div>
            </form>

            <br />

            <h3>Grocery List:</h3>
            <ul style={{ float: "left", textAlign: "left", width: "100%" }}>
                {
                    todo.map((todo) => (
                        <li key={todo.id}>{todo.text}    &nbsp; &nbsp; <a href="javascript:void(0)" onClick={() => deleteTodo(todo.id)}> Delete</a> ||<a href="javascript:void(0)" onClick={() => editTodo(todo.id)}> Edit</a></li>
                    ))
                }
            </ul>
        </>

    )

}