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
    currentFilterAmount: 0,
    currentFilterThreshold: 0
  }

  getData = (filterBy, value, amount, threshold) => {
    let total = this.state.total;
    let data = [...this.state.data];

    axios
      .get("http://localhost:3000/data/get?filter=" + filterBy + "&value=" + value + "&amount=" + amount + "&threshold=" + threshold)
      .then(
        (json) => {
          total = json.data.total;
          data = json.data.hits; 

          if(total < amount){
            amount = total;
          }

          this.setState({ total, data })
          this.setState({ currentFilterby: filterBy })
          this.setState({ currentFilterValue: value })
          this.setState({ currentFilterAmount: amount })
          this.setState({ currentFilterThreshold: threshold })
        } 
      )

  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        
        <FilterForm
          callback = { this.getData }
        />
        <br/>
        Filtered by: <b>{this.state.currentFilterby}</b> = <b>{this.state.currentFilterValue}</b> with score threshold of <b> {this.state.currentFilterThreshold} </b>
        <br/>
        Displaying <b>{this.state.currentFilterAmount}</b> of total <b>{this.state.total}</b> potential hits <i>(ignoring threshold)</i>
        <hr/>

        <DataBoxes data={ this.state.data } />

      </React.Fragment>
    );
  }
}

export default App;
