import React from 'react';
import './AttractionPage.css';

const AttractionPage = () => {
    const attractions = [
        {
            "name": "Galactic Roller Coaster",
            "description": "Strap in for an intergalactic ride! Zoom through the stars with gravity-defying loops and thrilling drops. A must-ride for space explorers looking for a thrilling adventure.",
            "image": `${process.env.PUBLIC_URL}/images/rollercoaster.jpeg`,
            "heightRequirement": "Height 🎚: 120cm and above",
            "duration": "Duration ⏱️: 2 minutes",
            "rating": "Rating ⭐: 4.8/5"
        },
        {
            "name": "Starlight Ferris Wheel",
            "description": "Relax while orbiting around the park on our Starlight Ferris Wheel. With stunning views of the galaxy and park, it's a serene experience for all ages.",
            "image": `${process.env.PUBLIC_URL}/images/ferriswheel.jpeg`,
            "heightRequirement": "Height 🎚: None",
            "duration": "Duration ⏱️: 10 minutes",
            "rating": "Rating ⭐: 4.5/5"
        },
        {
            "name": "Nebula Nightmare",
            "description": "Journey through the eerie and mysterious Nebula Nightmare! Encounter strange cosmic creatures and ominous dark matter as you navigate through space's haunted regions.",
            "image": `${process.env.PUBLIC_URL}/images/hauntedhouse.jpeg`,
            "heightRequirement": "Height 🎚: 100cm and above",
            "duration": "Duration ⏱️: 5 minutes",
            "rating": "Rating ⭐: 4.7/5"
        },
        {
            "name": "Zero Gravity Drop",
            "description": "Experience the sensation of weightlessness as you plummet back to Earth in a heart-stopping drop! Feel the rush of space-like gravity as you descend from extreme heights.",
            "image": `${process.env.PUBLIC_URL}/images/drop.jpeg`,
            "heightRequirement": "Height 🎚: 130cm and above",
            "duration": "Duration ⏱️: 1 minute",
            "rating": "Rating ⭐: 4.9/5"
        },
        {
            "name": "Astro Spinners",
            "description": "Twist and spin in our Astro Spinners ride. Feel like you're rotating around distant stars in this dynamic spinning experience. Fun and exciting for the whole family.",
            "image": `${process.env.PUBLIC_URL}/images/spinner.jpeg`,
            "heightRequirement": "Height 🎚: 90cm and above",
            "duration": "Duration ⏱️: 3 minutes",
            "rating": "Rating ⭐: 4.6/5"
        }
    ];

    return (
        <div className="attraction-page">
            <h2 className="attraction-page-title">Our Thrilling Attractions</h2>
            <div className="attraction-grid">
                {attractions.map((attraction, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default AttractionPage;