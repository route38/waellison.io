import React from 'react';
import resumeData from '../resumeData';
import Summary from './Summary';
import SkillBlock from './SkillBlock';
import EducationBlock from './EducationBlock';
import ExperienceBlock from './ExperienceBlock';

class Resume extends React.Component {
  render() {
    let resume = resumeData;
    return (
      <div className="container" id="resume">
        <Summary text={resume.summary} />
        <SkillBlock skills={resume.skills} />
        <ExperienceBlock jobs={resume.experience} />
        <EducationBlock schools={resume.education} />
      </div>
    );
  }
}

export default Resume;
