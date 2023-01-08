import uniqid from "uniqid";
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'
import "./ProjectContainer.css";
import React from "react";
const ProjectContainer = ({ repo }) => (
  <div className="project">
    <h3>{repo.name}</h3>

    <p className="project__description">{repo.description}</p>
    <p className="project__stack">{repo.stack} </p>
  </div>
);

export default ProjectContainer;
