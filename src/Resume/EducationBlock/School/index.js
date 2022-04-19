import React from "react";

class School extends React.Component {
  render() {
    let startYear = this.props.startDate.split("-")[0];
    let endYear = "present";
    let competencies = this.props.competencies;
    if (this.props.endDate != null) {
      endYear = this.props.endDate.split("-")[0];
    }

    let dateStr =
      startYear === endYear ? `${startYear}` : `${startYear} to ${endYear}`;

    return (
      <div className="event">
        <h3>{this.props.institution}</h3>
        <p>
          {dateStr}, {this.props.credential}
        </p>
        <p dangerouslySetInnerHTML={{ __html: this.props.description }} />
        <ul className="skillsUsed">
          {competencies.map((skill, idx) => (
            <li
              className="skillTag"
              key={idx}
              dangerouslySetInnerHTML={{ __html: skill }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default School;
