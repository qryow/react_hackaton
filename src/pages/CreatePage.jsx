import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import MusicCreate from '../components/Musics/MusicCreate';

const CreatePage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar />
            <MusicCreate />
        </div>
    );
};

export default CreatePage;