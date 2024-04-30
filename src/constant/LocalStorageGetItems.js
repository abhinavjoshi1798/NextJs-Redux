"use client";
export const getTodos = () => {
    if(typeof window != 'undefined'){
        return JSON.parse(localStorage.getItem("todos"))
    }
   
}
export const setTodos = (todos) => {
    if(typeof window != 'undefined'){
    return localStorage.setItem("todos",JSON.stringify(todos))
    }
}