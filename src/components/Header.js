import React  from "react";
import reactDom from "react-dom";

const Header= ({title})=>
{

    return(
       <header>
           <h1 style={headerStyle}>{title}</h1>
       </header>
    )

}

//style for the header
const headerStyle = {
    backgroundColor:"red",
    color:"white",
    textAlign:"center"

}

/* this is a default prop, that has been accessed through destructing*/

Header.defaultProps = {

    title:"Task Tracker App",

}




export default Header