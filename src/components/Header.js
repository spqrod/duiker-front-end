import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../images/logo.png";

function Header() {

  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  function closeMobileMenuOnLinkClick() {
    const checkbox = document.querySelector(".hamburgerCheckbox");
    if (checkbox.checked) 
        checkbox.checked = false;
}

  return (
    <header className="header">

      <Link onClick={handleLogoClick} to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo-image" />
      </Link>

        <nav className="menu-container" role="navigation">

            <div className='menu-item mobile-only'>
                <Link className="menu-link"  to="/" onClick={closeMobileMenuOnLinkClick}>
                Home
                </Link>
            </div>

            <div className='menu-item'>
                <Link className="menu-link" to="/services" onClick={closeMobileMenuOnLinkClick}>
                Services
                </Link>
            </div>

            {/* <div className='menu-item'>
                <Link className="menu-link"  to="/about" onClick={closeMobileMenuOnLinkClick}>
                About
                </Link>
            </div> */}

            <div className='menu-item'>
                <Link className="menu-link"  to="/contact" onClick={closeMobileMenuOnLinkClick}>
                Contact
                </Link>
            </div>

            <button className="button" onClick={(e) => { handleReserveButtonClick(e); setIsMobileMenuOpen(false); }}>
                <Link to="/reserve" onClick={closeMobileMenuOnLinkClick}>
                Reserve
                </Link>
            </button>

        </nav>

        <div className="hamburgerContainer">
            <input type="checkbox" className="hamburgerCheckbox" id="hamburgerCheckbox" />
            <label className="hamburgerIcon" htmlFor="hamburgerCheckbox">
                <span className="hamburgerLine one"></span>
                <span className="hamburgerLine two"></span>
                <span className="hamburgerLine three"></span>
            </label>
        </div>

    </header>
  );
}

export default Header;