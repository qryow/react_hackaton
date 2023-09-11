import React, { useState, useRef, useEffect } from 'react';
import style from '../../styles/index.module.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteMusic } from '../../store/musics/musicActions';
import more from '../../img/More.svg'
import MusicEdit from '../Musics/MusicEdit';
import { setSelectedSong } from '../../store/musics/musicSlice';

const MusicItem = ({ song }) => {
  const { title, artist, artwork, album, id } = song;
  const [modalActive, setModalActive] = useState(false);


  const dispatch = useDispatch();
  const musicItemRef = useRef(null);


  const handleMusicClick = () => {
    dispatch(setSelectedSong(song));
  };

  return (
    <>
    <div>
      <div className={style.music_item} ref={musicItemRef}>
        <p>{id}</p>
        <img src={artwork} alt={artwork} onClick={handleMusicClick} />
        <div>
          <p className={style.music_title}>{title}</p>
          <p>{artist}</p>
        </div>
        <p className={style.music_item_album}>{album}</p>

      </div>
    </div>
    
    </>
  );
};

export default MusicItem;