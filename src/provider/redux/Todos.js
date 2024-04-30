import { getTodos, setTodos } from "@/constant/LocalStorageGetItems";

const { createSlice } = require("@reduxjs/toolkit");

export const TodoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:getTodos() || []
    },
    reducers:{
        AddTodo(state,action){
            state.todos.push(action.payload)
            setTodos(state.todos)
        },
        updateTodo(state,action){
            state.todos = state.todos.map((todo, index) =>
        index === action.payload ? { ...todo, isCompleted: true } : todo);
        setTodos(state.todos)
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter((cur,i)=>i!=action.payload)
            setTodos(state.todos)
        
        }
    }
})

export const {AddTodo,updateTodo,deleteTodo} = TodoSlice.actions