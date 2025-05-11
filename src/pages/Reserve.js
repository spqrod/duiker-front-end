import React from 'react';
import ReservationForm from "../components/ReservationForm.js"; 
import "../styles/reserve.css";
import Transition from '../components/Transition.js';

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

export default Transition(Reserve);