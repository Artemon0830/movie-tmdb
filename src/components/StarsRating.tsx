import React from 'react';

const StarsRating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array.from({}, (_, index) => (
        <span key={index} className={index < rating ? 'filled' : ''}>★</span>
    ));

    return <div>{stars}</div>;
};

export default StarsRating;