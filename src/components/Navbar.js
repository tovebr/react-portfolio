import React from "react";
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../components/logo.svg';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'><Logo className="logo"/></Link>  
            <ul className="main-nav">
                <li><Link to='/home'>Home</Link></li>
                <li className="about-li"><Link to='/about'>About</Link><i class="bi bi-caret-down-fill"></i></li>
                <ul className="about-nav">
                    <li><Link  to='/about/code'>Kod</Link></li>
                    <li><Link to='/about/music'>Musik</Link></li>
                    <li><Link to='/about/photo'>Foto</Link></li>
                </ul>                
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;