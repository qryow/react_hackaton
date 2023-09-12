import React from 'react'
import style from './styles/Janres.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedSongs } from '../../store/musics/musicSlice'
import { useNavigate } from 'react-router'

import OneJanreList from './OneJanreList'

const OneJanre = () => {
  const musics = useSelector(state => state.musics.musics)
  const genre = useSelector(state => state.musics.selectedGenre)
  console.log(genre);
  console.log(musics)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSong = () => {
    let musicsByGenre;
    console.log(genre);
    if(Array.isArray(musics)) {
      musicsByGenre = musics.filter(music => music.janre === genre);
      if(musicsByGenre) {
        dispatch(setSelectedSongs(musicsByGenre))
      }
    }
  }

  return (
    <div className={style.nav_list__wrapper} onClick={() => {
      handleSong();
    }}>
      <OneJanreList />
      <button className={style.see__btn} onClick={() => {
        handleSong();
      }}>See songs</button>
    </div>
  )
}

export default OneJanre

