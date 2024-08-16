import React, { FC } from 'react';

// Define the GenreModel interface if not already defined
interface GenreModel {
    id: number;
    name: string;
}

interface IProps {
    genre: GenreModel;
}

const GenreComponent: FC<IProps> = ({ genre }) => {
    return (
        <div>
            {genre.name}
        </div>
    );
};

export default GenreComponent;
