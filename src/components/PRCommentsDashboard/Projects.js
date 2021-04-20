import React, { useContext, useState } from "react";
import PRCommentsContext from "../../context/prComments/prCommentsContext";

export const Projects = () => {
  const prCommentsContext = useContext(PRCommentsContext);
  const projectList = prCommentsContext.projects.map((project, i) => {
    return (
      <option key={i} value={project.id}>
        {project.key}
      </option>
    );
  });

  
  
  const { getRepositories } = prCommentsContext;

   const selectedProject = (e) =>getRepositories(e.target.options[e.target.selectedIndex].text);
   
  


  return (
    <div className="grid-1">
      <strong for="sel-options" className="lead">
        Projects
      </strong>
      <select
        id="sel-options"
        onChange={selectedProject}
        style={{ width: "200px", marginTop: "10px" }}
      >
        {projectList}
      </select>
    </div>
  );
};

export default Projects;
