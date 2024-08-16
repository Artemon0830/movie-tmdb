import React, { FC } from 'react';
import { MovieModel } from '@/Models/MovieModel';
import PosterPreview from "@/components/PosterPreview";
import styles from './MovieInfo.module.css';

interface IProps {
    movie: MovieModel;
}

const MovieInfo: FC<IProps> = ({ movie }) => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${movie.poster_path})` }}>
            <div className={styles.overlay}>
                <PosterPreview movie={movie} />
                <div className={styles.details}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <p className={styles.overview}>{movie.overview}</p>
                    <p className={styles.releaseDate}>{movie.release_date}</p>
                    <p className={styles.voteAverage}>{movie.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;