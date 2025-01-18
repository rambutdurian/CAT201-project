import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <h1 className="Header-title">Eclipse Kingdom</h1>
            <nav className="Header-nav">
                <a href="#home">Home</a>
                <a href="#attractions">Attractions</a>
                <a href="#tickets">Tickets</a>
            </nav>
        </header>
    );
}

export default Header;
