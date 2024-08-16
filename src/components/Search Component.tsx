// 'use client';
// import React, {useState} from 'react';
// import {useForm} from "react-hook-form";
// const SearchComponent:FC<IProps> = () => {
//     let {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm();
//     const [search, setSearch] = useState('')
//     const formSearch = (data: any) => {
//         setSearch(data)
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(formSearch)}>
//                 <input type={'text'} />
//             </form>
//
//         </div>
//     );
// };
//
// export default SearchComponent;
// 'use client';
// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import styles from './SearchComponent.module.css';
//
// interface SearchComponentProps {
//     onSearch: (query: string) => void;
// }
//
// const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [search, setSearch] = useState('');
//
//     const formSearch = (data: any) => {
//         setSearch(data.search);
//         onSearch(data.search);
//     };
//
//     return (
//         <div className={styles.searchContainer}>
//             <form onSubmit={handleSubmit(formSearch)}>
//                 <input
//                     type="text"
//                     {...register('search', { required: true })}
//                     className={styles.searchInput}
//                 />
//                 <button type="submit" className={styles.searchButton}>Search</button>
//             </form>
//         </div>
//     );
// };
//
// export default SearchComponent;