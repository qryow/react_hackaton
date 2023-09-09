import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import MusicListPage from './HomePage/MusicListPage';
import Profile from '../components/Profile/Profile';

const HomePage = () => {

    return (
        <div className={style.content}>
            <Navbar />
            
            {/*<MusicListPage />*/}
        </div>
    );
};

export default HomePage;