import React from "react";
import SkillCategory from "./SkillCategory";
import { SkillsSection } from "../../resumeData";

interface IProps {
    skills: SkillsSection;
}

export default class SkillBlock extends React.Component<IProps> {
  render() {
    let skills = this.props.skills;
    return (
      <div id="skills">
        <h2>Skills</h2>
        <div id="skillbox">
          {Object.keys(skills).map((category) => {
            return (
              <SkillCategory
                key={category}
                children={skills[category]}
                name={category}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
