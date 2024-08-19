'use client'
import React from 'react';
import Link from "next/link";
import styles from './Header.module.css';
import MovieInfo from "@/components/MovieInfo";
import UserInfo from "@/components/UserInfo";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            {/*<Link href={'/'} className={styles.headerLink}>Home</Link>*/}
            <Link href={'/movies'} className={styles.headerLink}>Movies</Link>
            <Link href={'/movies/search'} className={styles.headerLink}>Search</Link>
            <Link href={'/genres'} className={styles.headerLink}>Genres</Link>
            <Link href={'/user'} className={styles.headerLink}>UserInfo</Link>
        </div>
    );
}

export default Header;