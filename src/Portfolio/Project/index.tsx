import React from "react";
import { Octokit } from "octokit";
//import env from "react-dotenv";

const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_TOKEN;

interface IProps {
    user: string;
    project: string;
}

interface IState {
    user: string;
    repos: string;
    projectInfo?: GitHubProject;
    language?: string;
    loaded: Boolean;
    error?: string;
}

type GitHubProject = {
    name?: string,
    description?: string,
    language?: string,
    html_url?: string,
    url?: string
}

export default class Project extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            user: this.props.user,
            repos: this.props.project,
            projectInfo: undefined,
            language: undefined,
            loaded: false,
            error: undefined
        };
        this.getProjectJson = this.getProjectJson.bind(this);
    }

    getProjectJson() {
        const octokit = new Octokit({auth: GITHUB_API_KEY});
        const user: string = this.state.user;
        const repos: string = this.state.repos;

        octokit.request(`GET /repos/${user}/${repos}/languages`)
               .then(
                   (response) => {
                       let topLang = Object.keys(response.data)[0];
                       this.setState({
                           ...this.state,
                           language: topLang ? topLang : "None"
                       });
                   },
                   (error) => {
                       this.setState({
                           ...this.state,
                           loaded: true,
                           error: error
                       })
                   }
               )
               .then(() => {
                    // literally me: https://www.youtube.com/watch?v=in5H8Zg4jME
                    octokit.request(`GET /repos/${user}/${repos}`)
                           .then(
                               (response) => {
                                   let projectInfo: GitHubProject = {
                                       name: response.data.name,
                                       description: response.data.description,
                                       html_url: response.data.html_url,
                                       url: response.data.homepage,
                                       language: this.state.language,
                                   };
                                   this.setState({
                                       ...this.state,
                                       loaded: true,
                                       projectInfo: projectInfo
                                   });
                               },
                               (error) => {
                                   this.setState({
                                       ...this.state,
                                       loaded: true,
                                       error: error
                                   })
                               }
                           )
                });
    }

    componentDidMount() {
        this.getProjectJson();
    }

    render() {
        if(this.state.error) {
            return (
                <div className="oopsie">
                    {this.state.error.toString()}
                </div>
            );
        }

        if(! this.state.loaded) {
            return (
                <div className="loading">
                    <p>
                        Loading...
                    </p>
                </div>
            );
        }

        const project = this.state.projectInfo;

        if(project) {
            let MoreInfoLink = () => {return <></>};

            if(project.url) {
                MoreInfoLink = () => {
                    return (
                        <>
                            {" "}&bull;{" "}
                            <a href={project.url} rel="noreferrer" target="_blank">
                                {
                                    /.*pypi\.org.*/.test(project.url!) ? "PyPI Homepage" : "Project Homepage"
                                }
                            </a>
                        </>
                    )
                };
            }

            return (
                <div className="gitHubProject">
                    <h2>{project.name}</h2>
                    <p className="description">
                        {project.description}
                    </p>
                    <p className="language">
                        Language: {this.state.language}
                    </p>
                    <p className="link">
                        <a href={project.html_url} rel="noreferrer" target="_blank">
                            GitHub Repository
                        </a>
                        <MoreInfoLink />
                    </p>
                </div>
            )
        }
    }
}
