import "./index.css";
import React from "react";
import CaptionedIcon from "../Icons";

class SkillCategory extends React.Component {
    render() {
        return (
            <div className="skillCategory" id={this.props.name}>
                <h2>{this.props.name}</h2>
                <ul>
                    {
                        this.props.children.map(child => {
                            return (
                              <li key={child}>
                                <CaptionedIcon name={child} />
                              </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SkillCategory;
