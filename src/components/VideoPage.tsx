import React, {FC} from 'react';
import {videoUrl} from "@/BaseUrl/videoUrl";
import {MovieModel} from "@/Models/MovieModel";

interface IProps {
movie: MovieModel;
}
const VideoPage:FC<IProps>= ({movie}) => {

    return (
        <div>
                <iframe src={`${videoUrl}${movie.id}/videos`} ></iframe>
        </div>
    );
};

export default VideoPage;