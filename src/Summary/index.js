import "./index.css";
import React from "react";

class Summary extends React.Component {
    componentDidMount() {
        fetch("./resume.json")
            .then(response => response.json())
            .then(json => this.setState({resume: json}))
            .catch(console.error);
    }

    render() {
        if(this.state) {
            let summary = this.state.resume.summary;
            return (
                <div id="summary">
                    <h1>Summary</h1>
                    <p>{summary}</p>
                </div>
            );
        }
        return null;
    }
}

export default Summary;
