import React from 'react';

function Events() {
  return (
    <main className="events">

        <section className="generalInfo">
            <h1>Events General Info</h1>
            <div className="placeholder">General Info</div>
        </section>

        <section className="yoga">
            <h2>Yoga classes</h2>
            <div className='placeholder'>
                <p>Yoga classes photos and info</p>
            </div>
        </section>

        <section className="tango">
            <h2>Tango lessons</h2>
            <div className='placeholder'>
                <p>Tango lessons photos and info</p>
            </div>
        </section>

        <section className="calendar">
            <h2>Calendar</h2>
            <div className='placeholder'>
                <p>Calendar for upcoming events</p>
            </div>
        </section>

        <section className="contact">
            <h2>Contact</h2>
            <div className='placeholder'>
                <p>Contact form with fields</p>
            </div>
        </section>

    </main>
  );
}

export default Events;