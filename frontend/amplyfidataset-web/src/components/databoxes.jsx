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
                            title = {data.DocumentTitle}
                            year = {data.Year}
                            summary = {data.DocumentSummary}
                            body = {data.Body}
                            geo = {data.Geo}
                            sourcetype = {data.SourceType}
                            sourceurl = {data.SourceUrl}
                            places = {data.Places}
                            people = {data.People}
                            companies = {data.Companies}
                            />
                        )
                    })}
                </div>
               
            </React.Fragment>
        )
    }
};

export default DataBoxes;