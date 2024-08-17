import React from 'react';
import { mService } from '@/services/api.service';
import MovieInfo from '@/components/MovieInfo';
import {MovieModel} from "@/Models/MovieModel";
import GenreBadge from "@/components/GenreBadge"; // Ensure this is imported

type Params = { id: string };

const MoviePage = async ({ params }: { params: Params }) => {
    let movieById:MovieModel = await mService.getMovieById(params.id);
    return (
        <div>
            <MovieInfo movie={movieById} />
        </div>
    );
};

export default MoviePage;
