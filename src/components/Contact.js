import React from "react";

import Form from "./Form";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='container'>
      <div className=' contact-page'>
        <p>Let's get in touch!</p>
        <Form />
        <p className='ui-message'></p>
      </div>
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
    </div>
  );
};

export default Contact;
