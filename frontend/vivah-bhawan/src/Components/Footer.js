import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* Connect with Us Section */}
      <div className="footer-section contact-info">
        <h2>Connect with Us</h2>
        <p><a href="tel:8002028277">Phone: 800-202-8277</a></p>
          <p><a href="mailto:adityapersonalac@gmail.com">Email: ramvivahbhawan</a></p>
        <div className="social-icons">
          <a href="https://www.facebook.com/ramvivahbhawan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/ramvivahbhawan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="footer-section locations">
        <h2>Our Locations</h2>
        <p>Ram Vivah Bhawan</p>
        <p>Maa Gauri Vivah Bhawan</p>
      </div>

      {/* Explore Section */}
      <div className="footer-section explore">
        <h2>Explore</h2>
        <div className="explore-columns">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
          <ul>
            <li><Link to="/venue">Venue</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 Aditya Raj Website. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
