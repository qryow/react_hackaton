import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import CreateMusic from '../components/Musics/CreateMusic';

const CreatePage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar />
            <CreateMusic />
        </div>
    );
};

export default CreatePage;