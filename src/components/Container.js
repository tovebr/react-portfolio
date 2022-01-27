import React from "react";
import ProjectList from "./ProjectList";
import './Container.css';

const Container = ({id, data}) => {
    return (<div className="container" id={id}>
        <div className="project-info">

        <h2 className="project-header">{data.about.header}</h2>
        <p className="project-text">{data.about.text}</p>
        </div>
        <ProjectList className="project-list" data={data}/>
    </div>)  
} ;

export default Container;