


// color and text are being passed as props through destructuring
const Button = ({color, text, onClick})=>
{
    return(
        <>
     <button className="button" style={{backgroundColor:color, cursor:"pointer"}} onClick={onClick}>{text}</button>

        </>
    )
}


Button.defaultProps =
{
    backgroundColor:"green",
    text:"Button"
}


export default Button;