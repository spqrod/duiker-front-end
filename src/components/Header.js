import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-placeholder">Logo</Link>
      </div>
      <nav className="nav">
        <Link to="/reserve">Reserve</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;