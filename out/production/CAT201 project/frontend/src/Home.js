import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import './Home.css';

function Home({ name, description, contact }) {
    const navigate = useNavigate(); // Create the navigate function
    const [currentIndex, setCurrentIndex] = useState(0);

    // List of promo images
    const promoImages = [
        `${process.env.PUBLIC_URL}/images/image2.jpg`,
        `${process.env.PUBLIC_URL}/images/image4.jpg`,
        `${process.env.PUBLIC_URL}/images/image6.jpg`,
    ];

    // Automatically change the promo image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
        }, 3000); // Change every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [promoImages.length]); // Add promoImages.length as a dependency

    // Handler for Book Now button click
    const handleBookNow = () => {
        navigate('/book'); // Navigate to the booking page
    };

    return (
        <div className="home-container">
            {/* Background Image Section */}
            <div className="image-background">
                <img
                    src={`${process.env.PUBLIC_URL}/images/home.jpg`} // Your image file here
                    alt="Theme Park"
                    className="background-image"
                />
                <div className="overlay">
                    <h1 className="main-title">Welcome to {name}</h1>
                    <p className="main-description">{description}</p>
                </div>
            </div>

            {/* Promotional Banner Slider Section */}
            <div className="promo-banner">
                <img
                    src={promoImages[currentIndex]} // Display current promo image
                    alt={`Promo ${currentIndex + 1}`}
                    className="promo-image"
                />
                <div className="promo-text">
                    <h2>🎉 Special Offer! 🎉</h2>
                    <p>Limited Time Promotion: Get great deals on tickets and attractions! Don’t wait!</p>
                    <button className="promo-button" onClick={handleBookNow}>Book Now</button>  {/* Button will now navigate to booking page */}
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="contact-us">
                <h2>Contact Us</h2>
                <ul className="contact-list">
                    <li><strong>Phone 📞:</strong> {contact?.phone}</li>
                    <li><strong>Email 📧:</strong>
                        <a href={`mailto:${contact?.socials?.email}`}>
                            {contact?.socials?.email}
                        </a>
                    </li>
                    <li><strong>Facebook 📱:</strong> <a href={contact?.socials?.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><strong>Instagram 📷:</strong> <a href={contact?.socials?.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><strong>X 🐦:</strong> <a href={contact?.socials?.twitter} target="_blank" rel="noopener noreferrer">X</a></li>
                    {/* Address Section */}
                    <li><strong>Address 🏠:</strong> {contact?.address}</li>
                </ul>

                {/* Map Section */}
                <div className="map-container">
                    <h3>Our Location</h3>
                    {/* Embedding Google Map to show Switzerland */}
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA7PrXWsp7OHPWINSqXycJfM3xsEi3VBLA&q=47.3769,8.5417" // Coordinates for Zurich, Switzerland
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{border: 0}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Location Map"
                    ></iframe>
                </div>
            </div>

            {/* Useful Links and Details Section (before footer) */}
            <div className="useful-links">
                <div className="useful-links-container">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li> {/* Home link */}
                        <li><Link to="/book">Book Tickets</Link></li> {/* Book Tickets link */}
                        <li><Link to="/promotions">Promotions</Link></li> {/* Promotions link */}
                        <li><Link to="/attraction">Attractions</Link></li> {/* Attractions link */}
                    </ul>
                </div>
                <div className="other-details">
                    <h3>About Us</h3>
                    <p>We are dedicated to providing an unforgettable experience. Visit us today and make lasting memories.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
