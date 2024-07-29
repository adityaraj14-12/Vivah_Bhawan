import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h1>Contact Us</h1>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
