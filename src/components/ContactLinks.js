import React from "react";

const ContactLinks = () => {
  return (
    <div className='contact-links'>
      <a
        href='https://www.linkedin.com/in/tove-brandt-081aab220/'
        target={"_blank"}
        rel='noreferrer'
      >
        <i className='bi bi-linkedin'></i>
      </a>
      <a href='https://github.com/tovebr' target={"_blank"} rel='noreferrer'>
        <i className='bi bi-github'></i>
      </a>
      <a
        href='https://www.instagram.com/phototove/'
        target={"_blank"}
        rel='noreferrer'
      >
        <i className='bi bi-instagram'></i>
      </a>
    </div>
  );
};

export default ContactLinks;
