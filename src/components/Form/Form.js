import React from 'react';
import './Form.css';
import emailjs from "emailjs-com";

const Form = () => {

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('service_ue2sp4r', 'template_l5ipxxn', e.target, 'user_Qc1k2AZqr6yx65Bnfen5A')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }
  
  return(
    <div id='form-container'>
      <div>
        <form onSubmit={sendEmail} className="form">
          <h1>
            Send me a message!!!
          </h1>
          <div className="form-inputs">
            <label className='form-label'>Name</label>
            <input className="form-input" type="text" placeholder="Name" name="name"/>
          </div>
          <div className="form-inputs">
            <label className='form-label'>Email</label>
            <input  className="form-input" type="email" placeholder="Email Address" name="email"/>
          </div>
          <div className="form-inputs">
            <label className='form-label'>Subject</label>
            <input className="form-input" type="text" placeholder="Subject" name="subject"/>
          </div>
          <div className="form-inputs">
            <label className='form-label'>Message</label>
            <textarea className="form-input tall" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
          </div>
          <input  className='form-input-btn' type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  );
};

export default Form;

