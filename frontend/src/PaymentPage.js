import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract the total amount from location state
    const totalAmount = location.state?.totalAmount || 0;

    // State for payment details
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    // Handle form submission
    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        // Simple validation for empty fields
        if (!cardNumber || !expiryDate || !cvv) {
            setError('Please fill in all the fields.');
            return;
        }

        // Prepare customer and payment data to send to the backend
        const customerData = {
            fullName: 'John Doe',  // Replace with actual customer name
            email: 'john.doe@gmail.com',  // Replace with actual customer email
            phoneNumber: '012-3456789',  // Replace with actual phone number
            ticketType: 'Single Ticket',
            quantity: 1,
            amount: totalAmount.toFixed(2),
            date: new Date().toLocaleDateString('en-GB')  // Current date in dd/mm/yyyy format
        };

        try {
            // Send the data to the backend
            const response = await fetch('http://localhost:8080', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerData)
            });

            const responseData = await response.json();

            if (response.ok) {
                // Show success message and set timeout to navigate back
                setShowAlert(true);
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            } else {
                setError(responseData.error || 'Failed to save payment data.');
            }
        } catch (error) {
            setError('An error occurred while processing the payment.');
        }
    };

    return (
        <div className="payment-page">
            {showAlert && <div className="alert-message">Payment Successful!</div>}
            <h2>Payment Page</h2>
            <p>Total Amount: <strong>RM {totalAmount.toFixed(2)}</strong></p>
            <p>Enter your payment details to complete the purchase.</p>

            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            {/* Payment Form */}
            <form onSubmit={handlePaymentSubmit}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Credit Card Number:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={16}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        maxLength={3}
                        required
                    />
                </div>

                <div className="button-group">
                    <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
                        Cancel
                    </button>
                    <button type="submit" className="submit-button">
                        Submit Payment
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PaymentPage;