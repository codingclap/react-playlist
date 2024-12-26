import { createSlice, nanoid } from '@reduxjs/toolkit';

// Default State
const initialState = {
    todos: localStorage.getItem('todoItem') ? JSON.parse(localStorage.getItem('todoItem')) : []
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
            };
            
            state.todos.push(todo);
            localStorage.setItem('todoItem', JSON.stringify(state.todos.map((item) => item)));
        },

        edittodo: (state, action) => {
            const oldRec = JSON.parse(localStorage.getItem('todoItem'));
            const {uiqueID, name, amount } = action.payload;

            localStorage.setItem('todoItem', JSON.stringify(oldRec.map((editTodo) => editTodo.id === uiqueID ? {...editTodo, name:name, amount:amount} : editTodo)));
            
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((prev) => prev.id !== action.payload);

            localStorage.setItem('todoItem', JSON.stringify(state.todos.filter((prev) => prev.id !== action.payload)))
        }
    }
})


export const { addTodo, edittodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;




