import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Code from './components/Code';
import Music from './components/Music';
import Photo from './components/Photo';

const App = () => {
  const data = {
    myWork: {
      code: {
        about: {
          header: 'These are some of my codeing-projects!',
          text: 'I use my own artwork as much as i can to make the projects more alive. These are all written in vanilla JavaScript, some of them has a sprinkle of bootstrap but  I take great pride in writing my own css for the most part.',
        },
        data: [
          {
            description: 'memory game',
            title: 'memory',
            url: {
              demo: 'https://tovebr.github.io/memory/',
              github: 'https://github.com/tovebr/memory',
            },
            img: 'images/memory.jpg',
            desktopOnly: true,
            technology: ['JavaScript', 'CSS', 'HTML'],
          },
          {
            description: 'made webshop, verry fun',
            title: 'webshop',
            url: {
              demo: 'https://tovebr.github.io/webshop/',
              github: 'https://github.com/tovebr/webshop',
            },
            img: 'images/webshop.jpg',
            desktopOnly: false,
            technology: ['JavaScript', 'SASS', 'HTML'],
          },
          {
            description: 'cocktail search',
            title: 'coctailsearch',
            url: {
              demo: 'https://tovebr.github.io/cocktailsearch/',
              github: 'https://github.com/tovebr/cocktailsearch',
            },
            img: 'images/cocktails.jpg',
            desktopOnly: false,
            technology: ['JavaScript', 'CSS', 'Redux'],
          },
          {
            description: 'using bootstrap, made quiz',
            title: 'sherlock',
            url: {
              demo: 'https://tovebr.github.io/bootstrap-study/',
              github: 'https://github.com/tovebr/bootstrap-study',
            },
            img: 'images/sherlock.jpg',
            desktopOnly: false,
            technology: ['JavaScript', 'Bootstrap', 'CSS', 'HTML'],
          },
        ],
      },
      music: {
        about: {
          header: 'My first profession',
          text: `I've been playing music practically all my life. The bass has been my closest companion for about 20 years now. I started my company in 2005 and have been working as a musician professionally long before that. Here are some records where you can here my play, I have also composed some of the songs!`,
        },
        data: [
          {
            title: 'among lynx',
            url: 'https://open.spotify.com/album/6RM23p643GZjKSN8jMhAyJ?si=16FdbZ4-SPWShKwUqmHYHA',
            img: 'https://rockfarbror.se/wp-content/uploads/2019/09/Among-Lynx-Movement.jpg',
          },
          {
            title: 'sha3k',
            url: 'https://open.spotify.com/album/7FXjh2AsEJc3FNlMZUIJPf?si=xLmVaLAWSq27VptJGv6cYQ',
            img: 'https://jazzfuel.com/wp-content/uploads/2020/04/sha3k-winning-isnt-everything-1080x972.jpg',
          },
          {
            title: 'erik dahl ensemble',
            url: 'https://open.spotify.com/album/581rNZfwhlqTv878dubrz3?si=zVgnHMubR-GrPKFJBht2ow',
            img: 'https://svalkarecords.com/wp-content/uploads/2020/03/CD-SVALKACD005-digitalcover-1200.jpg',
          },
          {
            title: 'into the wild',
            url: 'https://open.spotify.com/album/1PyB2x9eqdeMj8xX9ZZUdi?si=2zM4P-j5QUKPcN8yBeA5XA',
            img: 'https://i1.sndcdn.com/avatars-000271008099-3njgkb-t500x500.jpg',
          },
        ],
      },

      photo: {
        about: {
          header: 'For the Love of Images',
          text: 'I have always painted and been intrested in colors and shapes. In the spring of 2021 i finally bought myself a camera and started learning photoshop. Here are some of my creations, check out my instagram for more!',
        },
        data: [
          {
            title: 'the animal',
            url: 'https://instagram.com/p/CSmGKmatRuO/',
            img: 'images/theanimal.jpg',
          },
          {
            title: 'bassbaby',
            url: 'https://instagram.com/p/CSwlQ3SNjDR/',
            img: 'images/bassbaby.jpg',
          },
          {
            title: 'the law',
            url: 'https://instagram.com/p/CSj-MnGtm_S/',
            img: 'images/longarm.jpg',
          },
          {
            title: 'gorge glam',
            url: 'https://instagram.com/p/CUIB776skmM/',
            img: 'images/gorgeglam.jpg',
          },
        ],
      },
    },
  };
  console.log(data);

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
