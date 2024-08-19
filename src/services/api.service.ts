import axios from "axios";
import {baseUrl, urls} from "@/BaseUrl/BaseUrl";
import {tokenApi} from "@/BaseUrl/token";
import {IPaginationMoviesModel} from "@/Models/IPaginationMoviesModel";
import {MovieModel} from "@/Models/MovieModel";
import {GenreModel} from "@/Models/GenreModel";

let axiosInstance = axios.create({
    baseURL:baseUrl
});
axiosInstance.interceptors.request.use((request)=>{
    request.headers['Authorization'] = `Bearer ${tokenApi}`;
    return request;
})
export const mService = {
    getAllMovies: async (page:number|string): Promise<IPaginationMoviesModel> => {
        let movies = await axiosInstance.get<IPaginationMoviesModel>(`/discover/movie?page=${page}`);
        return movies.data.results;
    },
    getMovieById: async (id: number | string): Promise<MovieModel> => {
        let movie =fetch(`${baseUrl}${urls.movie.byId(id)}`, {
            headers: { 'Authorization': `Bearer ${tokenApi}` }
        }).then(value => value.json());
        return movie;
    },
    getSearchMovies: async (query: string): Promise<MovieModel[]> => {
        let movies = await axiosInstance.get<MovieModel[]>(`/search/movie?query=${query}`);
        return movies.data.results;
    },
    getGenres: async (): Promise<GenreModel[]> => {
        let genres = await axiosInstance.get<GenreModel[] >(`/genre/movie/list`);
        return genres.data.genres;

    },
    getMoviesByGenre: async (genreId: number): Promise<MovieModel[]> => {
        let movies = await axiosInstance.get<MovieModel[]>(`/discover/movie?with_genres=${genreId}`);
        return movies.data.results;
    }};
