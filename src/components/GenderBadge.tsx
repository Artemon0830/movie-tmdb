
import React, {FC, useEffect, useState} from 'react';
import {mService} from "@/services/api.service";

interface IProps {
    genres: GenreModel[];
}
const GenreBadge:FC<IProps> = () => {
    const [genres, setGenres] = useState<GenreModel[]>([])
    useEffect(() => {
     let genres = mService.getGenres().then(value => setGenres(value));
    }, []);
    return (
        <div>
            {genres.map((genre) => (
                <div key={genre.id}>
                    {genre.name}
                </div>
            ))}

        </div>
    );
}


export default GenreBadge;