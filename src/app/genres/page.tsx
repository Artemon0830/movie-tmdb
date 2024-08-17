// pages/genres/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { mService } from '@/services/api.service';
import { MovieModel } from '@/Models/MovieModel';
import { GenreModel } from '@/Models/GenreModel';

const GenrePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [genre, setGenre] = useState<GenreModel | null>(null);

    useEffect(() => {
        if (id) {
            const fetchMovies = async () => {
                const allMovies = await mService.getAllMovies(1);
                const genre = await mService.getGenreById(+id);

                const filteredMovies = allMovies.results.filter(movie => movie.genre_ids.includes(Number(id)));
                setMovies(filteredMovies);
                setGenre(genre);
            };

            fetchMovies();
        }
    }, [id]);

    return (
        <div>
            <h1>{genre ? genre.name : 'Genre'} Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default GenrePage;
