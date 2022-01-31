import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, formatTitle }) => {
  const link = () => {
    if (typeof project.url !== "string") {
      return (
        <div className='links'>
          <a href={project.url.demo} target={"_blank"} rel='noreferrer'>
            Demo
          </a>
          <a href={project.url.github} target={"_blank"} rel='noreferrer'>
            Github
          </a>
        </div>
      );
    } else {
      return (
        <div className='link'>
          <a href={project.url} target={"_blank"} rel='noreferrer'>
            More
          </a>
        </div>
      );
    }
  };
  link();

  return (
    <div className='card'>
      <p className='card-title'>{formatTitle(project.title)}</p>
      <div className='card-image'>
        <img src={project.img} alt={project.title}></img>
      </div>
      {link()}
    </div>
  );
};

export default ProjectCard;
