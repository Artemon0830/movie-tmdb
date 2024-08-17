import React, {FC} from 'react';
import { MovieModel } from '@/Models/MovieModel';
import { posterUrl } from '@/BaseUrl/posterUrl';
import styles from './PosterPreview.module.css';

const PosterPreview:FC<{ movie: MovieModel }> = ({ movie }) => {
    return (
        <img className={styles.posterImage}
            src={`${posterUrl}${movie?.poster_path}`}
            alt={movie?.title}
        />

    );
};

export default PosterPreview;