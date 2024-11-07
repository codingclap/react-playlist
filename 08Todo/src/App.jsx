import React, { useEffect, useState } from "react";
import { TodoProvider } from "./TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  // Add Todos 
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  // Update Todos 
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  // Delete Todos 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // toggle Todos 
  const toggleUpdate = (id) => {
    setTodos((prev) => prev.map((prevToggle) => prevToggle.id === id ? { ...prevToggle, completed: !prevToggle.completed } : prevToggle))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));   // Canvert string into the JSON Object

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleUpdate }}>
      <div className="bg-blue-950 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/*Todo Form */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
