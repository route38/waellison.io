import React from "react";
import Project from "./Project";

const Portfolio = () => {
    const username = "waellison"; // FIXME this really shouldn't be a prop
    let projects = [
        "willpress",
        "willread",
        "react-resume",
        "react-resume-api",
        "nuventure",
        "pysfr",
        "willshorten",
    ]
    return (
        <div id="portfolio" className="projectContainer">
            <h1>Selected Work</h1>
            {
                projects.map ((project) => {
                    return <Project user={username} project={project}/>
                })
            }
        </div>
    );
};

export default Portfolio;
