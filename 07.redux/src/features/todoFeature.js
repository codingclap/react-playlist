import {createSlice, nanoid} from '@reduxjs/toolkit'


// Initial State

const initialState = {
  todos: [{id:1, name:'anuj kumar', email:'anuj@gmail.com' }]
}


export const todoFeature = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) =>{
            const todo = {id:nanoid(), name:action.payload.name, email:action.payload.email}
            state.todos.push(todo)
        } 
    }

})


export const{addtodo} = todoFeature.action
export default todoFeature.reducer