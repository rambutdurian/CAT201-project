import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyTicketsPage.css';

function BuyTicketsPage() {
    const navigate = useNavigate();

    // State for selected ticket and quantity
    const [ticketType, setTicketType] = useState('single');
    const [quantity, setQuantity] = useState(1);

    // State for the form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    // State for the promo code and discount
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    // Message for the promo code
    const [promoMessage, setPromoMessage] = useState('');

    // Ticket prices
    const ticketPrices = {
        single: 50,
        combo: 80,
        family: 120
    };

    // Define valid promo codes and their discounts
    const promoCodes = {
        NEWYEAR15: 15,
        MERRY20: 20,
        HAPPY15: 15,
        SCHOOLHOLIDAY15: 15,
        EARLYBIRD10: 10,
        CNY25: 25
    };

    // Calculate the total amount
    let totalAmount = ticketPrices[ticketType] * quantity;

    // Calculate total with discount
    totalAmount -= (totalAmount * discount) / 100;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create customer data object
        const newCustomer = {
            id: Date.now(),  // Using timestamp as a unique ID
            name,
            email,
            paymentAmount: totalAmount
        };

        // Retrieve existing customers from localStorage or create an empty array
        let customers = JSON.parse(localStorage.getItem('customers')) || [];

        // Add the new customer to the list
        customers.push(newCustomer);

        // Save updated customers to localStorage
        localStorage.setItem('customers', JSON.stringify(customers));

        // Navigate to the Payment Page and pass the total amount
        navigate('/payment', { state: { totalAmount } });
    };

    const handleCancel = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (promoCode !== '') {
                if (promoCodes[promoCode]) {
                    setDiscount(promoCodes[promoCode]);
                    setPromoMessage(`You got a ${promoCodes[promoCode]}% discount!`);
                } else {
                    setPromoMessage('Invalid promo code!');
                    setDiscount(0);
                }
            }
        }
    };

    return (
        <div className="buy-tickets-page">
            <h1>Buy Your Tickets</h1>
            <p>Please complete your booking by selecting your preferred options below:</p>

            {/* Ticket Selection Form */}
            <form onSubmit={handleSubmit} className="ticket-form">
                <div className="form-group">
                    <label htmlFor="ticketType">Select Ticket Type:</label>
                    <select
                        id="ticketType"
                        value={ticketType}
                        onChange={(e) => setTicketType(e.target.value)}
                    >
                        <option value="single">Single Ticket - RM50</option>
                        <option value="combo">Combo Ticket - RM80</option>
                        <option value="family">Family Ticket - RM120</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="^(01)[0-9]{1}-[0-9]{7}$"
                        placeholder="012-3456789"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="promoCode">Promo Code:</label>
                    <input
                        type="text"
                        id="promoCode"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    {promoMessage && (
                        <div className="promo-message">
                            <p>{promoMessage}</p>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label>Total Price: </label>
                    <strong>RM {totalAmount.toFixed(2)}</strong>
                </div>

                <div className="button-group">
                    <button type="button" className="standard-btn cancel-btn" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="standard-btn submit-btn">
                        Make Payment
                    </button>
                </div>

            </form>
        </div>
    );
}

export default BuyTicketsPage;