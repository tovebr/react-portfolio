import React from "react";
import ContactLinks from "./ContactLinks";
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
      <ContactLinks />
    </div>
  );
};

export default Contact;
