import React, { Component } from "react";

class FilterForm extends Component {
    state = {
        filter: "Places",
        value: "Colorado",
        amount: 5,
        threshold: 6
    }

    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleThresholdChange = this.handleThresholdChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFilterChange(event) {
        this.setState({filter: event.target.value});
    }

    handleValueChange(event) {
        this.setState({value: event.target.value});
    }

    handleAmountChange(event) {
        this.setState({amount: event.target.value})
    }

    handleThresholdChange(event) {
        this.setState({threshold: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.callback(this.state.filter, this.state.value, this.state.amount, this.state.threshold);
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
                <label>
                    Amount: 
                    <input type="amount" value={ this.state.amount } onChange={this.handleAmountChange} />
                </label>
                <br/>
                <label>
                    Relevance Score Threshold: 
                    <input type="threshold" value={ this.state.threshold } onChange={this.handleThresholdChange} />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }    
}

export default FilterForm;