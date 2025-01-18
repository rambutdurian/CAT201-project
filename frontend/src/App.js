import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import necessary components from react-router-dom
import Header from './Header'; // Ensure Header is imported
import Footer from './Footer'; // Ensure Footer is imported
import PromotionPage from './PromotionPage'; // Import the PromotionPage component
import BookingPage from './BookingPage'; // Import the BookingPage component
import AttractionsPage from './AttractionsPage'; // Import the AttractionsPage component
import BuyTicketsPage from './BuyTicketsPage'; // Import the new BuyTicketsPage component

function App() {
    const [data, setData] = useState(null);

    const promotions = [
        {
            title: 'Walk-in Promotion',
            description: 'Come in and shop with us for exclusive walk-in deals! No need to order online.',
            promoCode: 'WALKIN10',
            imageUrl: '/images/image1.jpg', // Updated to fetch from public/images folder
        },
        {
            title: 'Christmas Promotion',
            description: 'Celebrate the festive season with our special Christmas deals!',
            promoCode: 'MERRY20',
            imageUrl: '/images/image2.jpg', // Updated to fetch from public/images folder
        },
        {
            title: 'New Year Promotion',
            description: 'Ring in the new year with our New Year promotion!',
            promoCode: 'NEWYEAR15',
            imageUrl: '/images/image3.jpg', // Updated to fetch from public/images folder
        },
    ];

    useEffect(() => {
        fetch('http://localhost:8080') // Backend endpoint
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <div className="App">
                <Header promotions={promotions} /> {/* Pass promotions to Header */}
                <main>
                    {/* Home Page (Welcome message and links) */}
                    <section id="home">
                        <h2>Welcome to Our Theme Park!</h2>
                        <p>Explore exciting attractions, promotions, and book your tickets today!</p>
                        <div className="home-navigation">
                            <Link to="/promotions">
                                <button>View Promotions</button>
                            </Link>
                            <Link to="/attractions">
                                <button>Explore Attractions</button>
                            </Link>
                            <Link to="/book">
                                <button>Book Tickets</button>
                            </Link>
                        </div>
                    </section>

                    {/* Routing setup for individual pages */}
                    <Routes>
                        <Route path="/promotions" element={<PromotionPage promotions={promotions} />} />
                        <Route path="/book" element={<BookingPage />} />
                        <Route path="/attractions" element={<AttractionsPage />} />
                        <Route path="/buy-tickets" element={<BuyTicketsPage />} /> {/* New route for Buy Tickets */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
