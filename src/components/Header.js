import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleLogoClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReserveButtonClick = (e) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById('reservation-target-for-scroll').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      navigate(path);
      document.body.classList.remove('fade-out', 'fade-in'); // Reset all classes
      void document.body.offsetHeight; // Force reflow to restart transition
      document.body.classList.add('fade-in'); // Trigger fade-in
    }, 300);
  };

  return (
    <header className="header">
      <Link onClick={handleLogoClick} to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo-image" />
      </Link>
      <nav className="nav" role="navigation">
        <ul>
          <li>
            <Link to="/services" onClick={(e) => handleLinkClick(e, '/services')}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>
              Contact
            </Link>
          </li>
          <li>
            <button className="button">
              <Link to="/reserve" onClick={handleReserveButtonClick}>
                Reserve
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;