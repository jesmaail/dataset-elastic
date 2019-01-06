import React, { Component } from "react";
import DataBox from "./databox";

class DataBoxes extends Component { 

    render() {
        return(
            <React.Fragment>
                <div className="row">
                    {this.props.data.map(function(data, id){
                        return(
                            <DataBox
                            key = {id}
                            score = {data._score}
                            title = {data._source.DocumentTitle}
                            year = {data._source.Year}
                            summary = {data._source.DocumentSummary}
                            body = {data._source.Body}
                            geo = {data._source.Geo}
                            sourcetype = {data._source.SourceType}
                            sourceurl = {data._source.SourceUrl}
                            places = {data._source.Places}
                            people = {data._source.People}
                            companies = {data._source.Companies}
                            bigrams = {data._source.BiGrams}
                            trigrams = {data._source.TriGrams}
                            />
                        )
                    })}
                </div>
               
            </React.Fragment>
        )
    }
};

export default DataBoxes;