import React  from "react";
import reactDom from "react-dom";

import Button from "./Button";

const Header= ({title, onAdd})=>
{

    return(
       <header className="header">
           <h1 style={headerStyle}>{title}</h1>
           <Button color="lightgreen" text="ADD TASK" onClick = {onAdd} />
       </header>
    )

}

//style for the header
const headerStyle = {
   
    color:"lightblue",
    textAlign:"center"

}

/* this is a default prop, that has been accessed through destructing*/

Header.defaultProps = {
   
    title:"Task Tracker App",

}





export default Header