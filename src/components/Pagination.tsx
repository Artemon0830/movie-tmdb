'use client';
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './Pagination.module.css';

const Pagination = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || '1';

    const handlePageChange = (newPage: number) => {
        router.push(`?page=${newPage}`);
    };

    return (
        <div className={styles.paginationContainer}>
            <button
                className={styles.pageButton}
                onClick={() => handlePageChange(parseInt(page) - 1)}
                disabled={parseInt(page) <= 1}
            >
                prev
            </button>
            <button
                className={styles.pageButton}
                onClick={() => handlePageChange(parseInt(page) + 1)}
            >
                next
            </button>
        </div>
    );
};

export default Pagination;