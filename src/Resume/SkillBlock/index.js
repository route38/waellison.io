import "./index.css";
import React from "react";
import SkillCategory from "./SkillCategory";

export class SkillBlock extends React.Component {
    render() {
        let skills = this.props.skills;
        return (
            <div id="skills">
                <h1>Skills</h1>
                <div id="skillbox">
                    {Object.keys(skills).map(category => {
                        return <SkillCategory
                            key={category}
                            children={skills[category]}
                            name={category} />;
                    })}
                </div>
            </div>
        );
    }
}

export default SkillBlock;
