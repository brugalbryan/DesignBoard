import React from 'react'
 

function Board(props){

    const drop = e => {
        props.changeColorOfBox(e.target.id)
        console.log("Color is Dropped on" , e.target.id)
    }
    const dragOver = e => {
        e.preventDefault();
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
