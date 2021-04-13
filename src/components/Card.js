import React from 'react'

function Card(props){
 
    const dragStart = e => {
        const target = e.target;
    
        e.dataTransfer.setData('card_id', target.id);
    }
    
    const dragOver = e => {
        e.stopPropagation();
        e.dataTransfer.setData("text",e.currentTarget.id);
        console.log("hello - dragOver")
        console.log(e.currentTarget.style.backgroundColor);
        props.changeColor(e.currentTarget.style.backgroundColor)

    }

    
    
    
    return (
        <div
            id = {props.id}
            className = {props.className}
            draggable = {props.draggable}
            style = {{backgroundColor: props.color}}
            onDragStart = {dragStart}
            onDragOver = {dragOver}
            
        >
         
            {props.children}
        </div>
    )
}

export default Card