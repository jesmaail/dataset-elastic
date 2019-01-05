import React, { Component } from "react"

class MetadataItem extends Component {

    render(){
        return(
            <React.Fragment>
                { this.props.title }
                <br/>
                <small className="text-muted">{ this.props.value }</small>
            </React.Fragment>
        )        
    }

}

export default MetadataItem;