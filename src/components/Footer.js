import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';  
import {ReactComponent as LogoIcon } from "../images/logo.svg";
import {ReactComponent as InstagramIcon } from "../images/instagram.svg";
import {ReactComponent as FacebookIcon } from "../images/facebook.svg";
import {ReactComponent as WhatsappIcon } from "../images/whatsapp.svg";


function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="logo-container">
                <Link className='menu-link' to="/">
                    <LogoIcon />
                </Link>
            </div>

            <div className="contacts-container">
                <a href="tel:+260 771 708 041" className="zambia-phone">
                    (Zambia) +260 771 708 041
                </a>
                <a href="tel:+44 77 7093 8429" className="uk-phone">
                    (UK) +44 77 7093 8429
                </a>
                <a href="mailto:info@duikertravels.com" className="email">
                    info@duikertravels.com
                </a>
            </div>

        <div className="social-media-container">
            {/* TO ADD */}
            <a className='link' href="https://wa.me/+260771708041" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </a>
            <a className='link' href="https://wa.me/+260771708041" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon />
            </a>
            {/* TO ADD */}
            <a className='link' href="https://wa.me/+260771708041" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </a>
        </div>

        <div className="menu-container">
            <Link className='menu-link' to="/">Home</Link>
            <Link className='menu-link' to="/reserve">Reserve</Link>
            <Link className='menu-link' to="/services">Services</Link>
            <Link className='menu-link' to="/contact">Contact</Link>
            <Link className='menu-link' to="/about">About</Link>
            <Link className='menu-link' to="/privacy">Privacy Policy</Link>
            <Link className='menu-link' to="/terms">Terms of Service</Link>
        </div>


        <div className="all-rights-reserved-container">
            <p>Duiker Travels © {year}. All rights reserved.</p>
        </div>

    </footer>
  );
}

export default Footer;