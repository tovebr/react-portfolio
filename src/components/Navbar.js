import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../components/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav id='navbar' className='navbar'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <i className='bi bi-list'></i>
      </div>
      <ul
        className={`main-nav ${menuOpen || width > breakPoint ? "" : "hide"}`}
      >
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li
          className='about-li'
          onMouseOver={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Link to='/about'>About</Link>
          <i
            className={`bi bi-caret-down-fill ${
              dropdownOpen ? "open-dropdown" : ""
            }`}
          ></i>
        </li>
        <ul
          className={`about-nav ${!dropdownOpen ? "hide-dropdown" : ""}`}
          onMouseOver={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <li>
            <Link to='/about'>About Me</Link>
          </li>
          <li>
            <Link to='/code'>Code</Link>
          </li>
          <li>
            <Link to='/music'>Music</Link>
          </li>
          <li>
            <Link to='/photo'>Photo</Link>
          </li>
        </ul>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
