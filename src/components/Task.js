// component to render each task
import react from "react";
import Button from "./Button";
const Task = ({tasks, onDelete, onToggle })=>
{
    return (
        <div  className={`task ${tasks.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(tasks.id)}>
            <h3 >{tasks.text}</h3> <Button  text="Delete" color="red" onClick= {()=>onDelete(tasks.id)} />
            <p>{tasks.day}</p>
        </div>
    )
}




export default Task;