import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Code from './components/Code'
import Music from "./components/Music";
import Photo from "./components/Photo";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} >
                    <Route path='code' element={<Code /> }/>
                    <Route path='music' element={<Music /> }/>
                    <Route path='photo' element={<Photo /> }/>
                </Route>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App;