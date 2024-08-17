'use client';
import React, {FC, useEffect, useState} from 'react';
import {GenreModel} from '@/Models/GenreModel';
import {mService} from "@/services/api.service";
import {MovieModel} from "@/Models/MovieModel";
import GenreComponent from "@/components/GenreComponent";


const GenreBadgeWithMovie: FC = () => {
    const [movies, setMovies] = useState<MovieModel[]>([])
    const [genres, setGenres] = useState<GenreModel[]>([])
    useEffect(() => {
        const service = async ()=> {
            await mService.getGenres().then(value => {
                if (value) {
                    setGenres(value)
                }
                ;
            });
            await mService.getAllMovies(1).then(value => {
                if (value) {
                    setMovies(value)
                }

            })

        }
        service();
    }, []);
    return (
        <div>

            {genres.map(genre => (
                <div key={genre.id}>
                    <GenreComponent genre={genre} movies={movies}/>
                </div>
            ))}


        </div>
    );
};

export default GenreBadgeWithMovie;