import React from 'react';
import ContactForm from "../components/ContactForm.js";
import "../styles/contact.css"
import { ReactComponent as InstagramIcon } from "../images/instagram.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as WhatsappIcon } from "../images/whatsapp.svg";

function Contact() {
  return (
    <main className="contact">

      <section className="form-and-contacts">

        <h1>Contact Us</h1>

        <ContactForm/>

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

      </section>

      {/* <section className="map">
        <div className="placeholder">
          Interactive Google Map with the office pin
        </div>
      </section> */}
      
    </main>
  );
}

export default Contact;