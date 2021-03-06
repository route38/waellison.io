import React from "react";
import { resumeData, ResumeData } from "../resumeData";
import Summary from "./Summary";
import SkillBlock from "./SkillBlock";
import EducationBlock from "./EducationBlock";
import ExperienceBlock from "./ExperienceBlock";

class Resume extends React.Component {
  render() {
    let resume: ResumeData = resumeData;
    return (
      <div className="container">
        <Summary text={resume.summary} />
        <SkillBlock skills={resume.skills} />
        <EducationBlock schools={resume.education} />
        <ExperienceBlock jobs={resume.experience} />
      </div>
    );
  }
}

export default Resume;
