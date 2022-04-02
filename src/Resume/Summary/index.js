import "./index.css";
import React from "react";

class Summary extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="summary">
                <h1>Summary</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Summary;
