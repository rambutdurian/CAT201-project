import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ promotions }) {
    if (!promotions) {
        return null;  // Guard against undefined or empty promotions
    }

    return (
        <header className="Header">
            <h1 className="Header-title">Theme Park</h1>
            <div className="Header-nav">
                <Link to="/">Home</Link>
                <Link to="/attraction">Attractions</Link>
                <Link to="/promotions">Promotions</Link>
                <Link to="/book">Book Tickets</Link>
            </div>
        </header>
    );
}

export default Header;
