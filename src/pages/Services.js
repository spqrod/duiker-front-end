import React from 'react';

function Services() {
  return (
    <main className="services">

      <section className="services-list">
        <h1>Services</h1>
        {['Airport Transfers', 'Business Transportation', 'Group or Family Travel', 'VIP and Luxury Services', 'Lusaka Cultural Tour', 'Experiences'].map((service, index) => (
          <div className="room" key={index}>
            <div className="main-photo">
              <div className="photo-placeholder">Photo of the Service</div>
            </div>
            <div className="description">
              <h3>{service}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button>Reserve Now</button>
            </div>
          </div>
        ))}
      </section>

      <section className="reservationForm">
        <h2>Reservation Form</h2>
        <div className="form placeholder">
            <p>Reservation form with dates and service type that sends a message to the administration</p>
        </div>
      </section>

    </main>
  );
}

export default Services;