'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { mService } from '@/services/api.service';
import { MovieModel } from '@/Models/MovieModel';
import MovieInfo from "@/components/MovieInfo";

const SearchComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchResults, setSearchResults] = useState<MovieModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const formSearch = async (data: any) => {
        setIsLoading(true);
        setError(null);

        try {
            const results = await mService.getSearchMovies(data.search);
            setSearchResults(results.results || []);
        } catch (err) {
            setError('An error occurred while searching.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(formSearch)}>
                <input type='text' {...register('search', { required: true })} />
                {errors.search && <span>This field is required</span>}
                <button type='submit' disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p>{error}</p>}

            <div>
                {
                    searchResults.length > 0 ? (
                        searchResults.map((movie) => (
                            <MovieInfo key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )
                }
            </div>
        </div>
    );
};

export default SearchComponent;
