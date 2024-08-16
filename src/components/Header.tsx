'use client'
import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/movies'}>Movie</Link></li>

            </ul>
        </div>
    );
}
export default Header;
