
function EditButton(props){

    return(
        <div>
            <br/>
            <br/>
            <button className = "button" onClick={props.canEdit}  style = {{backgroundColor: props.color}}> <b >EDIT</b>  </button>
        </div>
    )

}
export default EditButton