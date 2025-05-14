import React from 'react';
import '../styles/reservation-form.css';
import {useState} from "react";



function ReservationForm() {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     payment: '',
    //     serviceType: '',
    //     pickUpDate: '',
    //     pickUpTime: '',
    //     pickUpLocation: '',
    //     dropOffLocation: '',
    //     specialRequests: '',
    //   });
    
    //   const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setFormData((prev) => ({ ...prev, [name]: value }));
    //   };
    
    //   const isPersonalDetailsFilled = formData.fullName && formData.email && formData.phone;
    //   const isPaymentMethodFilled = formData.payment;
    //   const isServiceTypeFilled = formData.serviceType;
    //   const isPickUpDetailsFilled = formData.pickUpDate && formData.pickUpTime;
    //   const isLocationsFilled = formData.pickUpLocation && formData.dropOffLocation;


    

  return (
    <div className="reservation-form">

        <form className="form-container" >

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
                            // value={formData.name}
                            // onChange={handleInputChange}
                            placeholder="Full Name" 
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="email" 
                            name="email"
                            id='email'
                            // value={formData.email}
                            // onChange={handleInputChange}
                            placeholder="Email Address" 
                            required
                        />

                    </div>
                    <div className="input-container">
                        <input 
                            type="tel" 
                            name="phone"
                            id='phone'
                            // value={formData.phone}
                            // onChange={handleInputChange}
                            placeholder="Phone Number" 
                            required
                        />
                    </div>
                </div>
            </div>

            {/* {isPersonalDetailsFilled && ( */}
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
                                value="debit" 
                                // checked={formData.payment === 'debit'}
                                // onChange={handleInputChange}
                            />
                            Debit Card
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="credit"  
                                // checked={formData.payment === 'credit'}
                                // onChange={handleInputChange}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="transfer" 
                                // checked={formData.payment === 'transfer'}
                                // onChange={handleInputChange}
                            />
                            Bank Transfer
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="payment" 
                                value="cash"  
                                // checked={formData.payment === 'cash'}
                                // onChange={handleInputChange}
                            />
                            Cash on Arrival
                        </label>
                </div>
            </div>

            {/* {isPaymentMethodFilled && ( */}
            <div className="form-row service-type">
                <div className="label-and-line-container">
                    <h3>Service Type:</h3>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
                <select
                    name="serviceType"
                    // value={formData.serviceType}
                    // onChange={handleInputChange}
                >
                <option value="airport">Airport and Hotel Transfer</option>
                <option value="sightseeing">Intra-city sightseeing/guided tours</option>
                </select>
            </div>

            {/* {isServiceTypeFilled && ( */}
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
                            // value={formData.pickUpDate}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label className='label'>Pick-Up Time:</label>
                        <input 
                            type="time" 
                            name="pickUpTime"
                            // value={formData.pickUpTime}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label className='label'>Pick-Up Location:</label>
                        <input 
                            type="text" 
                            name="pickUpLocation"
                            // value={formData.pickUpLocation}
                            // onChange={handleInputChange}
                            placeholder="Pick-up Location" 
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label className='label'>Drop-Off Location:</label>
                        <input 
                            type="text" 
                            name="dropOffLocation"
                            // value={formData.dropOffLocation}
                            // onChange={handleInputChange}
                            placeholder="Pick-up Location" 
                        />
                    </div>
                </div>
            </div>

            {/* {isPickUpDetailsFilled && ( */}
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
                        // value={formData.specialRequests}
                        // onChange={handleInputChange}
                    >
                    </textarea>
                </div>
            </div>

            {/* {isPickUpDetailsFilled && ( */}
            <div className="button-container">
                <button type="submit" className="button">Reserve</button>
            </div>        

        </form>

    </div>

  );
}

export default ReservationForm;