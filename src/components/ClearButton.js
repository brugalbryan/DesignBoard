
function ClearButton(props){

    return(
 
        <div>
            <br/>
            <br/>
            <button className = "button" onClick={props.clear}  style = {{backgroundColor: props.color}}> <b style = {{color: "red"}}>CLEAR</b>  </button>
        </div>
    )
}
export default ClearButton