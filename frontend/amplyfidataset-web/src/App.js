import React, { Component } from "react";
import NavBar from "./components/navbar";
import DataBoxes from "./components/databoxes";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    total: 0,
    data: []
  }

  getData = () => {
    let total = this.state.total;
    let data = [...this.state.data];

    axios
      .get("http://localhost:3000/data/get?filter=Places&value=Colorado")
      .then(
        (json) => {
          total = json.data.total;
          data = json.data.data; 
          this.setState( { total, data} )
        } 
      )

  }

  clearData = () => {

  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <button onClick={ this.getData }> Get Data </button>
        <button> Clear Data </button>
        <button> Filter </button>

        <br/>

        <span> Total hits: {this.state.total} </span>

        <DataBoxes data={ this.state.data } />

      </React.Fragment>
    );
  }
}

export default App;
