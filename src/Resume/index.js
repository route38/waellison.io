import './index.css';
import Summary from './Summary';
import SkillBlock from './SkillBlock';
import ExperienceBlock from './ExperienceBlock';
import React from 'react';
import resumeData from '../resumeData';

class Resume extends React.Component {
  render() {
    let resume = resumeData.resume;
    return (
      <div className="container" id="resume">
        <Summary text={resume.summary} />
        <SkillBlock skills={resume.skills} />
        <ExperienceBlock jobs={resume.experience} />
      </div>
    );
  }
}

export default Resume;
