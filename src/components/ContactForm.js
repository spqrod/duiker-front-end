import React from 'react';
import '../styles/contact-form.css';
import {useState} from "react";

function ContactForm() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
  return (
    <div className="contact-form">

        <div className="form-container">

            <div className="form-row personal-details">
                <div className="label-and-line-container">
                    <h3>Drop us a line!</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>

                <div className="inputs-container">

                    <div className="input-container">
                        <input 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name" 
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address" 
                            required
                        />

                    </div>
                    <div className="input-container">
                        <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number" 
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="form-row message">

                <div className="label-and-input-container">
                    <textarea 
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    >
                    </textarea>
                </div>
            </div>

            <div className="button-container">
                <button type="button" className="submit-button">Send Message</button>
            </div>        

        </div>

    </div>
  );
}

export default ContactForm;