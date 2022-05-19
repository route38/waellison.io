import React from "react";
import Project from "./Project";

const Portfolio = () => {
    const username: string = "waellison"; // FIXME this really shouldn't be a prop
    let i = 0;
    let projects: Array<string> = [
        "willpress",
        "willread",
        "laroux",
        "react-without-cra",
        "nuventure",
        "songquiz",
    ]
    return (
        <div className="container">
            <h1>Selected Work</h1>
            <p>
                These projects are loaded live from GitHub.
            </p>
            <div className="projectContainer">
            {
                projects.map ((project) => {
                    return <Project key={`project${i++}`} user={username} project={project}/>
                })
            }
            </div>
        </div>
    );
};

export default Portfolio;
