'use client'
import React from 'react';
import Link from "next/link";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Link href={'/'} className={styles.headerLink}>Home</Link>
            <Link href={'/movies'} className={styles.headerLink}>Movies</Link>
            <Link href={'/movies/search'} className={styles.headerLink}>Search</Link>
            <Link href={'/genres'} className={styles.headerLink}>Genres</Link>
        </div>
    );
}

export default Header;