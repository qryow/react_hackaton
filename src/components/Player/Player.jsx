//import React, { useState } from 'react';
//import style from './styles/MusicPlayer.module.css'
//import { useSelector } from 'react-redux';

//import play from '../../images/play.svg'
//import pause from '../../images/pause.svg'

//export const MusicPlayer = () => {
//  const [isPlaying, setIsPlaying] = useState(false);
//  const audioRef = React.createRef();

//  const selectedSong = useSelector(state => state.musics.selectedSong)
//  const musics = useSelector(state => state.musics)
//  console.log(musics);

//  const togglePlay = () => {
//    if (isPlaying) {
//      audioRef.current.pause();
//    } else {
//      audioRef.current.play();
//    }
//    setIsPlaying(!isPlaying);
//  };

//  return (
//    <>
//      {selectedSong && (
//        <div className={style.player__block}>
//          <div className={style.current__song}>
//            <div className={style.img__block}>
//              <img className={style.song__img} src={selectedSong.artwork} alt="" />
//            </div>
//            <div className={style.song__info}>
//              <h3 className={style.song__name}> {selectedSong.title} </h3>
//              <h4 className={style.song__author}> {selectedSong.artist} </h4>
//            </div>
//          </div>

//          <div className={style.player__wrapper}>
//            <audio ref={audioRef} src={ selectedSong.url} />
//            <div className={style.play__wrapper}>
//              <img
//                className={style.play_pause}
//                src={isPlaying ? pause : play}
//                alt={isPlaying ? 'Пауза' : 'Воспроизвести'}
//                onClick={togglePlay}
//              />
//            </div>
//          </div>
//        </div>
//      )}
//    </>
//  );
//}

//  export default MusicPlayer;



//* =================================================================
//import React, { useRef, useState, useEffect } from 'react';
//import style from './styles/MusicPlayer.module.css'
//import { useSelector } from 'react-redux';
//import Playersong from './PlayerSong'


//export const MusicPlayer = () => {
//  const musics = useSelector(state => state.musics)

//  const [songs, setSongs] = useState([]);
//  const [isPlaying, setIsPlaying] = useState(false);
//  const [currentSong, setCurrentSong] = useState(musics.musics[1] || null);
//  console.log(currentSong);
//  console.log(songs);
  
//  const audioElem = useRef()

//  const selectedSong = useSelector(state => state.musics.selectedSong)
//  console.log(musics);

//  useEffect(() => {
//    if (musics && musics.musics && musics.musics.length > 1) {
//      setSongs(musics.musics);
//      setCurrentSong(musics.musics[1]);
//    }
//  }, [musics]);

//  useEffect(() => {
//    if (audioElem.current) {
//      if (isPlaying) {
//        audioElem.current.play();
//      } else {
//        audioElem.current.pause();
//      }
//    }
//  }, [isPlaying]);

//  const onPlaying = () => {
//    const duration = audioElem.current.duration;
//    const ct = audioElem.current.currentTime;

//    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

//  }

//  return (
//    <>
//      {selectedSong && (
//        <div className={style.player__block}>
//          <div className={style.current__song}>
//            <div className={style.img__block}>
//              <img className={style.song__img} src={selectedSong.artwork} alt="" />
//            </div>
//            <div className={style.song__info}>
//              <h3 className={style.song__name}> {selectedSong.title} </h3>
//              <h4 className={style.song__author}> {selectedSong.artist} </h4>
//            </div>
//          </div>

//          <div className={style.player__wrapper}>
//            <audio src={selectedSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
//            <Playersong songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
//          </div>
//        </div>
//      )}
//    </>
//  );
//}

//  export default MusicPlayer;



////* ======================================================================
import React, { useRef, useState, useEffect } from 'react';
import style from './styles/MusicPlayer.module.css'
import { useSelector } from 'react-redux';
import Playersong from './PlayerSong'


export const MusicPlayer = () => {
  const musics = useSelector(state => state.musics);

  const [songs, setSongs] = useState(musics.musics);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedSong = useSelector(state => state.musics.selectedSong)
  //const selectedSongIndex = songs.findIndex(song => song === selectedSong);
  //console.log(selectedSongIndex);
  const [selectedSongIndex, setSelectedSongIndex] = useState(-1);

  const [currentSong, setCurrentSong] = useState(null);
  //console.log(currentSong); //! не получаеться закинуть действующую песню в currentprofile 
  //console.log(songs);

  const audioElem = useRef();
  //console.log();

  //console.log(musics);
  //console.log(selectedSong)
  useEffect(() => {
    if(songs.length) {
      console.log(songs);
      console.log(selectedSong);
      setSelectedSongIndex(songs.findIndex(song => song === selectedSong));
    }
  }, [songs, selectedSong]);

  console.log(selectedSongIndex);
  

  useEffect(() => {
    if (musics && musics.musics && musics.musics.length > 1) {
      setSongs(musics.musics);
      //console.log(selectedSongIndex);
      if (selectedSongIndex !== -1) {
        //console.log('WORK');
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