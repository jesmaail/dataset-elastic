import React, { Component } from "react";

class FilterForm extends Component {
    state = {
        filter: "Places",
        value: "Colorado"
    }

    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFilterChange(event) {
        this.setState({filter: event.target.value});
    }

    handleValueChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.callback(this.state.filter, this.state.value);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Filter by:
                    <input type="filter" value={this.state.filter} onChange={this.handleFilterChange} />
                </label>
                <br/>
                <label>
                    Filter value:
                    <input type="value" value={ this.state.value } onChange={this.handleValueChange} />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }    
}

export default FilterForm;