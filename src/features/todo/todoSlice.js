import { createSlice, isActionCreator, nanoid } from '@reduxjs/toolkit'
//state variable todos
const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }]
}
//jo ye create slice function hain naa esse hum slice create karenge slice means bundle of reducers+action
//fineally we have three reducers addTodo,deleteTodo,markAsDone
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {//state,action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo)//redux allow we can set data direct in state variable
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        marksAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                console.log("mark As done")
                if (todo.id === action.payload) {
                  return{
                    
                    ...todo,
                    isDone:true,
                   

                    
                   
                  }
                }
                return todo
            })
        }
    }
})
//redux toolkit automatically generates action creators (function that create action objects)
export const{addTodo,deleteTodo,marksAsDone}=todoSlice.actions//action creators
export default todoSlice.reducer;




