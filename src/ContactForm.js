import React from 'react';
import './ContactForm.scss';
const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-form-header">
        <h2>CONTACT US</h2>
        <p>Say what up.</p>
      </div>
      <form action="https://formspree.io/f/mkndjkvz" method="post">
        <label for="name">Name</label>
        <input name="Name" id="name" type="text" /> <br />
        <label for="email">Email</label> 
        <input name="Email" id="email" type="email" /> <br />
        <label for="message">Message</label>
        <input name="Subject" id="subject" type="text" /> <br />
        <label for="subject">Subject</label> 
        <textarea name="Message" id="message" type="text" /> <br />
        <button type="submit">Submit</button>
      </form>
    </section> 
  );
};

export default ContactForm;
