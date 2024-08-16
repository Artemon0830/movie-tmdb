'use client';
import {FC} from "react";
import {MovieModel} from "@/Models/MovieModel";
import Link from 'next/link';
import PosterPreview from '@/components/PosterPreview';
import StarsRating from "@/components/StarsRating";

interface IProps {
    movies: MovieModel[];

}
const MoviesList: FC<IProps> = ({movies}) => {

    return (
        <div>

            {movies.map(movie => (<div key={movie.id}>{movie.title}
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                    <PosterPreview movie={movie}/>
                    <StarsRating rating={movie.vote_average}/>
                </Link>


            </div>))}


        </div>
    );
};

export default MoviesList;