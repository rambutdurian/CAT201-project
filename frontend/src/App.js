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
import AdminDashboard from './AdminDashboard'; // Admin Dashboard

function App() {
    const [data, setData] = useState(null); // State for data
    const [isLoading, setIsLoading] = useState(true); // State for loading status

    // Fetch data from the backend or mock data on initial load
    useEffect(() => {
        // Simulate fetching data (can be replaced with actual API if needed)
        const mockData = {
            name: 'Eclipse Kingdom',
            description: 'An exciting theme park with tons of attractions!',
            contact: 'contact@eclipsekingdom.com'
        };
        setData(mockData);
        setIsLoading(false);
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
                <Header />
                <main className="MainContent">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home name={data.name} description={data.description} contact={data.contact} />}
                        />
                        <Route path="/promotions" element={<PromotionPage />} />
                        <Route path="/book" element={<BookingPage />} />
                        <Route path="/attraction" element={<AttractionPage />} />
                        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
                        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </Router>
            <Footer />
        </div>
    );
}

export default App;