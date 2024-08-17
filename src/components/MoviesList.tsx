'use client';
import { FC } from "react";
import { MovieModel } from "@/Models/MovieModel";
import Link from 'next/link';
import PosterPreview from '@/components/PosterPreview';
import StarsRating from "@/components/StarsRating";
import styles from './MoviesList.module.css';

interface IProps {
    movies: MovieModel[];
}

const MoviesList: FC<IProps> = ({ movies }) => {
    return (
        <div className={styles.moviesContainer}>
            {movies.map(movie => (
                <div key={movie.id} className={styles.movieCard}>
                    <Link href={`/movies/${movie.id}`} className={styles.movieLink}>
                        <PosterPreview movie={movie} />
                        <h2 className={styles.movieTitle}>{movie.title}</h2>
                        <StarsRating rating={movie.vote_average} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MoviesList;