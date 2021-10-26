import Task from "./Task";




const Tasks = ({myTasks, onDelete, onToggle })=>
{

    
        
    return(

        <>
        {myTasks.map((tasks)=>{
            //key keyword is used to uniquely identify each prop
           return( <Task key={tasks.id}  tasks = {tasks} onDelete={onDelete} onToggle={onToggle}/>)
        })
    }
         </>
    )
}

export default Tasks;