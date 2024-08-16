'use client';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { mService } from '@/services/api.service';
import { MovieModel } from '@/Models/MovieModel';
import { useRouter, useSearchParams } from "next/navigation";
import MoviesList from "@/components/MoviesList";

const SearchComponent: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    const formSearch = async (data: { search: string }) => {
        const searchQuery = data.search.trim();
        if (searchQuery) {
            router.push(`/movies/search?query=${searchQuery}`);
        }
    };

    useEffect(() => {
        const fetchMovies = async () => {
            if (query) {
                const moviesSearch = await mService.getSearchMovies(query);
                setMovies(moviesSearch);
            }
        };

        fetchMovies();
    }, [query]);

    return (
        <div>
            <form onSubmit={handleSubmit(formSearch)}>
                <input
                    type='text'
                    {...register('search')}
                    defaultValue={query || ''}
                />
                {errors.search && <span>This field is required</span>}
                <button type='submit'>Search</button>
            </form>

            <div>
                {movies.length > 0 ? (
                    <MoviesList movies={movies} />
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
