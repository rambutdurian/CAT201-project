import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080') // Backend endpoint
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                {data ? (
                    <>
                        <section id="home">
                            <h2>Welcome to {data.name}</h2>
                            <p>{data.description}</p>
                            <p>Operating Hours: {data.hours}</p>
                        </section>
                        <section id="attractions">
                            <h2>Attractions</h2>
                            <ul>
                                {data.attractions.map((attraction, index) => (
                                    <li key={index}>{attraction}</li>
                                ))}
                            </ul>
                        </section>
                        <section id="tickets">
                            <h2>Ticket Prices</h2>
                            <ul>
                                <li>Adult: {data.tickets.adult}</li>
                                <li>Child: {data.tickets.child}</li>
                                <li>Senior: {data.tickets.senior}</li>
                            </ul>
                        </section>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
