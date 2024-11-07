import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "This is a my first doto",
            status: false
        }
    ],
 
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleUpdate: (id) => {}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}