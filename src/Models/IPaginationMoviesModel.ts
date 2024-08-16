import {MovieModel} from "@/Models/MovieModel";
import {IPaginationPageModel} from "@/Models/IPaginationPageModel";


export interface IPaginationMoviesModel {
    prev: null | IPaginationPageModel;
    next: null | IPaginationPageModel;
    items: MovieModel[];

}