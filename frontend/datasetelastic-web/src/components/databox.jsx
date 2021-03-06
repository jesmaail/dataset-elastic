import React, { Component } from "react";
import TextDataBox from "./textdatabox";
import MetadataBox from "./metadatabox";

class DataBox extends Component { 
    titleStyle = {
        fontSize: 18
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
                    year = { this.props.year }
                    sourcetype = { this.props.sourcetype }
                    sourceurl = { this.props.sourceurl }
                />

                <MetadataBox
                    titleStyle = { this.titleStyle }
                    score = { this.props.score }
                    geo = { this.props.geo }
                    places = { this.props.places }
                    people = { this.props.people }
                    companies = { this.props.companies }
                    bigrams = { this.props.bigrams }
                    trigrams = { this.props.trigrams }
                />
            </React.Fragment>
        )
    }
};

export default DataBox;