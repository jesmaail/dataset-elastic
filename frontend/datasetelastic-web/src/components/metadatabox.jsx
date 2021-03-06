import React, { Component } from "react";
import MetadataItem from "./metadataitem";

class MetadataBox extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <span style={this.titleStyle}> <b>Metadata - Relevance: { this.props.score }</b> </span>
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
                            <MetadataItem
                                title = "BiGrams"
                                value = { this.props.bigrams }
                            />
                            <MetadataItem
                                title = "TriGrams"
                                value = { this.props.trigrams }
                            />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MetadataBox;