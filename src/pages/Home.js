import React from 'react';

function Home() {
  return (
    <main className="home">

        <section className="hero">
            <div className='contentContainer'>
                <div className="textContainer">
                    <p>
                        At Duiker Travels, our vision is to be the leading provider of seamless travel experiences.
                    </p>
                    <p>
                        Ensuring that every journey is not only safe and comfortable but also enriching. We are committed to offering unparalleled access to the beauty, culture, and diverse landscapes of Zambia. 
                    </p>
                    <p>
                        Our goal is to inspire travelers to explore the heart of Zambia with confidence, knowing that they are supported by reliable services and expert guidance every step of the way. We strive to make each trip memorable, fostering a deep connection with Zambia’s rich heritage while promoting sustainable tourism and customer satisfaction.
                    </p>
                    <h3>
                        Trusted. Professional. Experienced.
                    </h3>
                </div>


            </div>


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