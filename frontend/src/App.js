import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PromotionPage from './PromotionPage';
import BookingPage from './BookingPage';
import AttractionPage from './AttractionPage';
import BuyTicketsPage from './BuyTicketsPage';

function App() {
    const [data, setData] = useState(null);

    const promotions = [
        {
            title: 'Walk-in Promotion',
            description: 'Come in and shop with us for exclusive walk-in deals! No need to order online.',
            promoCode: 'WALKIN10',
            imageUrl: '/images/image1.jpg',
        },
        {
            title: 'Christmas Promotion',
            description: 'Celebrate the festive season with our special Christmas deals!',
            promoCode: 'MERRY20',
            imageUrl: '/images/image2.jpg',
        },
        {
            title: 'New Year Promotion',
            description: 'Ring in the new year with our New Year promotion!',
            promoCode: 'NEWYEAR15',
            imageUrl: '/images/image3.jpg',
        },
    ];

    useEffect(() => {
        fetch('http://localhost:8080')
            .then((response) => response.json())
            .then((data) =>
                setData({
                    ...data,
                    attraction: data.attraction.map((attraction) => ({
                        ...attraction,
                        image: `${process.env.PUBLIC_URL}/${attraction.image}`,
                    })),
                })
            )
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <div className="App">
                <Header promotions={promotions} />
                <main>
                    {/* Home Page (Welcome message) */}
                    <section id="home" className="home-section">
                        <h2>Welcome to Our Theme Park!</h2>
                        <p>Explore exciting attractions, promotions, and book your tickets today!</p>
                    </section>

                    <Routes>
                        <Route
                            path="/promotions"
                            element={<PromotionPage promotions={promotions} />}
                        />
                        <Route path="/book" element={<BookingPage />} />
                        <Route
                            path="/attraction"
                            element={<AttractionPage attractions={data?.attraction} />}
                        />
                        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;