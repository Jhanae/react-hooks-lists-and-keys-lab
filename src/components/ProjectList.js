import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.map((getProject) => {
    return(
      <ProjectItem
      about={getProject.about}
      key={getProject.id}
      name={getProject.name}
      technologies={getProject.technologies}
      />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;