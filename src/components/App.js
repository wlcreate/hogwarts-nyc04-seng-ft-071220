import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainter";
import Filter from "./Filter";

class App extends Component {

  state = {
    hogsArray: hogs,
    selectedOption: "all"
  }

  changeFilter = (chosenOpt) => {
    this.setState({
      selectedOption: chosenOpt
    })
  }

  returnNewHogsArray = () => {
    if (this.state.selectedOption === "all"){
      return this.state.hogsArray
    }
    else if (this.state.selectedOption === "true"){
      return this.state.hogsArray.filter(hog => hog.greased)
    }
    else if (this.state.selectedOption === "false"){
      return this.state.hogsArray.filter(hog => !hog.greased)
    }
    else if (this.state.selectedOption === "weight"){
      let copyOfHogsArray = [...this.state.hogsArray]
      copyOfHogsArray.sort((pigA, pigB) => {
        return pigA.weight - pigB.weight
      })
      return copyOfHogsArray
    }
    else if (this.state.selectedOption === "name"){
      let copyOfHogsArray = [...this.state.hogsArray]
      copyOfHogsArray.sort((pigA, pigB) => {
        return pigA.name.localeCompare(pigB.name)
      })
      return copyOfHogsArray
    }
  }

render(){
  return (
    <div className="App">
        <Nav />
        <HelloWorld />
        <Filter changeFilter={this.changeFilter} selectedOpt={this.state.selectedOption}/>
        <HogContainer hogsArray={this.returnNewHogsArray()}/>
      </div>
    );
  }
}

export default App;

// changeFilter = (filterOpt) => {
//   debugger
//   if (filterOpt === "true"){
//     let filteredHogs = this.state.hogsArray.filter(hogObj => {
//       return hogObj.greased === true
//     })
//     this.setState({
//       hogsArray: filteredHogs
//     })
//   } else if (filterOpt === "false"){
//     let filteredHogs = this.state.hogsArray.filter(hogObj => {
//       return hogObj.greased === false
//     })
//     this.setState({
//       hogsArray: filteredHogs
//     })
//   } else {
//     this.setState({
//       hogsArray: this.state.hogsArray
//     })
//   }