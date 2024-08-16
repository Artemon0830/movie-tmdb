// src/components/GenreBadge.tsx
import React, {FC} from 'react';
import {ImageProps} from "next/image";
interface IProps {
    genreId: number;
}
const GenreBadge:FC<IProps> = ({ genreId }) => {

    const genreName = getGenreNameById(genreId);

    return <span>{genreName}</span>;
};

export default GenreBadge;