import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="Header">
            <div className="Header-container">
                <div className="Header-title">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logo.png`} // Path to the logo image
                            alt="Eclipse Kingdom Logo"
                            className="Header-logo"
                        />
                    </Link>
                    <h1>Eclipse Kingdom</h1>
                </div>
                <button className="Hamburger" onClick={toggleMenu}>
                    {/* Hamburger icon */}
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <nav className={`Header-nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/attraction" onClick={() => setMenuOpen(false)}>Attractions</Link>
                    <Link to="/promotions" onClick={() => setMenuOpen(false)}>Promotions</Link>
                    <Link to="/book" onClick={() => setMenuOpen(false)}>Book Tickets</Link>
                    {/* Add the Admin Dashboard link */}
                    <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;