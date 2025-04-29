import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className='logo-image'/>
        </Link>

      <nav className="nav" role="navigation">
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className='button'>
                <Link to="/reserve">Reserve</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;