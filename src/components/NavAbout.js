import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavAbout = () => {
  return (
    <div className='nav-about'>
      <Link className='about-link' to='/about'>
        About me
      </Link>
      <Link to='/code'>Webbdeveloper</Link>
      <Link to='/music'>Musician</Link>
      <Link to='/photo'>Digital Artist</Link>
    </div>
  );
};

export default NavAbout;
