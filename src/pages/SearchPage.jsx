import React from 'react';
import Navbar from '../components/Navbar';
import SearchNavbar from './SearchPage/SearchNavbar';
import MusicListPage from './HomePage/MusicListPage';

const SearchPage = () => {
    return (
        <div>
            <Navbar />
            <SearchNavbar />
            <MusicListPage />
        </div>
    );
};

export default SearchPage;