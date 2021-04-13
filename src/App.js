import React from 'react';
import Board from './components/Board';

import Card from './components/Card';


export default class App extends React.Component {
  constructor(props){
            
    super(props)
    // this is the initial state
    this.state = {
      color: "",
      colorOfBox1: "transparent",
      colorOfBox2: "transparent",
      colorOfBox3: "transparent",
      colorOfBox4: "transparent"

    }
  }
  changeColor= (newcolor ) => {
    this.setState({color: newcolor}) 
  }

  changeColorOfBox = (id) => {
    if( id == "board-1"){
    this.setState({colorOfBox1: this.state.color}) 
    } else if (id == "board-2"){
      this.setState({colorOfBox2: this.state.color})
    } else if (id == "board-3"){
      this.setState({colorOfBox3: this.state.color})
    } else if (id == "board-4"){
      this.setState({colorOfBox4: this.state.color})
    }
  }

  
  render(){
    return (
      <div className="App">
           <Card id = "color1" className = "card" draggable = "true" color = "green" changeColor = {this.changeColor}> <p>Color 1</p></Card>
           <Card id = "color2" className = "card" draggable = "true" color = "blue" changeColor = {this.changeColor}> <p>Color 2</p></Card>
           <Card id = "color3" className = "card" draggable = "true" color = "purple" changeColor = {this.changeColor}> <p>Color 3</p></Card>
           <Card id = "color4" className = "card" draggable = "true" color = "brown" changeColor = {this.changeColor}> <p>Color 4</p></Card>
        <div className = "flexbox">
          <Board id = "board-1" className = "board" color = {this.state.colorOfBox1} changeColorOfBox = {this.changeColorOfBox}> <p>Box one</p> </Board>
          <Board id = "board-2" className = "board" color = {this.state.colorOfBox2} changeColorOfBox = {this.changeColorOfBox}> <p>Box two</p> </Board>
          <Board id = "board-3" className = "board" color = {this.state.colorOfBox3} changeColorOfBox = {this.changeColorOfBox}> <p>Box three</p> </Board>
          <Board id = "board-4" className = "board" color = {this.state.colorOfBox4} changeColorOfBox = {this.changeColorOfBox}> <p>Box four</p> </Board>


        </div>
      </div>
    );
  }
}