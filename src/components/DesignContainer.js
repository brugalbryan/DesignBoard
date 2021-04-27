import React from 'react';
import Board from './Board';
import Card from './Card';
import EditButton from './EditButton';


class DesignContainer extends React.Component {
    constructor(props){
            
        super(props)
        // this is the initial state
        this.state = {
            canEdit: true,
            color: "",
            colorOfBox1: "transparent",
            colorOfBox2: "transparent",
            colorOfBox3: "transparent",
            colorOfBox4: "transparent",
            colorOfButton: "lime",

        }
    }

    handleEdit = (event) => {
      if(this.state.canEdit === false){
        this.setState({canEdit: true}) 
        this.setState({colorOfButton:"lime"})
        }else{
            this.setState({canEdit: false})
            this.setState({colorOfButton:"red"})
        }
    
    }   


    changeColor= (newcolor) => {
        this.setState({color: newcolor}) 
    }

    changeColorOfBox = (id) => {
        if(this.state.canEdit === true){
            if( id === "Box_1"){
            this.setState({colorOfBox1: this.state.color}) 
            } else if (id === "Box_2"){
            this.setState({colorOfBox2: this.state.color})
            } else if (id === "Box_3"){
            this.setState({colorOfBox3: this.state.color})
            } else if (id === "Box_4"){
            this.setState({colorOfBox4: this.state.color})
            }
        }
    }

  
  render(){
    return (
        <div>
            <div className = "container"> 
                <h1 style = {{textAlign: 'center', color: 'white'}}>DESIGN PAD</h1>
                <br></br>
                <br></br>
                <br></br>
                <div className ="leftContainer">
                    <div className = "colorContainer">
                        <Card id = "color1" className = "card" draggable = "true" color = "purple" changeColor = {this.changeColor}> <p>Color 1</p></Card>
                        <Card id = "color2" className = "card" draggable = "true" color = "red" changeColor = {this.changeColor}> <p>Color 2</p></Card>
                        <Card id = "color3" className = "card" draggable = "true" color = "lime" changeColor = {this.changeColor}> <p>Color 3</p></Card>
                        <Card id = "color4" className = "card" draggable = "true" color = "aqua" changeColor = {this.changeColor}> <p>Color 4</p></Card>
                        <Card id = "color5" className = "card" draggable = "true" color = "blue" changeColor = {this.changeColor}> <p>Color 5</p></Card>
                        <Card id = "color6" className = "card" draggable = "true" color = "yellow" changeColor = {this.changeColor}> <p>Color 6</p></Card>
                        <Card id = "color7" className = "card" draggable = "true" color = "green" changeColor = {this.changeColor}> <p>Color 7</p></Card>
                        <Card id = "color8" className = "card" draggable = "true" color = "orange" changeColor = {this.changeColor}> <p>Color 8</p></Card>
                        <EditButton canEdit = {this.handleEdit} color = {this.state.colorOfButton}/>
                    </div>
                </div>
                <div className = "rightContainer">
                    <div className = "flexbox">
                        <Board id = "Box_1" className = "board" color = {this.state.colorOfBox1} changeColorOfBox = {this.changeColorOfBox}></Board>
                        <Board id = "Box_2" className = "board" color = {this.state.colorOfBox2} changeColorOfBox = {this.changeColorOfBox}></Board>
                        <Board id = "Box_3" className = "board" color = {this.state.colorOfBox3} changeColorOfBox = {this.changeColorOfBox}></Board>
                        <Board id = "Box_4" className = "board" color = {this.state.colorOfBox4} changeColorOfBox = {this.changeColorOfBox}></Board>
                    </div>
                </div>
            </div> 
        </div>
    );
  }
}
export default DesignContainer;