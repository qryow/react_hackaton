import React, { useState } from 'react';
import style from './styles/MusicPlayer.module.css'
import { useSelector } from 'react-redux';

import play from '../../images/play.svg'
import pause from '../../images/pause.svg'

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const selectedSong = useSelector(state => state.musics.selectedSong)
  const musics = useSelector(state => state.musics)
  console.log(musics);

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
          <div className={style.current__song}>
            <div className={style.img__block}>
              <img className={style.song__img} src={selectedSong.artwork} alt="" />
            </div>
            <div className={style.song__info}>
              <h3 className={style.song__name}> {selectedSong.title} </h3>
              <h4 className={style.song__author}> {selectedSong.artist} </h4>
            </div>
          </div>

          <div className={style.player__wrapper}>
            <audio ref={audioRef} src={ selectedSong.url} />
            <div className={style.play__wrapper}>
              <img
                className={style.play_pause}
                src={isPlaying ? pause : play}
                alt={isPlaying ? 'Пауза' : 'Воспроизвести'}
                onClick={togglePlay}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

  export default MusicPlayer;



//* =================================================================


