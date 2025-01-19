import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css';

function BookingPage() {
    return (
        <div className="booking-page">
            {/* Full Horizontal Image */}
            <img
                src={`${process.env.PUBLIC_URL}/images/booking-banner.jpg`}
                alt="Booking Banner"
                className="booking-banner"
            />

            <h2>Buy Tickets</h2>

            <div className="ticket-category">
                <div className="ticket-box">
                    <h3>Single Ticket</h3>
                    <p className="ticket-description">For individuals who want to visit the park on their own. Enjoy a day full of adventure!</p>
                    <p className="ticket-price">Price: RM 50</p>
                    <Link to="/buy-tickets">
                        <button>Buy Now</button>
                    </Link>
                </div>

                <div className="ticket-box">
                    <h3>Combo Ticket</h3>
                    <p className="ticket-description">Get the best of both worlds! Includes admission to both the park and additional attractions.</p>
                    <p className="ticket-price">Price: RM 80</p>
                    <Link to="/buy-tickets">
                        <button>Buy Now</button>
                    </Link>
                </div>

                <div className="ticket-box">
                    <h3>Family Ticket</h3>
                    <p className="ticket-description">Perfect for families! A special deal for 4 people to enjoy all the fun together.</p>
                    <p className="ticket-price">Price: RM 120</p>
                    <Link to="/buy-tickets">
                        <button>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookingPage;
