'use client';

import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {mService} from '@/services/api.service';
import {GenreModel} from '@/Models/GenreModel';
import {MovieModel} from '@/Models/MovieModel';
import MoviesList from '@/components/MoviesList';
import Link from 'next/link';

const GenreBadge: FC = () => {
    const [genres, setGenres] = useState<GenreModel[]>([]);
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const searchParams = useSearchParams();
    const genreId = searchParams.get('genreId');

    useEffect(() => {
        const fetchGenres = async () => {
                const genresData = await mService.getGenres();
                setGenres(genresData);
        };
        fetchGenres();
    }, []);
    useEffect(() => {
        const fetchMovies = async () => {
                    const moviesData = await mService.getMoviesByGenre(+genreId);
                    setMovies(moviesData);
        };
        fetchMovies();
    }, [genreId]);
    return (
        <div>
            <div>
                {genres.map(genre => (
                    <Link
                        key={genre.id}
                        href={`/genres/?genreId=${genre.id}`}
                        style={{ margin: '5px', display: 'inline-block', padding: '10px', border: '1px solid black', borderRadius: '5px', textDecoration: 'none', color: 'black' }}>
                        {genre.name}
                    </Link>
                ))}
            </div>
            <div><MoviesList movies={movies} /></div>
        </div>
    );
};
export default GenreBadge;