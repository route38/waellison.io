import "./index.css";
import React from "react";
import SkillCategory from "../SkillCategory";

class Skills extends React.Component {
    componentDidMount() {
        fetch("./resume.json")
            .then(response => response.json())
            .then(json => this.setState({resume: json}))
            .catch(console.error);
    }

    render() {
        if(this.state) {
            let skills = this.state.resume.skills;
            return (
                <div id="skills">
                    <h1>Skills</h1>
                    <div id="skillbox">
                    {
                        Object.keys(skills).map(category => {
                            return <SkillCategory
                                     key={category}
                                     children={skills[category]}
                                     name={category} />
                        })
                    }                    
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default Skills;
