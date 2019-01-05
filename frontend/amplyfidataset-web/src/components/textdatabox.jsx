import React, { Component } from "react";

class TextDataBox extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="col-md-8">                          
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <span style={this.props.titleStyle}> <b>{ this.props.title }</b ></span>
                            <br/>
                            <span style={this.props.summaryStyle}><i>{ this.props.summary }</i></span>
                            <hr/>
                            <div className="card-text">
                                <p style={this.props.bodyStyle}>         
                                    { this.props.body }                                        
                                </p>                
                            </div>
                        </div>

                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default TextDataBox;