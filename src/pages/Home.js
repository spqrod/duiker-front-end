import React from 'react';

function Home() {
  return (
    <main className="home">

        <section className="hero">
            <h1>Hero Section</h1>
            <div className="placeholder">Hero image with a phrase</div>
        </section>

        <section className="airport-pickup">
            <h2>Airport Transfer</h2>
            <div className='placeholder'>
                <p>Airport transfer general info</p>
            </div>
        </section>

        <section className="other-services">
            <h2>Other Services</h2>
            <div className='placeholder'>
                <p>Other services info</p>
            </div>
        </section>

        <section className="advantages">
            <h2>Our Advantages</h2>
            <div className='placeholder'>
                <p>Advantages info</p>
            </div>
        </section>

        <section className="reviews">
            <h2>Reviews</h2>
            <div className='placeholder'>
                <p>Reviews section with customer photos, stars and recommendations</p>
            </div>
        </section>

        <section className="reservation">
            <h2>Reservation</h2>
            <div className='placeholder'>
                <p>Reservation form with dates and service type that sends a message to the administration</p>
            </div>
        </section>

    </main>
  );
}

export default Home;