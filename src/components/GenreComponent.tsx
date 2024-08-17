import React, { FC } from 'react';
import { GenreModel } from '@/Models/GenreModel';
import { MovieModel } from '@/Models/MovieModel';
import Link from "next/link";
import MoviesList from "@/components/MoviesList";

interface GenreComponentProps {
    genre: GenreModel;
    movies: MovieModel[];
}

const GenreComponent: FC<GenreComponentProps> = ({ genre, movies }) => {
    // Перевіряємо, чи є movies масивом і не є undefined
    const filteredMovies = Array.isArray(movies)
        ? movies.filter(movie => movie.genre_ids.includes(genre.id))
        : [];

    return (
        <div>

            {filteredMovies.length > 0 ? (
                <ul>
                    {filteredMovies.map(movie => (
                        <Link key={movie.id} href={'<MoviesList movies={movies}/>'}>{genre.name}</Link>
                    ))}
                </ul>
            ) : (
                <p>No movies available for this genre.</p>
            )}
        </div>
    );
};

export default GenreComponent;