import React from 'react';
import '../styles/reservation-form.css';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ReservationForm() {

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
            const fetchURL = "/api/reservation";
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
            
            const { name, email, phone, specialRequests, payment, serviceType, pickUpDate, pickUpTime, pickUpLocation, dropOffLocation } = e.target.elements;

            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                payment: payment.value,
                serviceType: serviceType.value,
                pickUpDate: pickUpDate.value,
                pickUpTime: pickUpTime.value,
                pickUpLocation: pickUpLocation.value,
                dropOffLocation: dropOffLocation.value,
                specialRequests: specialRequests.value,
            }
            
            controller.sendEmail({ token, ...formData });
        },

        updateDialogTextWithMessageResult: function(success) {
            const successMessage = "Thank you for your reservation request! We will get in touch shortly.";
            const failureMessage = "Something went wrong. Please get in touch with us in a different way.";
            if (success) 
                setDialogTextForMessageResult(successMessage);
            else 
                setDialogTextForMessageResult(failureMessage);
        },

        sendEmail: function(data) {
            setDialogTextForMessageResult("Sending reservation request...");
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
    }

    const display = {
        
        showDialog: function() {
            const dialog = document.querySelector(".dialog");
            dialog.showModal();
        },

        resetFormAfterSubmit() {
            const form = document.querySelector(".form-container");
            form.reset();
        }
    }

  return (
    <div className="reservation-form">

        <form className="form-container" onSubmit={controller.handleSubmit}>

            <div className="form-row personal-details">
                <div className="label-and-line-container">
                    <h3>Personal Details:</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>

                <div className="inputs-container">

                    <div className="input-container">
                        <input 
                            type="text" 
                            name="name"
                            id='name'
                            placeholder="Full Name" 
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="email" 
                            name="email"
                            id='email'
                            placeholder="Email Address" 
                            required
                        />

                    </div>
                    <div className="input-container">
                        <input 
                            type="tel" 
                            name="phone"
                            id='phone'
                            placeholder="Phone Number" 
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="form-row payment-method">
                <div className="label-and-line-container">
                    <h3>Payment Method:</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
                    <div className="radio-group">
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="Banking Card" 
                            />
                            Banking Card
                        </label>
                       
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="Bank Transfer" 
                            />
                            Bank Transfer
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="Cash"  
                            />
                            Cash on Arrival
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="Other"  
                            />
                            Other
                        </label>
                </div>
            </div>

            <div className="form-row service-type">
                <div className="label-and-line-container">
                    <h3>Service Type:</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
                <select
                    name="serviceType"
                >
                    <option value="Airport and Hotel Transfer">Airport and Hotel Transfer</option>
                    <option value="Intra-city sightseeing/guided tours">Intra-city sightseeing/guided tours</option>
                </select>
            </div>

            <div className="form-row pick-up">

                <div className="label-and-line-container">
                    <h3>Pick Up</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>

                <div className="inputs-container">

                    <div className="label-and-input-container">
                        <label className='label'>Pick-Up Date:</label>
                        <input 
                            type="date" 
                            name="pickUpDate"
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label className='label'>Pick-Up Time:</label>
                        <input 
                            type="time" 
                            name="pickUpTime"
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label className='label'>Pick-Up Location:</label>
                        <input 
                            type="text" 
                            name="pickUpLocation"
                            placeholder="Pick-up Location" 
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label className='label'>Drop-Off Location:</label>
                        <input 
                            type="text" 
                            name="dropOffLocation"
                            placeholder="Drop-off Location" 
                        />
                    </div>
                </div>
            </div>

            <div className="form-row special-requests">

                <div className="label-and-line-container">
                    <h3>Special Requests</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>

                <div className="label-and-input-container">
                    <textarea 
                        placeholder="Special Requests"
                        name="specialRequests"
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
                <button type="submit" className="button">Reserve</button>
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

export default ReservationForm;