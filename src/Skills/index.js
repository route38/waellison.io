import React from "react";
import SkillCategory from "../SkillCategory";

class Skills extends React.Component {
    componentDidMount() {
        fetch("./skills.json")
            .then(response => response.json())
            .then(json => this.setState({skills: json}))
            .catch(console.error);
    }

    render() {
        if(this.state) {
            let skills = this.state.skills;
            return (
                <div id="skillsArea">
                    <h1>Skills</h1>
                    {
                        Object.keys(skills).map(category => {
                            return <SkillCategory
                                     key={category}
                                     children={skills[category]}
                                     name={category} />
                        })
                    }
                </div>
            );
        }
        return null;
    }
}

export default Skills;
