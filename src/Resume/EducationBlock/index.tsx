import React from "react";
import School from "./School";
import { EducationSection } from "../../resumeData";

interface IProps {
    schools: EducationSection
}

class EducationBlock extends React.Component<IProps> {
  render() {
    let schools = this.props.schools;
    return (
      <div>
        <h2>Education</h2>
        {Object.keys(schools).map((key: string) => (
          <School key={key} {...schools[key]} />
        ))}
      </div>
    );
  }
}

export default EducationBlock;
