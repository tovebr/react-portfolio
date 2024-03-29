import React from "react";
import NavAbout from "./NavAbout";
import portrait from "../images/portrait.png";
import ContactLinks from "./ContactLinks";
import "./About.css";

const About = () => {
  return (
    <div id='about' className='container'>
      <div className='about-content'>
        <div className='left'>
          <p className='about-header'>
            As a developer, musician and photographer I always find great use
            for my creativity. It is, without a doubt, my greatest asset.
          </p>
          <p className='second-p'>
            {" "}
            In the autumn of 2021 I began a new chapter in live as a Frontend
            Development student at{" "}
            <a
              className='edu-link'
              href='https://kyh.se/utbildningar/front-end-developer/'
              target={"_blank"}
              rel={"noreferrer"}
            >
              KYH
            </a>{" "}
            in Stockholm. Before that I have worked as a freelance musician for
            10+ years, I have run my own company during that time. Not only did
            it teach me to harvest and nourish my creativity, it also made me a
            skilled administrator and problemsolver.
          </p>
          <p>
            Before being selfemployed I had a number of different jobs. I worked
            at daycares for children, at a nursinghome for the elderly, in the
            daycare kitchen, and as a cleaner. They we're all great experiences,
            the jobs included heavylifting, keeping up to code and being there
            for people.
          </p>
          <p>
            My most challenging job was as an administrator/producer at a small
            theater, Reginateatern in Uppsala. It's a small place so I was
            involved in pretty much everything. I managed the employees working
            in the bar and the kitchen, I worked there myself every now and
            then. I booked hotels for the preformers. I was the link between the
            productions and our technichians. Every now and then I got to leave
            my desk to help the technicians rebuild the theater! It was a whole
            lot of moving parts and the biggest challenge was to keep track of
            the status on of all guesting productions at all time.
          </p>
          <p>
            The biggest part of my professinal life has been spent as a
            freelance musician in my own company. I have studied some to get
            there, first two years at the{" "}
            <a
              className='edu-link'
              href='https://www.kjj.cz/'
              target='_blank'
              rel='noreferrer'
            >
              Jaroslav Jezek conservatory
            </a>{" "}
            in Prague, and later a{" "}
            <a
              className='edu-link'
              href='https://www.gu.se/studera/hitta-utbildning/konstnarligt-kandidatprogram-i-musik-inriktning-improvisation-k1imp'
              target='_blank'
              rel='noreferrer'
            >
              Bachelor in Fine Arts in improvised music
            </a>{" "}
            (commonly know as jazz) at Högskolan för Scen- och Musik,
            Gothenburg. As a freelance musician I've done it all! I've been the
            bandleader, accountant and tourmanager as well as the composer,
            bassplayer and conductor. I've play the doublebass, electric bass
            and synthbass in jazz, folk, hiphop, pop and bluesbands. It's a
            wonderful job but life on the road is a hard one. You have to travel
            alot to make do as a musician, more than I want to after 10+ years
            in the business. I want a steady job and a desk to come back to, day
            after day!
          </p>
        </div>
        <div className='right'>
          <img className='portrait' src={portrait} alt='portrait'></img>
        </div>
      </div>
      <NavAbout className='about-nav' />
      <ContactLinks />
    </div>
  );
};

export default About;
