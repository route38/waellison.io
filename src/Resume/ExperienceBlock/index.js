import React from "react";
import Job from "./Job";

class ExperienceBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Experience</h1>
                {
                    this.props.jobs.forEach(job => {
                        <Job jobTitle={job.title} />
                    })
                }
            </div>
        )
    }
}

export default ExperienceBlock;
