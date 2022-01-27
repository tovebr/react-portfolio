import React from "react";
import portrait from '../images/portrait.png';
import {ReactComponent as Logo} from '../components/logo.svg';
import './Home.css';
import NavAbout from "./NavAbout";


const Home = () => {
    return (
        <div id="home" className="container home-content">
            <div className="left">
                <div className="left-content">

                <div className="home-header">
                    <Logo className="home-logo" />
                    <div className="home-name">
                        <h2 className="first-name">Tove </h2>
                        <h2 className="last-name">Brandt</h2>
                    </div>
                    
                </div>
                <NavAbout className="home-links"/>
                </div>
                
            </div>
            <div className="right">
                <img className="portrait" src={portrait} alt="portrait"></img>
            </div>
        </div>
    )
}

export default Home;