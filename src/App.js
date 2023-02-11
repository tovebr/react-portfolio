import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Code from './components/Code';
import Music from './components/Music';
import Photo from './components/Photo';
import { data } from './data';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/code' element={<Code data={data.myWork.code} />} />
        <Route path='/music' element={<Music data={data.myWork.music} />} />
        <Route path='/photo' element={<Photo data={data.myWork.photo} />} />
      </Routes>
    </Router>
  );
};

export default App;
