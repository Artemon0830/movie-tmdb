import React, {FC} from 'react';
import { MovieModel } from '@/Models/MovieModel';
import { posterUrl } from '@/BaseUrl/posterUrl';

const PosterPreview:FC<{ movie: MovieModel }> = ({ movie }) => {
    return (
        <img
            src={`${posterUrl}${movie.poster_path}`}
            alt={movie.title}
        />

    );
};

export default PosterPreview;