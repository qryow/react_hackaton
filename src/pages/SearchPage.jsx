import React from 'react';
import Navbar from '../components/Navbar';
import SearchNavbar from './SearchPage/SearchNavbar';
import MusicListPage from './HomePage/MusicListPage';
import style from '../styles/index.module.css';

const SearchPage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar />
            <div className={style.nav_list__wrapper}>
              <SearchNavbar />
              <MusicListPage />
            </div>
        </div>
    );
};

export default SearchPage;