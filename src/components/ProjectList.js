import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectList.css";

const ProjectList = ({ data, formatTitle }) => {
  const projects = data.data.map((proj, i) => {
    return <ProjectCard key={i} project={proj} formatTitle={formatTitle} />;
  });

  return <div className='project-list'>{projects}</div>;
};

export default ProjectList;
