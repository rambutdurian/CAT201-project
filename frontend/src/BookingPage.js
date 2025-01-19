import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './BookingPage.css';

function BookingPage() {
    const ticketCategories = [
        {
            title: 'Single Ticket',
            description: 'For individuals who want to visit the park on their own. Enjoy a day full of adventure!',
            price: 'RM 50',
        },
        {
            title: 'Combo Ticket',
            description: 'Get the best of both worlds! Includes admission to both the park and additional attractions.',
            price: 'RM 80',
        },
        {
            title: 'Family Ticket',
            description: 'Perfect for families! A special deal for 4 people to enjoy all the fun together.',
            price: 'RM 120',
        },
    ];

    return (
        <div className="booking-page">
            {/* Big Image Section */}
            <section className="booking-big-image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/booking-banner.jpg`} // Path to your big image
                    alt="Booking Banner"
                    className="big-image"
                />
            </section>

            <h2 className="booking-title">Buy Tickets</h2>

            {/* Ticket Categories List Below the Image */}
            <div className="ticket-category">
                {ticketCategories.map((ticket, index) => (
                    <div key={index} className="ticket-box">
                        <h3>{ticket.title}</h3>
                        <p className="ticket-description">{ticket.description}</p>
                        <div className="ticket-price">
                            <span>Price: </span><strong>{ticket.price}</strong>
                        </div>
                        <Link to="/buy-tickets" className="buy-now-button">
                            Buy Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingPage;