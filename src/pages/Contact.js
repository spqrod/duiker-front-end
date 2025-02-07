import React from 'react';

function Contact() {
  return (
    <div className="contact">

      <section className="contact-form">
        <h1>Contact Us</h1>
          <div className="placeholder">
            Contact form with fields
          </div>
      </section>

      <section className="contacts">
        <h2>Contact details</h2>
        <div className="container">

        <div className="placeholder">
          <p>Address: 123 Main Street, Lusaka, Zambia</p>
          <p>Phone: +123 456 7890</p>

          <div className="social-icons">
            <div className="icon">FB</div>
            <div className="icon">TW</div>
            <div className="icon">IG</div>
          </div>

        </div>

        <div className="placeholder">
          Interactive Google Map with the office pin
        </div>
        </div>


      </section>
    </div>
  );
}

export default Contact;