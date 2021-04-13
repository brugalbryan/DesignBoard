import React from 'react'


function Board(props){
 
 
    const drop = e => {


         var dropbox = e.target.id // id of each box

        props.changeColorOfBox(e.target.id)
     
        var id = e.dataTransfer.getData("Text");
        console.log(e.currentTarget.style.backgroundColor);
    }
     

    const dragOver = e => {
        e.preventDefault();
        e.dataTransfer.setData("Text", e.target.id)
     
    }
    return (
        <div
        id = {props.id}
        className = {props.className}
        style = {{backgroundColor: props.color}}
        onDrop = {drop}
        onDragOver = {dragOver}
        >
        
            {props.children}
        </div>
    )
}
export default Board
