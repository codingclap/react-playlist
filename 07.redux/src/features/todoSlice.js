import { createSlice, nanoid } from '@reduxjs/toolkit';

// Default State
const initialState = {
    todos: [{ id: 1, name: 'Hello world', amount: 10 }]
}

 
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name,   
                amount: action.payload.amount
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((prev) => prev.id !== action.payload)
        }
    }
})  


export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer




