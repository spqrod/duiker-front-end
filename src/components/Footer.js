import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="icon">FB</div>
        <div className="icon">WA</div>
        <div className="icon">IG</div>
      </div>
      <div className="footer-menu">

        <Link to="/">Home</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
      <p>Duiker Travels © 2025. All rights reserved.</p>
    </footer>
  );
}

export default Footer;