"use client";
// Home.js
import { changeColor } from "@/provider/redux/ColorChange";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import Todo from "./(components)/Todo";
const Todos = dynamic(()=>import('./(components)/Todo'),{ssr:false})
import { toast } from "react-toastify";
import { AddTodo } from "@/provider/redux/Todos";
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic'

export default function Home() {
  const color = useSelector((state) => state.color.value);
  const state = useSelector(state=>state.todos.todos)
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    dispatch(changeColor(e.target.value));
  };

  const [form,setForm] = useState({
    title:"",
    description:"",

  }) 

  console.log("state",state  )

  const onChangeHandler = (e) => setForm({...form,[e.target.name]:e.target.value})

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    const item = {
      ...form,
      isCompleted:false,
      id:new Date().getTime()
    }
    dispatch(AddTodo(item))
    try{
      setForm({
        title:"",
        description:"",
      })
toast.success("Todo Added Successfully")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <div style={{display:"flex",
    flexDirection:"column",
    border:"1px solid gray",
    textAlign:"center",
    }}>
      <h1>Redux Color Picker</h1>
        <div className="w-24 h-24" style={{ backgroundColor: color,margin:"auto" }}></div>
        <input type="color" value={color} onChange={handleColorChange} style={{margin:"auto"}} />
        </div>
      <div className="min-h-screen w-full md:w-[70%] mx-auto">
        <form onSubmit={onSubmitHandler} className="w-full mx-auto mb-3 py-10">
          <div className="mb-3">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="w-full ring-blue-500 ring-1 py-4 border px-4"
              placeholder="Enter Title"
              onChange={onChangeHandler}
              value={form.title}
              name={"title"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Description</label>
            <textarea
              rows={5}
              className="w-full ring-blue-500 ring-1 py-4 border px-4"
              placeholder="Enter Description"
              onChange={onChangeHandler}
              value={form.description}
              name={"description"}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded">
              Add Todo
            </button>
          </div>
        </form>
        <Todo/>
      </div>
    </>
  );
}
