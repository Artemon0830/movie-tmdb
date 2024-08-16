'use client';
import {FC} from "react";
import {MovieModel} from "@/Models/MovieModel";
import Link from 'next/link';
import PosterPreview from '@/components/PosterPreview';

interface IProps {
    movies: MovieModel[];

}
const MoviesList: FC<IProps> = ({movies}) => {

    return (
        <div>

            {movies.map(movie => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                        <PosterPreview movie={movie} />
                </Link>
            ))}
        </div>
    );
};

export default MoviesList;