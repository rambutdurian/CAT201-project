import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState(null);  // Add state for the data

    const [currentIndex, setCurrentIndex] = useState(0);
    const promoImages = [
        `${process.env.PUBLIC_URL}/images/image2.jpg`,
        `${process.env.PUBLIC_URL}/images/image4.jpg`,
        `${process.env.PUBLIC_URL}/images/image6.jpg`,
    ];

    // Fetch data from the backend API
    useEffect(() => {
        fetch('http://localhost:8080/api/data')
            .then(response => response.json())
            .then(data => {
                setData(data);  // Set the data received from the backend
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [promoImages.length]);

    const handleBookNow = () => {
        navigate('/book');
    };

    if (!data) {
        return <div>Loading...</div>;  // Show loading if data is not yet available
    }

    return (
        <div className="home-container">
            <div className="image-background">
                <img
                    src={`${process.env.PUBLIC_URL}/images/home.jpg`}
                    alt="Theme Park"
                    className="background-image"
                />
                <div className="overlay">
                    <h1 className="main-title">Welcome to {data.name}</h1>
                    <p className="main-description">{data.description}</p>
                </div>
            </div>

            <div className="promo-banner">
                <img
                    src={promoImages[currentIndex]}
                    alt={`Promo ${currentIndex + 1}`}
                    className="promo-image"
                />
                <div className="promo-text">
                    <h2>🎉 Special Offer! 🎉</h2>
                    <p>Limited Time Promotion: Get great deals on tickets and attractions! Don’t wait!</p>
                    <button className="promo-button" onClick={handleBookNow}>
                        Book Now
                    </button>
                </div>
            </div>

            <div className="contact-us">
                <h2>Contact Us</h2>
                <ul className="contact-list">
                    <li><strong>Phone 📞:</strong> {data.contact?.phone}</li>
                    <li><strong>Email 📧:</strong>
                        <a href={`mailto:${data.contact?.socials?.email}`}>{data.contact?.socials?.email}</a>
                    </li>
                    <li><strong>Facebook 📱:</strong>
                        <a href={data.contact?.socials?.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                    <li><strong>Instagram 📷:</strong>
                        <a href={data.contact?.socials?.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li><strong>X 🐦:</strong>
                        <a href={data.contact?.socials?.twitter} target="_blank" rel="noopener noreferrer">X</a>
                    </li>
                    <li><strong>Address 🏠:</strong> {data.contact?.address}</li>
                </ul>

                <div className="map-container">
                    <h3>Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA7PrXWsp7OHPWINSqXycJfM3xsEi3VBLA&q=47.3769,8.5417"
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

            <div className="useful-links">
                <div className="useful-links-container">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/book">Book Tickets</Link></li>
                        <li><Link to="/promotions">Promotions</Link></li>
                        <li><Link to="/attraction">Attractions</Link></li>
                    </ul>
                </div>
                <div className="other-details">
                    <h3>About Us <span role="img" aria-label="rocket" className="space-icon">🚀</span></h3>
                    <p>
                        We’re here to provide you with an out-of-this-world experience! <span role="img" aria-label="star" className="space-icon">✨</span>
                    </p>
                    <p>
                        Join us on a journey that’s truly stellar! 🌟 <span role="img" aria-label="planet" className="space-icon">🪐</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
