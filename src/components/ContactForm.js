import React from 'react';
import '../styles/contact-form.css';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ContactForm() {

    const [dialogTextForMessageResult, setDialogTextForMessageResult] = useState("");

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}`;
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const api = {
        sendEmail: function(data) {
            const fetchURL = "/api/contact";
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            return fetch(fetchURL, fetchOptions)
                .then(response => response.json())
        }
    };

    const controller = {

        handleSubmit: async function(e) {

            e.preventDefault();
            const token = await controller.executeRecaptcha();

            const { name, email, phone, message } = e.target.elements;
            
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                formMessage: message.value,
            }

            controller.sendEmail({ token, ...formData });
        },

        updateDialogTextWithMessageResult: function(success) {
            const successMessage = "Thank you for your message! We will get in touch shortly.";
            const failureMessage = "Something went wrong. Please get in touch with us in a different way.";
            if (success) 
                setDialogTextForMessageResult(successMessage);
            else 
                setDialogTextForMessageResult(failureMessage);
        },

        sendEmail: function(data) {
            setDialogTextForMessageResult("Sending message...");
            display.showDialog();
            api.sendEmail(data)
                .then((response) => {
                    display.resetFormAfterSubmit();
                    controller.updateDialogTextWithMessageResult(response.success);
                });
        },

        executeRecaptcha: function() {
            return new Promise((resolve) => {
                window.grecaptcha.ready(() => {
                window.grecaptcha
                    .execute(process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY, { action: 'submit' })
                    .then((token) => {
                    resolve(token);
                    });
                });
            });
        }
    };

    const display = {
       
        showDialog: function() {
            const dialog = document.querySelector(".dialog");
            dialog.showModal();
        },

        resetFormAfterSubmit() {
            const form = document.querySelector(".form-container");
            form.reset();
        }
    };
    
  return (
    <div className="contact-form">

        <form className="form-container" onSubmit={controller.handleSubmit}>

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
                            name="name"
                            placeholder="Name" 
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email Address" 
                            required
                        />

                    </div>
                    <div className="input-container">
                        <input 
                            type="tel" 
                            name="phone"
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
                    >
                    </textarea>
                </div>
            </div>

            <div className="legalConsentCheckboxContainer">
                <input type="checkbox" className="legalConsentCheckbox" name="legalConsentCheckbox" id="legalConsentCheckbox" required/>
                <label htmlFor="legalConsentCheckbox" className="legalConsentLabel">
                    I accept <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                </label>
            </div>
                
            <div className="button-container">
                <button type="submit" className="submit-button">Send Message</button>
            </div>        

        </form>

        <dialog className="dialog">
                    <p className="dialogText">{dialogTextForMessageResult}</p>
                    <form method="dialog">
                        <button className="button">
                            Close
                            <div className="buttonBorder"></div>
                            <div className="buttonBorder"></div>
                            <div className="buttonBorder"></div>
                            <div className="buttonBorder"></div>
                        </button>
                    </form>
        </dialog>

    </div>
  );
}

export default ContactForm;