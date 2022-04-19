import React from "react";
import School from "./School";

class EducationBlock extends React.Component {
  render() {
    let schools = this.props.schools;
    return (
      <div>
        <h2>Education</h2>
        {Object.keys(schools).map((key) => (
          <School key={key} {...schools[key]} />
        ))}
      </div>
    );
  }
}

export default EducationBlock;
