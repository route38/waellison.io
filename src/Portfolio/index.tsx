import React from "react";
import Project from "./Project";

const Portfolio = () => {
    const username: string = "waellison"; // FIXME this really shouldn't be a prop
    let i = 0;
    let projects: Array<string> = [
        "willpress",
        "willread",
        "react-resume",
        "react-resume-api",
        "nuventure",
        "pysfr",
        "willshorten",
    ]
    return (
        <div className="container">
            <h1>Selected Work</h1>
            {
                projects.map ((project) => {
                    return <Project key={`project${i++}`} user={username} project={project}/>
                })
            }
        </div>
    );
};

export default Portfolio;
