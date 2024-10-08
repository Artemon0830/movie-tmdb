'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { mService } from '@/services/api.service';
import MoviesList from '@/components/MoviesList';
import Pagination from '@/components/Pagination';
import {MovieModel} from "@/Models/MovieModel";

const MoviesPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || '1';
    const [moviesPagination, setMoviesPagination] = useState<MovieModel[]>([]
    );

    useEffect(() => {
        mService.getAllMovies(+page).then(value => {

                setMoviesPagination(value);
        });
    }, [page]);
    console.log('MoviesPagination Items:', moviesPagination);
    return (
        <div>
            <MoviesList movies={moviesPagination} />
            <Pagination currentPage={parseInt(page)} />
        </div>
    );
};

export default MoviesPage;
