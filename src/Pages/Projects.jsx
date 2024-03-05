import React from "react";
import project from "../Components/ProjectGallery/Project.json";
import Project from "../Components/ProjectGallery/Project";

function Projects() {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {project.map((item) => (
          <Project item={item}/>
        ))}
      </ul>
    </div>
  );
}

export default Projects;

