import React from "react";

class Summary extends React.Component {
    render() {
        return (
            <div id="summary">
                <h1>Summary</h1>
                <p dangerouslySetInnerHTML={{ __html: this.props.text}} />
            </div>
        );
    }
}

export default Summary;
