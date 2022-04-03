import React from "react";
import School from "./School";

class EducationBlock extends React.Component {
    render() {
        let schools = this.props.schools;
        console.log(schools);
        return (
            <div>
                <h1>Education</h1>
                {
                    Object.keys(schools).map(key => (<School key={key} {...schools[key]} />))
                }
            </div>
        )
    }
}

export default EducationBlock;

