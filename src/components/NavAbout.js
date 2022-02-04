import React from "react";
import { Link } from "react-router-dom";

const NavAbout = () => {
  return (
    <div className='nav-about'>
      <Link to='/code'>Webbdeveloper</Link>
      <Link to='/music'>Musician</Link>
      <Link to='/photo'>Digital Artist</Link>
      <Link className='about-link' to='/about'>
        About me
      </Link>
    </div>
  );
};

export default NavAbout;
