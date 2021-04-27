import React from 'react'

function Card(props){
 
    const dragStart = e => {

        e.stopPropagation();

        console.log("dragStart")
        console.log( "Color dragged is" , e.currentTarget.style.backgroundColor); //prints color of card dragged
        props.changeColor(e.currentTarget.style.backgroundColor)
    }
    

    return (
        <div
            id = {props.id}
            className = {props.className}
            draggable = {props.draggable}
            style = {{backgroundColor: props.color}}
            onDragStart = {dragStart}
        >
            {props.children}
        </div>
    )
}

export default Card