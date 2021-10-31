import { useEffect, useState } from "react";
import React, { Component } from 'react';

import Header  from './components/Header';

import Tasks  from './components/Tasks';

import AddTask from "./components/AddTask";

const App = () =>{
const [showTasks, setShowTasks] = useState(false)
  // allows us to use this in other components
  //myTasks is the name of the state and setMyTasks is the function that will update the state
const [myTasks, setMyTasks] = useState([]);

useEffect(()=>
{
    const  getTasks = async()=>
    {
        const taskFromServer = await  fetchTasks();

        setMyTasks(taskFromServer);
    }

    getTasks();
   
},
[]
)
 //creating an asyc function to fetch tasks
 const fetchTasks = async()=>
 {
   const res = await fetch("http://localhost:5000/tasks");
   const data = await res.json();
   return data;
 }
 //creating an asyc function to fetch  a single task
 const fetchTask = async(id)=>
 {
   const res = await fetch(`http://localhost:5000/tasks/${id}`);
   const data = await res.json();
   return data;
 }

    //Add Task
    const addTask = async(task)=>
    {
     const res =  await fetch("http://localhost:5000/tasks",
      {
        method:"POST",
        "headers":
        {
          'Content-type':"application/json"
        },
        body: JSON.stringify(task)
      })

      const data = await res.json();
      setMyTasks([...myTasks, data])
       
    }
    //delete function
    const deleteTask = async(id)=>
    {

      await fetch(
        `http://localhost:5000/tasks/${id}`,
        {
          "method":"DELETE"
        }
        
      )

        setMyTasks(myTasks.filter((tasks)=>
         tasks.id !== id, 
        ))
    }

    //toggle reminder 
    const toggleReminder = (id)=>
    {
        setMyTasks(
          myTasks.map((task)=>
          task.id === id ? {
          ...task, reminder:!task.reminder
          }:task
          )
        )
    }

  return (
    <div className="container">
    <Header onAdd = {()=>setShowTasks(!showTasks)} showAdd = {showTasks}/>
   
   { showTasks && <AddTask onAdd = {addTask}/>} 
    {myTasks.length>0?<Tasks myTasks = {myTasks} onDelete = {deleteTask}  onToggle= {toggleReminder}/>:"You have no tasks"}
    </div>
  );
}




export default App;
