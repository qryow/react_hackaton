import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'

const HomePage = () => {
    return (
        <div className={style.content}>
            <Navbar />
        </div>
    );
};

export default HomePage;