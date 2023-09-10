import React, { useState } from 'react';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile/Profile';
import MusicListPage from './HomePage/MusicListPage';
import MusicFooter from '../components/MusicPlayer/MusicFooter';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const HomePage = () => {
    const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
    
    const musicData = {
        title: 'title',
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
            <MusicPlayer
        music={currentMusic}
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
      />
      <MusicFooter music={currentMusic} isPlaying={isPlaying} />
        </div>
    );
};

export default HomePage;