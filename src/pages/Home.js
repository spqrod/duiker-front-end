import React from 'react';
import topRatedDestinationsVictoriaFalls from "../images/top-rated-destinations-victoria-falls.png";
import topRatedDestinationsSouthLuangwa from "../images/top-rated-destinations-south-luangwa.png";
import topRatedDestinationsLowZambezi from "../images/top-rated-destinations-low-zambezi.png";
import topRatedDestinationsKafue from "../images/top-rated-destinations-kafue.png";

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

        <section className='top-rated-destinations'>
        
            <h2>Top-Rated Destinations</h2>

            <div className="content-container">

                <svg className='dashed-line' width="1512" height="263" viewBox="0 0 1512 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 33.3322C77.5385 24.1865 253.362 15.3734 336.349 53.2864C440.083 100.678 559.534 310.197 826.728 250.334C1093.92 190.471 1251.09 -46.4846 1512 10.8837" stroke="white" stroke-width="2.72425" stroke-dasharray="3.63 3.63"/>
                </svg>

                <div className="item-container victoria-falls">
                    <p>
                        Victoria falls - in the local tongue “the smoke that thunders”
                    </p>
                    <img className='item-image' src={topRatedDestinationsVictoriaFalls} alt="" />
                </div>


                <div className="item-container south-luangwa">
                    <p>South Luangwa National Park</p>
                    <img className="item-image" src={topRatedDestinationsSouthLuangwa} alt="South Luangwa" />
                </div>

                <div className="item-container low-zambezi">
                    <p>Low Zambezi National Park</p>
                    <img className="item-image" src={topRatedDestinationsLowZambezi} alt="Low Zambezi" />
                </div>

                <div className="item-container kafue">
                    <p>Kafue National Park</p>
                    <img className="item-image" src={topRatedDestinationsKafue} alt="Kafue National Park" />
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