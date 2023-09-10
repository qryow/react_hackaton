  import React, { useState } from 'react';
  import style from './styles/MusicPlayer.module.css'
import { useSelector } from 'react-redux';

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();

    const selectedSong = useSelector(state => state.musics.selectedSong)
    console.log(selectedSong);

    const togglePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    return (
      <>
        {selectedSong && (
          <div className={style.player__block}>
            <h3>{ selectedSong.title }</h3>
            <audio ref={audioRef} src={ selectedSong.url} />
            <button onClick={togglePlay}>
              {isPlaying ? 'Пауза' : 'Воспроизвести'}
            </button>
          </div>

        )}
      </>
    );
  }

  export default MusicPlayer;