import React from "react";

class Job extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <h2>{this.props.jobTitle}</h2>
        );
    }
}

export default Job;
