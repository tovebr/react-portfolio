import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Code from "./components/Code";
import Music from "./components/Music";
import Photo from "./components/Photo";

const App = () => {
  const data = {
    myWork: {
      code: {
        about: {
          header: "These are some of my codeing-projects!",
          text: "I use my own artwork as much as i can to make the projects more alive. These are all written in vanilla JavaScript, some of them has a sprinkle of bootstrap but  I take great pride in writing my own css for the most part.",
        },
        data: [
          {
            description: "memory game",
            title: "memory",
            url: {
              demo: "https://tovebr.github.io/memory/",
              github: "https://tovebr.github.io/memory/",
            },
            img: "images/memory.jpg",
            responsive: false,
          },
          {
            description: "made webshop, verry fun",
            title: "webshop",
            url: {
              demo: "https://tovebr.github.io/webshop/",
              github: "https://github.com/tovebr/webshop",
            },
            img: "images/webshop.jpg",
            responsive: true,
          },
          {
            description: "todo app",
            title: "todo",
            url: {
              demo: "https://tovebr.github.io/todo/",
              github: "https://github.com/tovebr/todo",
            },
            img: "images/todo.jpg",
            responsive: true,
          },
          {
            description: "using bootstrap, made quiz",
            title: "sherlock",
            url: {
              demo: "https://tovebr.github.io/bootstrap-study/",
              github: "https://github.com/tovebr/bootstrap-study",
            },
            img: "images/sherlock.jpg",
            responsive: true,
          },
        ],
      },
      music: {
        about: {
          header: "My first profession",
          text: `I've been playing music practically all my life. The bass has been my closest companion for about 20 years now. I started my company in 2005 and have been working as a musician professionally long before that. Here are some records where you can here my play, I have also composed some of the songs!`,
        },
        data: [
          {
            title: "among lynx",
            url: "https://open.spotify.com/album/6RM23p643GZjKSN8jMhAyJ?si=16FdbZ4-SPWShKwUqmHYHA",
            img: "https://scontent.fbma1-1.fna.fbcdn.net/v/t39.30808-6/237430963_234743611984704_6475539911570788711_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=15sUfGkGMHsAX9yaRq0&tn=L9Cl-Ad7-7ZNArIj&_nc_ht=scontent.fbma1-1.fna&oh=00_AT-JMYlV5Yrjn_UcFGpNYQioZdO23xZ6EasXMVxdUilhNg&oe=61F5C6E5",
          },
          {
            title: "sha3k",
            url: "https://open.spotify.com/album/7FXjh2AsEJc3FNlMZUIJPf?si=xLmVaLAWSq27VptJGv6cYQ",
            img: "https://scontent.fbma1-1.fna.fbcdn.net/v/t1.6435-9/88056964_106585920952368_4116624113382981632_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l1P99zWNVWIAX_7GJW7&_nc_ht=scontent.fbma1-1.fna&oh=00_AT-qHxTtlUDvEcER-WOeYi7oulULaiYHxIKsxriVcTHFYg&oe=62163B68",
          },
          {
            title: "erik dahl ensemble",
            url: "https://open.spotify.com/album/581rNZfwhlqTv878dubrz3?si=zVgnHMubR-GrPKFJBht2ow",
            img: "https://scontent.fbma1-1.fna.fbcdn.net/v/t39.30808-6/225871591_315039616891869_8741164833865224190_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=gfdKYvlwp74AX_Det1o&_nc_ht=scontent.fbma1-1.fna&oh=00_AT--COVoXMgoyuuszbM9At_MhQQxrewcB-86E8_f0UBvXQ&oe=61F51D7F",
          },
          {
            title: "into the wild",
            url: "https://open.spotify.com/album/1PyB2x9eqdeMj8xX9ZZUdi?si=2zM4P-j5QUKPcN8yBeA5XA",
            img: "https://scontent.fbma1-1.fna.fbcdn.net/v/t31.18172-8/22137016_1973438112945864_5804792538015359339_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Beq6BzTnNw0AX_bQPss&_nc_ht=scontent.fbma1-1.fna&oh=00_AT_wUiTw9AO65MCu-ZNtBdgK4MWJsNWZIZQL5JtM1No4xA&oe=621634F3",
          },
        ],
      },

      photo: {
        about: {
          header: "For the Love of Images",
          text: "I have always painted and been intrested in colors and shapes. In the spring of 2021 i finally bought myself a camera and started learning photoshop. Here are some of my creations, check out my instagram for more!",
        },
        data: [
          {
            title: "the animal",
            url: "https://instagram.com/p/CSmGKmatRuO/",
            img: "images/theanimal.jpg",
          },
          {
            title: "bassbaby",
            url: "https://instagram.com/p/CSwlQ3SNjDR/",
            img: "images/bassbaby.jpg",
          },
          {
            title: "the law",
            url: "https://instagram.com/p/CSj-MnGtm_S/",
            img: "images/longarm.jpg",
          },
          {
            title: "gorge glam",
            url: "https://instagram.com/p/CUIB776skmM/",
            img: "images/gorgeglam.jpg",
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
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
