import React from "react";
import { resumeData, ExperienceSection } from "../../resumeData";
import Job from "./Job";

interface IProps {
    jobs: ExperienceSection;
}

class ExperienceBlock extends React.Component<IProps> {
  render() {
    let jobs = this.props.jobs;
    return (
      <div>
        <h2>Experience</h2>
        {Object.keys(jobs).map((key) => (
          <Job key={key} {...jobs[key]} />
        ))}
      </div>
    );
  }
}

export default ExperienceBlock;
