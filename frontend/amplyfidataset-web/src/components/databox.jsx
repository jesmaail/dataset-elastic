import React, { Component } from "react";
import TextDataBox from "./textdatabox";
import MetadataBox from "./metadatabox";

class DataBox extends Component { 
    titleStyle = {
        fontSize: 16
    }

    summaryStyle = {
        fontSize: 12
    }

    bodyStyle = {
        fontSize: 10
    }

    render() {
        return(
            <React.Fragment>       
                <TextDataBox 
                    titleStyle = { this.titleStyle }
                    summaryStyle = { this.summaryStyle }
                    bodyStyle = { this.bodyStyle }
                    title = { this.props.title }
                    summary = { this.props.summary }
                    body = { this.props.body }
                />
                
                <MetadataBox
                    titleStyle = { this.titleStyle }
                    geo = { this.props.geo }
                />
            </React.Fragment>
        )
    }
};

export default DataBox;