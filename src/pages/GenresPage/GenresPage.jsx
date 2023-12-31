import React from 'react'
import style from '../../components/Janres/styles/Janres.module.css'
import Janres from '../../components/Janres/Janres'
import OneJanre from '../../components/Janres/OneJanre'
import Player from '../../components/Player/Player'
import Navbar from '../../components/Navbar'
import RightBlock from '../../components/HomePage/RightBlock'

const GenresPage = () => {
  return (
    <>
    <div className={style.wrapper}>
      <Player />
      <Navbar />
      <OneJanre />
      <RightBlock />
    </div>
    </>
  )
}

export default GenresPage