
import React from "react";
import { Link, Outlet} from 'react-router-dom';


const NavAbout = () => {
    return (
        <div className="nav-about">
            <Link className="about-link"  to='/about'>About me</Link>
            <Link  to='/code'>Webbdevelopment</Link>
            <Link  to='/music'>Music</Link>
            <Link  to='/photo'>Photo</Link>
        </div>   
    )
}

export default NavAbout;