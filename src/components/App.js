import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainter";
import FilterForm from "./FilterForm";

class App extends Component {

  state = {
    hogsArray: hogs,
    option: "all"
  }

  changeFilter = (filterOpt) => {
    debugger
    if (filterOpt === "true"){
      let filteredHogs = this.state.hogsArray.filter(hogObj => {
        return hogObj.greased === true
      })
      this.setState({
        hogsArray: filteredHogs
      })
    } else if (filterOpt === "false"){
      let filteredHogs = this.state.hogsArray.filter(hogObj => {
        return hogObj.greased === false
      })
      this.setState({
        hogsArray: filteredHogs
      })
    } else {
      this.setState({
        hogsArray: this.state.hogsArray
      })
    }
  
    
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <FilterForm changeFilter={this.changeFilter}/>
        <HogContainer hogsArray={this.state.hogsArray}/>
      </div>
    );
  }
}

export default App;
