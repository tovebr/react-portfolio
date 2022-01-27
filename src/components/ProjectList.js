import React from "react";
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = ({data}) => {
    const formatTitle = (title) => {
        
        if(title.includes(' ')) {
            let titleCased = []
            title.split(' ').forEach((word) => 
                titleCased.push(word.slice(0,1).toUpperCase() + word.slice(1)));
                return titleCased.join(' ');
            }
        return title.slice(0,1).toUpperCase() + title.slice(1);
    }
    
    const projects = data.data.map( (proj, i) => {
        return <ProjectCard key={i} project={proj} formatTitle={formatTitle}/>
    })
    
    
    return (
        <div className="project-list">{projects}</div>
    )
}

export default ProjectList;


