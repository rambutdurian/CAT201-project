import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PromotionPage from './PromotionPage';
import BookingPage from './BookingPage';
import AttractionPage from './AttractionPage';
import BuyTicketsPage from './BuyTicketsPage';

function App() {
    const [data, setData] = useState(null); // State for data
    const [isLoading, setIsLoading] = useState(true); // State for loading status

    // Fetch data from the backend on initial load
    useEffect(() => {
        fetch('http://localhost:8080') // Replace with your backend API URL
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false); // Data has been fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Stop loading if there's an error
            });
    }, []);

    // Display loading message while fetching data
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Display error message if data failed to load
    if (!data) {
        return <div>Error loading data. Please try again later.</div>;
    }

    return (
        <div className="App">
            <Router>
                <Header promotions={[]} />
                <main className="MainContent">
                    <Routes>
                        {/* Default route for Home */}
                        <Route
                            path="/"
                            element={
                                <Home
                                    name={data?.name}
                                    description={data?.description}
                                    contact={data?.contact}
                                />
                            }
                        />
                        {/* Other routes */}
                        <Route path="/promotions" element={<PromotionPage promotions={[]} />} />
                        <Route path="/book" element={<BookingPage />} />
                        <Route path="/attraction" element={<AttractionPage attractions={[]} />} />
                        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
                        {/* Redirect unknown routes to Home */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </Router>
            <Footer />
        </div>
    );
}

export default App;