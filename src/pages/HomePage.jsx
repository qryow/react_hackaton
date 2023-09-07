import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile/Profile';
import MusicListPage from './HomePage/MusicListPage';

const HomePage = () => {

    return (
        <div className={style.content}>
            <Navbar />
            <Profile />
            <MusicListPage />
        </div>
    );
};

export default HomePage;