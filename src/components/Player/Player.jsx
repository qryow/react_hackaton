  
import React, { useRef, useState, useEffect } from 'react';
import style from './styles/MusicPlayer.module.css'
import { useSelector } from 'react-redux';
import Playersong from './PlayerSong'


export const MusicPlayer = () => {
  const musics = useSelector(state => state.musics);

  const [songs, setSongs] = useState(musics.musics);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedSong = useSelector(state => state.musics.selectedSong)
  const [selectedSongIndex, setSelectedSongIndex] = useState(-1);

  const [currentSong, setCurrentSong] = useState(null);

  const audioElem = useRef();
  
  useEffect(() => {
    if(songs.length) {
      //console.log(songs);
      //console.log(selectedSong);
      setSelectedSongIndex(songs.findIndex(song => song === selectedSong));
    }
  }, [songs, selectedSong]);

  

  useEffect(() => {
    if (musics && musics.musics && musics.musics.length > 1) {
      setSongs(musics.musics);
      if (selectedSongIndex !== -1) {
        setCurrentSong(musics.musics[selectedSongIndex]);
      }
    }
  }, [musics, selectedSongIndex]);

  useEffect(() => {
    if (audioElem.current) {
      if (isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  return (
    <>
      {currentSong && (
        <div className={style.player__block}>
          <div className={style.current__song}>
            <div className={style.img__block}>
              <img className={style.song__img} src={currentSong.artwork} alt="" />
            </div>
            <div className={style.song__info}>
              <h3 className={style.song__name}> {currentSong.title} </h3>
              <h4 className={style.song__author}> {currentSong.artist} </h4>
            </div>
          </div>

          <div className={style.player__wrapper}>
            <audio src={ currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
            <Playersong songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
          </div>
        </div>
      )}
    </>
  );
}

  export default MusicPlayer;