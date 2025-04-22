import React from 'react';
import topRatedDestinationsVictoriaFalls from "../images/top-rated-destinations-victoria-falls.png";
import topRatedDestinationsSouthLuangwa from "../images/top-rated-destinations-south-luangwa.png";
import topRatedDestinationsLowZambezi from "../images/top-rated-destinations-low-zambezi.png";
import topRatedDestinationsKafue from "../images/top-rated-destinations-kafue.png";
import services1 from "../images/services-1.jpg";
import services2 from "../images/services-2.jpg";
import services3 from "../images/services-3.jpg";
import services4 from "../images/services-4.jpg";
import reviewer1 from "../images/reviewer-1.png";

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

        <section className="our-services">
            <h2>Our Services</h2>

            <div className="content-container">

                <div className="item-container">
                    <div className="image-container">
                        <img className="image" src={services1} alt="" />
                    </div>
                    <div className="text-container">
                        <h3>Airport and Hotel Transfers</h3>
                        <p>
                            Enjoy pre-booked, private transportation to and from the airport with a professional driver. Perfect for business travelers, tourists, and groups. Our door-to-door services ensure and non-business a seamless journey to hotels, homes, business locations, or any locations as your choice.
                        </p>
                    </div>
                    <button className='button'>
                        Book Now
                    </button>
                </div>

                <div className="item-container">
                    <div className="image-container">
                        <img className="image" src={services2} alt="" />
                    </div>
                    <div className="text-container">
                        <h3>Vehicle chauffer services</h3>
                        <p>
                            Enjoy a stress free, luxury travel experience with our professional chauffeurs. Whether for business, leisure, or special occasions, we guarantee comfort, safety and convenience with expertly trained, drivers who have extensive local knowledge and experience.
                        </p>
                    </div>
                    <button className='button'>
                        Book Now
                    </button>
                </div>

                <div className="item-container">
                    <div className="image-container">
                        <img className="image" src={services3} alt="" />
                    </div>
                    <div className="text-container">
                        <h3>Event transportation</h3>
                        <p>
                            Ensure smooth and reliable transportation for your events with our private, group and VIP transports services. Whether its corporate function, wedding, concert or special occasion. We provide comfortable, on time travel with professional
                        </p>
                    </div>
                    <button className='button'>
                        Book Now
                    </button>
                </div>

                <div className="item-container">
                    <div className="image-container">
                        <img className="image" src={services4} alt="" />
                    </div>
                    <div className="text-container">
                        <h3>Daily/weekly booking in Zambia</h3>
                        <p>
                            Book daily or weekly transfers across Zambia for hassle-free travel. Whether you are a tourist business traveller, or local, our intra-city sightseeing and guided tours offer a deep dive into the city’s landmarks, culture, hidden gems – all with the convenience of knowledgeable guide or private transportation
                        </p>
                    </div>
                    <button className='button'>
                        Book Now
                    </button>
                </div>

            </div>
        </section>

        <section className="reviews">
            <h2>Reviews</h2>

            <div className="content-container">

                <div className="review-card">
                    <div className="stars-container">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>

                    </div>
                    <p>
                        This trip was one of the best in our lives, and the fact that we lived in this luxurious villa made it simply unforgettable! Thank you for giving us such a wonderful holiday, we will definitely come back to you again!
                    </p>

                    <div className='quote-icon'>
                        <svg  width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4086 15.5045H18.9504L21.9782 9.44882V0.365234H12.8947V9.44882H17.4364M2.29713 15.5045H6.83893L9.86679 9.44882V0.365234H0.783203V9.44882H5.325L2.29713 15.5045Z" fill="#25418E"/>
                        </svg>
                    </div>

                    <div className="reviewer-container">
                        <div className="image-container">
                            <img className='reviewer-image' src={reviewer1} alt="" />
                        </div>
                        <p>
                            Anthony Bruff
                        </p>
                    </div>
                </div>

                <div className="review-card">
                    <div className="stars-container">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>

                    </div>
                    <p>
                        This trip was one of the best in our lives, and the fact that we lived in this luxurious villa made it simply unforgettable! Thank you for giving us such a wonderful holiday, we will definitely come back to you again!
                    </p>

                    <div className='quote-icon'>
                        <svg  width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4086 15.5045H18.9504L21.9782 9.44882V0.365234H12.8947V9.44882H17.4364M2.29713 15.5045H6.83893L9.86679 9.44882V0.365234H0.783203V9.44882H5.325L2.29713 15.5045Z" fill="#25418E"/>
                        </svg>
                    </div>

                    <div className="reviewer-container">
                        <div className="image-container">
                            <img className='reviewer-image' src={reviewer1} alt="" />
                        </div>
                        <p>
                            Anthony Bruff
                        </p>
                    </div>
                </div>
                
                <div className="review-card">
                    <div className="stars-container">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9177 12.3105L3.96973 7.76244L0.441376 4.70345L5.10269 4.29882L6.91542 0.00976562L8.72816 4.29882L13.3895 4.70345L9.86111 7.76244L10.9131 12.3105L6.91542 9.89887L2.9177 12.3105Z" fill="#FFCE31"/>
                        </svg>

                    </div>
                    <p>
                        This trip was one of the best in our lives, and the fact that we lived in this luxurious villa made it simply unforgettable! Thank you for giving us such a wonderful holiday, we will definitely come back to you again!
                    </p>

                    <div className='quote-icon'>
                        <svg  width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4086 15.5045H18.9504L21.9782 9.44882V0.365234H12.8947V9.44882H17.4364M2.29713 15.5045H6.83893L9.86679 9.44882V0.365234H0.783203V9.44882H5.325L2.29713 15.5045Z" fill="#25418E"/>
                        </svg>
                    </div>

                    <div className="reviewer-container">
                        <div className="image-container">
                            <img className='reviewer-image' src={reviewer1} alt="" />
                        </div>
                        <p>
                            Anthony Bruff
                        </p>
                    </div>
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