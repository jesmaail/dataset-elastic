import React, { Component } from "react";
import NavBar from "./components/navbar";
import DataBoxes from "./components/databoxes";
import FilterForm from "./components/filterform";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    total: 0,
    data: [],
    currentFilterby: "NONE",
    currentFilterValue: "NONE",
    currentFilterAmount: "5"
  }

  filterCallback = (filter, value, amount) => {
    this.getData(filter, value, amount)
  }

  getData = (filterBy, value, amount) => {
    console.log("getData: " + filterBy + ": " + value)
    let total = this.state.total;
    let data = [...this.state.data];

    axios
      .get("http://localhost:3000/data/get?filter=" + filterBy + "&value=" + value + "&amount=" + amount)
      .then(
        (json) => {
          total = json.data.total;
          data = json.data.data; 

          if(total < amount){
            amount = total;
          }

          this.setState({ total, data })
          this.setState({ currentFilterby: filterBy })
          this.setState({ currentFilterValue: value })
          this.setState({ currentFilterAmount: amount})
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
        Filtered by: {this.state.currentFilterby} = {this.state.currentFilterValue}
        <br/>
        Displaying {this.state.currentFilterAmount} of total {this.state.total} hits.
        <hr/>

        <DataBoxes data={ this.state.data } />

      </React.Fragment>
    );
  }
}

export default App;
