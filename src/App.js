import { useState } from "react";
import React, { Component } from 'react';

import Header  from './components/Header';

import Tasks  from './components/Tasks';

const App = () =>{
  // allows us to use this in other components
  //myTasks is the name of the state and setMyTasks is the function that will update the state
  const [myTasks, setMyTasks] = useState(
    [
        {
            id:1,
            day:"monday 14:35pm",
            text:"finish my coding task",
            reminder:true
    
        },
        {
            id:2,
            day:"monday 1:35am",
            text:"go for jogging ",
            reminder:false
    
        },
        {
            id:3,
            day:"monday 4:35am",
            text:"set up breakfast ",
            reminder:true
    
        }
    ]
    )
  return (
    <div className="App">
    <Header/>
    <Tasks myTasks = {myTasks}/>
    </div>
  );
}




export default App;
