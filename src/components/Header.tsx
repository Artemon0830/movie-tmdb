'use client'
import React from 'react';
import Link from "next/link";
import styles from './Header.module.css';
import MoviesPage from "@/app/movies/page";
import ThemeComponent from "@/components/Theme/ThemeComponent";
import Toggle from "@/components/Theme/Toggle";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Link href={'/'} className={styles.headerLink}>Home</Link>
            <Link href={'/movies'} className={styles.headerLink}>Movies</Link>
            <Link href={'/movies/search'} className={styles.headerLink}>Search</Link>
            <Link href={'/genres'} className={styles.headerLink}>Genres</Link>
            <Toggle/>
        </div>
    );
}

export default Header;