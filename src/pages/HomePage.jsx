import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile/Profile';
import MusicListPage from './HomePage/MusicListPage';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
const HomePage = () => {

    return (
        <div className={style.content}>
            <Navbar />
            <Profile />
            <MusicListPage />
            <MusicPlayer />
        </div>
    );
};

export default HomePage;