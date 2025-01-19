import React from 'react';
import './PaymentPage.css'; // Import CSS for styling

function PaymentPage() {
    return (
        <div className="payment-page">
            <h2>Payment Page</h2>
            <p>Enter your payment details to complete the purchase.</p>
            <form>
                <label>
                    Credit Card Number:
                    <input type="text" name="cardNumber" />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" name="expiryDate" />
                </label>
                <label>
                    CVV:
                    <input type="text" name="cvv" />
                </label>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
}

export default PaymentPage;
