import React from "react";
import CaptionedIcon from "../../../Icons";

interface IProps {
    name: string,
    children: Array<any>,
}

export default class SkillCategory extends React.Component<IProps> {
  render() {
    return (
      <div className="skillCategory" id={this.props.name}>
        <h3>{this.props.name}</h3>
        <ul>
          {this.props.children.map((child) => {
            return (
              <li key={child} className="captionedIconContainer">
                <CaptionedIcon name={child} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
