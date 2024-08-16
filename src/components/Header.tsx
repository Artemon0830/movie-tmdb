'use client'
import React from 'react';
import Link from "next/link";
import SearchComponent from "@/components/Search Component";
import SearchPage from "@/app/movies/search/page";
import MoviesPage from "@/app/movies/page";
import MoviesList from "@/components/MoviesList";
import moviesList from "@/components/MoviesList";

const Header = () => {
    let movies;
    return (
        <div>
            <ul>

                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/movies'}>Movie</Link></li>
                <Link href={'/movies/search'}>Search</Link>


            </ul>
        </div>
    );
}
export default Header;