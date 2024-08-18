import React, { FC } from 'react';
import StarRatings from 'react-star-ratings';

interface IProps {
    rating: number;
}

const StarRating: FC<IProps> = ({ rating }) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
        />
    );
};

export default StarRating;