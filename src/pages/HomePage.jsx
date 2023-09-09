import React from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile/Profile';
import MusicListPage from './HomePage/MusicListPage';
import MusicFooter from '../components/MusicPlayer/MusicFooter';

const HomePage = () => {
    const musicData = {
        title: title,
        artist: 'Artist Name',
        artwork: 'url_to_artwork_image',
        album: 'Album Name',
        url: 'url_to_audio_file',
      };
    

    return (
        <div className={style.content}>
            <Navbar />
            <Profile />
            <MusicListPage />
            <MusicFooter music={musicData} />
        </div>
    );
};

export default HomePage;