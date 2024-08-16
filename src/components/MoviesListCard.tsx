'use client';
import React, {FC} from 'react';
import { MovieModel } from '@/Models/MovieModel';
import PosterPreview from './PosterPreview';
import StarsRating from './StarsRating';
import { useRouter } from 'next/router';
import VideoPage from "@/components/VideoPage";
import GenreComponent from "@/components/GenreComponent";
import GenreBadge from "@/components/GenderBadge";
interface IProps {
    movie: MovieModel;
    genres: GenreModel[];
}
const MoviesListCard:FC <IProps>=({ movie })=>{
    const router = useRouter();

    const handleClick = () => {
        router.push(`/movies/${movie.id}`);
    };

    return (
        <div onClick={handleClick}>
            <PosterPreview movie={movie} />
            <h2>{movie.title}</h2>
            <StarsRating rating={movie.vote_average} />
            <p><GenreBadge genres={movie.genres}/></p>

        </div>
    );
};

export default MoviesListCard;