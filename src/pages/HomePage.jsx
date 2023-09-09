import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import MusicListPage from './HomePage/MusicListPage';

const HomePage = () => {

    return (
        <div className={style.content}>
            <Navbar />
            {/*<MusicListPage />*/}
        </div>
    );
};

export default HomePage;