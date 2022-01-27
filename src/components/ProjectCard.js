import React from "react"; 
import { Link } from "react-router-dom";


const ProjectCard = ({project, formatTitle}) => {
    
    
    const link = () => {
        if(typeof project.url !== 'string') {
            return <div className="links">
                <a href={project.url.demo}>Demo</a>
                <a href={project.url.github}>Github</a>
            </div>
        } else {

            return <div className="link"><a href={project.url} target={"_blank"} rel="noreferrer">More</a></div>
        }
    }
    link();
    
    return (
        <div className="card">
            <p className="card-title">{formatTitle(project.title)}</p>
            <div className="card-image">
                <img src={project.img} alt={project.title}></img>
            </div>
            {link()}
        </div>
    )
}

export default ProjectCard;
