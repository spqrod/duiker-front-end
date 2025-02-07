import React from 'react';

function Reserve() {
  return (
    <main className="reserve">

      <section className="reservationForm">
        <h1>Reservation Form</h1>
        <div className="form placeholder">
            <p>Reservation form with dates and service type that sends a message to the administration</p>
        </div>
      </section>

      <section className="reservationRules">
        <h2>Reservation Rules</h2>
        <div className="form placeholder">
            <p>Reservation rules info</p>
        </div>
      </section>

    </main>
  );
}

export default Reserve;