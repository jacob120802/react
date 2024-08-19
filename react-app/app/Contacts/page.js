"use client";
import React, { useState } from "react";

function page() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setTask([...task, {title, desc}]);
    settitle("")
    setdesc("")
    console.log(task)

  }
  const deleteHandler = (i)=>{
    let copyTask = [...task]
    copyTask.splice(i,1)
    setTask(copyTask)

  }
  let renderTask =<h2>No Task</h2>
  if (task.length>0){
    renderTask = task.map((t,i)=>{
        return (
        <li key={i} className="flex items-center justify-between mb-5">
            <div  className=" w-2/3 p-5  flex justify-between">
            <h3 className="text-2xl font-semibold">{t.title}</h3>
            <h5 className="text-xl font-medium">{t.desc}</h5>
        </div>
        <button onClick = {()=> {
            deleteHandler(i);
        }} 
        className="bg-red-700 px-4 py-2 rounded font-bold text-white">Delete</button>
        
        </li>
        )
        
      })
  }
  return (
    <>
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter your task name here"
        className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter your description here"
        className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
        value={desc}
        onChange={(e)=>{
            setdesc(e.target.value)
        }}
      ></input>
      <button className="bg-black rounded text-white px-4 py-2 text-2xl text-bold m-5">
        Add Task
      </button>
    </form>
    <hr/>
    <div className=" p-8 bg-gray-700 text-white">
        <ul>{renderTask}</ul>
    </div>
    </>
  );
}

export default page;
