import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../components/logo.svg';
import './Navbar.css';



const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    return (
        <nav className="navbar">
            <Link to='/'><Logo className="logo"/></Link>  
            <ul className="main-nav">
                <li><Link to='/home'>Home</Link></li>
                <li className="about-li" 
                    onMouseOver={() => setDropdownOpen(true)} 
                    onMouseLeave={() => setDropdownOpen(false)}>
                    <Link to='/about' >About</Link>
                    <i className={`bi bi-caret-down-fill ${dropdownOpen ? 'open-dropdown' : ''}`} ></i>
                </li>
                <ul className={`about-nav ${!dropdownOpen ? 'hide-dropdown' : ''}`}
                onMouseOver={() => setDropdownOpen(true)}  onMouseLeave={() => setDropdownOpen(false)}>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link  to='/code'>Kod</Link></li>
                    <li><Link to='/music'>Musik</Link></li>
                    <li><Link to='/photo'>Foto</Link></li>
                </ul>                
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        
    )
}

export default Navbar;