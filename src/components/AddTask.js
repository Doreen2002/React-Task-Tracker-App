import {useState} from 'react';

const AddTask = ({onAdd})=>
{
    //creating component state and setting defualt values
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const [inputValidation, setInputValidation] = useState('');

    //on submit function 
    const onSubmit = (e)=>
    {
         e.preventDefault();
         if(!text || !day)
         {
            setInputValidation('Task or Day field cannot be empty');
         }
         else
         {
        onAdd({text, day,reminder});
         //clears the form
         setText('');
         setDay('');
         setReminder(false);
         }
    }

    return (
        <form className="add-task-form" onSubmit={onSubmit}>
          <div>
              <label>TASK</label>
              <input type="text" placeholder="ENTER TASK" value={text}
              onChange={(e)=>setText(e.target.value)}
              ></input>
             
          </div>
          <div>
              <label>DAY & TIME</label>
              <input type="text" placeholder="ENTER DAY AND TIME"
              value={day} onChange={(e)=>setDay(e.target.value)}
              ></input>
             
          </div>
          <div>
              <label>REMINDER</label>
              <input type="checkbox" value={reminder}
              checked={reminder}
              onChange={(e)=>setReminder(e.currentTarget.checked)}
              ></input>
          </div>
          <span>{inputValidation}</span>
         <input type="submit" value="SAVE TASK"></input>

        </form >
    )
}


export default AddTask;