import React from 'react';
import './PromotionPage.css';

function PromotionPage() {
    const promotions = [
        {
            title: 'Happy Hour Promotion',
            description: 'Join us for Happy Hour! Relax, connect, and make the most of a great atmosphere.',
            promoCode: 'HAPPY15',
            image: `${process.env.PUBLIC_URL}/images/image1.jpg`,
        },
        {
            title: 'Christmas Promotion',
            description: 'Celebrate the festive season with our special Christmas deals!',
            promoCode: 'MERRY20',
            image: `${process.env.PUBLIC_URL}/images/image2.jpg`,
        },
        {
            title: 'New Year Promotion',
            description: 'Ring in the new year with our New Year promotion!',
            promoCode: 'NEWYEAR15',
            image: `${process.env.PUBLIC_URL}/images/image3.jpg`,
        },
        {
            title: 'Chinese New Year Promotion',
            description: 'Celebrate the Chinese New Year with great discounts and special offers.',
            promoCode: 'CNY25',
            image: `${process.env.PUBLIC_URL}/images/image4.jpg`,
        },
        {
            title: 'Early Bird Promotion',
            description: 'Catch the best deals with our Early Bird Promotion! Be one of the first to shop and unlock exclusive early access savings.',
            promoCode: 'EARLYBIRD10',
            image: `${process.env.PUBLIC_URL}/images/image5.jpg`,
        },
        {
            title: 'School Holidays Promotion',
            description: 'Make the most of the school holidays with our special family-friendly discounts. Perfect for gifts, activities, and more during the break!',
            promoCode: 'SCHOOLHOLIDAY15',
            image: `${process.env.PUBLIC_URL}/images/image6.jpg`,
        },
    ];

    return (
        <div className="promotion-page">
            {/* Big Image Section */}
            <section className="promotion-big-image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/big-image.jpg`} // Path to your big image in public/images
                    alt="Big Promotion"
                    className="big-image"
                />
            </section>

            {/* Promotions List */}
            <div className="promotion-cards">
                {promotions.map((promo, index) => (
                    <div key={index} className="promotion-card">
                        <div className="promotion-card-image">
                            <img src={promo.image} alt={promo.title} />
                        </div>
                        <div className="promotion-card-content">
                            <h3>{promo.title}</h3>
                            <p>{promo.description}</p>
                            <div className="promo-code">Promo Code: {promo.promoCode}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PromotionPage;
