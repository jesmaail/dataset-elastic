import React, { Component } from "react";
import MetadataItem from "./metadataitem";

class MetadataBox extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <span style={this.titleStyle}> <b>Metadata</b> </span>
                            <br/>
                            <MetadataItem 
                                title = "Geo"
                                value = { this.props.geo }
                            />
                            <MetadataItem 
                                title = "Places"
                                value = { this.props.places }
                            />
                            <MetadataItem 
                                title = "People"
                                value = { this.props.people }
                            />
                            <MetadataItem
                                title = "Companies"
                                value = { this.props.companies }
                            />  
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MetadataBox;