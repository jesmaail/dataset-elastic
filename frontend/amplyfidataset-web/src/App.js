import React, { Component } from "react";
import NavBar from "./components/navbar";
import DataBoxes from "./components/databoxes";
import FilterForm from "./components/filterform";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    total: 0,
    data: []
  }

  filterCallback = (filter, value) => {
    console.log(filter + ": " + value)
    this.getData(filter, value)
  }

  getData = (filterBy, value) => {
    console.log("getData: " + filterBy + ": " + value)
    let total = this.state.total;
    let data = [...this.state.data];

    axios
      .get("http://localhost:3000/data/get?filter=" + filterBy + "&value=" + value)
      .then(
        (json) => {
          total = json.data.total;
          data = json.data.data; 
          this.setState( { total, data} )
        } 
      )

  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        
        <FilterForm
          callback = { this.filterCallback }
        />
        <br/>
        <span> Total hits: {this.state.total} </span>

        <DataBoxes data={ this.state.data } />

      </React.Fragment>
    );
  }
}

export default App;
