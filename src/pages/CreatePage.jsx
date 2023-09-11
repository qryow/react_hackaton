import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import CreateMusicPage from './CreateMusicPage';

const CreatePage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar />
            <CreateMusicPage />
        </div>
    );
};

export default CreatePage;