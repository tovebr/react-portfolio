import React from "react";
import { Outlet } from "react-router-dom";
import NavAbout from './NavAbout';
import portrait from '../images/portrait.png';
import './About.css';


const About = () => {
    return (
        
            <div id="about" className="container">
            <div className="left">
                

                <p className="first-p">As a developer, musician and photographer I always find great use for my creativity. It is, without a doubt, my greatest asset.</p>
                <p className="second-p"> Before studying webdevelopment I worked as a freelance musician for 10+ years. I have run my own company during that time. Not only did it teach me to harvest and nourish my creativity, it also made me a skilled administrator and problemsolver. Check out my work!</p>
                
                
                
            </div>
            <div className="right">
                <img className="portrait" src={portrait} alt="portrait"></img>
            </div>
            <NavAbout className="about-nav"/>
            <Outlet />
        </div>
        
        
    )
}

export default About;