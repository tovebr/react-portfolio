import React from "react";
import portrait from "../images/portrait.png";
/* import { ReactComponent as Logo } from "../components/logo.svg"; */
import { ReactComponent as LogoWithName } from "../components/logoName.svg";
import "./Home.css";
import NavAbout from "./NavAbout";
import ContactLinks from "./ContactLinks";

const Home = () => {
  return (
    <div id='home' className='container'>
      <div className='home-content'>
        <div className='first'>
          <LogoWithName />
        </div>
        <div className='second'>
          <img className='portrait' src={portrait} alt='portrait'></img>
        </div>
        <div className='third'>
          <NavAbout className='home-links' />
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
