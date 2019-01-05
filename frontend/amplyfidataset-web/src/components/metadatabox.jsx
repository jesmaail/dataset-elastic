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
                                title = "Tags"
                            />
                            <MetadataItem 
                                title = "Geo"
                                value = { this.props.geo }
                            />
                            
                            {/* These divs can go into their own component */}

                            <div>
                                Tags:
                                <br/>
                                <button className="btn btn-sm btn-outline-secondary" disabled>Tag1</button>
                                <button className="btn btn-sm btn-outline-secondary" disabled>Tag2</button>
                            </div>

                            <div>
                                Companies:
                                <br/>
                                <small className="text-muted"> Company A </small>,
                                <small className="text-muted"> Amplyfi </small>
                            </div>     
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MetadataBox;