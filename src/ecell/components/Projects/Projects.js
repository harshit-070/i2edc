import uniqid from "uniqid";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
// import './Projects.css'
import React from "react";

const Projects = (props) => {
  if (!projects.length) return null;
  const theme = props.theme;
  return (
    // <section id='events' >
    <div>
      <h2 className="section__title link" style={{ color: theme.text }}>
        Events
      </h2>

      <div className="repo-cards-div-main">
        {projects.map((project) => {
          return (
            <ProjectContainer key={uniqid()} repo={project} props={props} />
          );
        })}
      </div>
    </div>
    // </section>
  );
};

export default Projects;
