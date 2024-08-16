import axios from "axios";
import {baseUrl} from "@/BaseUrl/BaseUrl";
import {tokenApi} from "@/BaseUrl/token";
import {IPaginationMoviesModel} from "@/Models/IPaginationMoviesModel";
import {MovieModel} from "@/Models/MovieModel";

let axiosInstance = axios.create({
    baseURL:baseUrl
});
axiosInstance.interceptors.request.use((request)=>{
    request.headers['Authorization'] = `Bearer ${tokenApi}`;
    return request;
})
export const mService = {
    getAllMovies: async (): Promise<IPaginationMoviesModel> => {
        let movies = await axiosInstance.get<IPaginationMoviesModel>(`/discover/movie`);
        return movies.data.results;
    },
    getMovieById: async (id: number | string): Promise<MovieModel> => {
        let movie = await axiosInstance.get<MovieModel>(`/movie/${id}`)
            .then(response => response.data);
        return movie.data;
    },
    // getGenres: async (): Promise<any> => {
    //     let genres = await axiosInstance.get(`/genre/movie/list`);
    //     return genres.data.genres;
    // }
}


// import { baseUrl, urls } from '@/BaseUrl/BaseUrl';
// import { tokenApi } from '@/BaseUrl/token';
// import { MovieModel, } from '@/Models/MovieModel';
//
//
// export const mService = {
//     getAllMovies: async (page:string): Promise<MovieModel[]> => {
//         let movies = await fetch(`${baseUrl}${urls.movie.base}?page=${page}` ,{
//             headers: { 'Authorization': `Bearer ${tokenApi}` },
//         }).then(value => value.json());
//         return movies.results;
//         },
//     getMovieById: async (id: number | string): Promise<MovieModel> => {
//         let movie = await fetch(`${baseUrl}${urls.movie.byId(id)}`, {
//             headers: { 'Authorization': `Bearer ${tokenApi}` }
//         }).then(value => value.json());
//         return movie;
//     },
//     getGenres: async (): Promise<GenreModel[]> => {
//         let genres = await fetch(`${baseUrl}${urls.genre.baseGenre}`, {
//             headers: { 'Authorization': `Bearer ${tokenApi}` }
//         }).then(value => value.json());
//         return genres.genres;
//     }
//     }
//
//
//     // getVideosById: async (id: number | string): Promise<any> => {
//     //     let videos = await fetch(`${baseUrl}${urls.movie.videos(id)}`, {
//     //         headers: { 'Authorization': `Bearer ${tokenApi}` }
//     //     }).then(value => value.json());
//     //     return videos
//     // },
