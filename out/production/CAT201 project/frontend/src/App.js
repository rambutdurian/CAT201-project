import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';  // Import the Home component
import PromotionPage from './PromotionPage';
import BookingPage from './BookingPage';
import AttractionPage from './AttractionPage';
import BuyTicketsPage from './BuyTicketsPage';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080') // Fetching data from the backend
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <Router>
                <Header promotions={[]} />
                <main className="MainContent">
                    <Routes>
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
                        <Route path="/promotions" element={<PromotionPage promotions={[]} />} />
                        <Route path="/book" element={<BookingPage />} />
                        <Route path="/attraction" element={<AttractionPage attractions={[]} />} />
                        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
                    </Routes>
                </main>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
