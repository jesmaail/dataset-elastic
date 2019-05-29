import React, { Component } from "react"

class MetadataItem extends Component {

    printValues(){
        if(Array.isArray(this.props.value)){
            return this.props.value.map((value, key) => <small key={ key } className="text-muted"><i>{ value }, </i></small>)
        }
        else{
            return <small className="text-muted"><i>{ this.props.value }</i></small>
        }        
    }

    render(){
        return(
            <React.Fragment>
                { this.props.title }
                <br/>
                { this.printValues() }
                <br/>
            </React.Fragment>
        )        
    }

}

export default MetadataItem;