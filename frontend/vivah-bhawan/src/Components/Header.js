import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Designer.png'; // Make sure the path is correct

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="venue-names">
          <h1>Ram Vivah Bhawan</h1>
          <h1>Maa Gauri Vivah Bhawan</h1>
        </div>
        <div className="contact-info">
          <p><a href="tel:8002028277">Phone: 800-202-8277</a></p>
          <p><a href="mailto:adityapersonalac@gmail.com">Email: ramvivahbhawan</a></p>
        </div>
        <button className="menu-icon" onClick={toggleNav}>☰
          <span className={`menu-icon-bar ${isNavOpen ? 'open-bar' : ''}`}></span>
          <span className={`menu-icon-bar ${isNavOpen ? 'open-bar' : ''}`}></span>
          <span className={`menu-icon-bar ${isNavOpen ? 'open-bar' : ''}`}></span>
        </button>
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/events" onClick={toggleNav}>Events</Link></li>
          <li><Link to="/gallery" onClick={toggleNav}>Gallery</Link></li>
          <li><Link to="/venue" onClick={toggleNav}>Venue</Link></li>
          <li><Link to="/booking" onClick={toggleNav}>Booking</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
