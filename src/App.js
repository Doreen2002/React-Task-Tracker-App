import { useState } from "react";
import React, { Component } from 'react';

import Header  from './components/Header';

import Tasks  from './components/Tasks';

import AddTask from "./components/AddTask";

const App = () =>{
const [showTasks, setShowTasks] = useState(false)
  // allows us to use this in other components
  //myTasks is the name of the state and setMyTasks is the function that will update the state
  const [myTasks, setMyTasks] = useState(
    [
        {
            id:1,
            day:"monday 14:35pm",
            text:"Sample Task",
            reminder:true
    
        },
        
    ]
    )
    //Add Task
    const addTask = (task)=>
    {
       //create a rounded off  random id  to identify unique lists
       const id = Math.floor(Math.random()* 100) + 10;

       const  newTask = {id, ...task};

       setMyTasks([...myTasks, newTask]);
     
    
       

         
       
       
      
       
    }
    //delete function
    const deleteTask = (id)=>
    {
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
    <Header onAdd = {()=>setShowTasks(!showTasks)}/>
   
   { showTasks && <AddTask onAdd = {addTask}/>} 
    {myTasks.length>0?<Tasks myTasks = {myTasks} onDelete = {deleteTask}  onToggle= {toggleReminder}/>:"You have no tasks"}
    </div>
  );
}




export default App;
