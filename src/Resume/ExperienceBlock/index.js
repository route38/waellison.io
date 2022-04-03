import React from "react";
import Job from "./Job";

class ExperienceBlock extends React.Component {
    render() {
        let jobs = this.props.jobs;
        console.log(jobs);
        return (
            <div>
                <h1>Experience</h1>
                {
                    Object.keys(jobs).map(key => (<Job key={key} {...jobs[key]} />))
                }
            </div>
        )
    }
}

export default ExperienceBlock;
