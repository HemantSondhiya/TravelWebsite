import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Travel Adventure</h3>
          <p>Your gateway to unforgettable journeys and adventures around the world.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link> </li>
            <li><Link to="/about">About</Link> </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon"><Link to=" S"></Link>IG</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">LN</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Travel Adventure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
