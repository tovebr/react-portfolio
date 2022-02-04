import React, { useState } from "react";
import { send } from "emailjs-com";

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const messageUI = (text) => {
    document.querySelector(".ui-message").innerText = text;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.from_name && toSend.message && toSend.reply_to) {
      send(
        "service_bsh2glu",
        "template_wlac7aq",
        toSend,
        "user_2bPg4quLOnsxSyKVS8suU"
      )
        .then((response) => {
          console.log("Success!", response.status, response.text);
          messageUI(`Thanks, I'll get back to you soon!`);
          setToSend({ ...toSend, from_name: "", message: "", reply_to: "" });
        })
        .catch((err) => {
          console.log("Failed", err);
          messageUI("Something went wrong... Contact me on LinkedIn instead!");
        });
    } else {
      messageUI("All fields must be filled out");
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className='form-holder'>
      <form id='contact-form' onSubmit={onSubmit}>
        <input
          type='text'
          name='from_name'
          placeholder='Your Name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='message'
          placeholder='Your message'
          value={toSend.message}
          onChange={handleChange}
        />

        <button className='form-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
