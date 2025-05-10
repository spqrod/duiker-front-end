import React from 'react';
import ReservationForm from "../components/ReservationForm.js"; 
import "../styles/reserve.css";

function Reserve() {
  return (
    <main className="reserve">

        <section className="reservation">
            <h1>Reservation</h1>

            <ReservationForm />
        </section> 

    </main>
  );
}

export default Reserve;