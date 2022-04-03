import React from "react";
import Job from "./Job";

class ExperienceBlock extends React.Component {
    render() {
        let jobs = this.props.jobs;
        console.log(jobs);
        return (
            <div>
                <h2>Experience</h2>
                {
                    Object.keys(jobs).map(key => (<Job key={key} {...jobs[key]} />))
                }
            </div>
        )
    }
}

export default ExperienceBlock;
