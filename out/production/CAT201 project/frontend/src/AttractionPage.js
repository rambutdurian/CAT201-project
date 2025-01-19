import React, { useEffect, useState } from 'react';
import './AttractionPage.css';

const AttractionPage = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state

    useEffect(() => {
        // Fetch attractions data from the backend
        fetch('http://localhost:8080/attractions.json') // Make sure this is the correct URL
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setAttractions(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching attractions:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading attractions...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>Error loading attractions: {error.message}</div>; // Show error if fetch fails
    }

    return (
        <div className="attraction-page">
            <h2 className="attraction-page-title">Our Thrilling Attractions</h2>
            <div className="attraction-grid">
                {attractions.length > 0 ? (
                    attractions.map((attraction, index) => (
                        <div key={index} className="attraction-card">
                            <img
                                className="attraction-image"
                                src={attraction.image}
                                alt={attraction.name}
                            />
                            <div className="attraction-info">
                                <h3 className="attraction-name">{attraction.name}</h3>
                                <p className="attraction-description">{attraction.description}</p>
                                <ul className="attraction-details">
                                    <li>{attraction.heightRequirement}</li>
                                    <li>{attraction.duration}</li>
                                    <li>{attraction.rating}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No attractions found.</div> // Show this if attractions is empty
                )}
            </div>
        </div>
    );
};

export default AttractionPage;