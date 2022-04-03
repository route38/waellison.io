import React from "react";

class Job extends React.Component {
    render() {
        let startYear = this.props.startDate.split("-")[0];
        let endYear = "present";
        let duties = this.props.duties;
        let competencies = this.props.competencies;
        if(this.props.endDate != null) {
            endYear = this.props.endDate.split("-")[0];
        }

        return (
            <div className='event'>
                <h2>{this.props.title}</h2>
                <p>
                    {startYear} to {endYear} at {this.props.company}
                </p>
                <ul>
                    {
                        duties.map((duty, idx) => (<li key={idx} dangerouslySetInnerHTML={{ __html: duty }} />))
                    }
                </ul>
                <ul className='skillsUsed'>
                    {
                        competencies.map((skill, idx) =>
                            (<li className='skillTag' key={idx} dangerouslySetInnerHTML={{ __html: skill }}/>))
                    }
                </ul>
            </div>
        );
    }
}

export default Job;
