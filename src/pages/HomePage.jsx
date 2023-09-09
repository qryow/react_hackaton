import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import MusicListPage from './HomePage/MusicListPage';
import Profile from '../components/Profile/Profile';
import ProfileSideBar from '../components/Profile/ProfileSideBar';

const HomePage = () => {

    return (
        <div className={style.content}>
            <Navbar />
            {/*<Profile />*/}
            <ProfileSideBar />
            {/*<MusicListPage />*/}
        </div>
    );
};

export default HomePage;