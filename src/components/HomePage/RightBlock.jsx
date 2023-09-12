import React from 'react'
import { useSelector } from 'react-redux'
import style from './styles/RightBlock.module.css'

const RightBlock = () => {
  const musics = useSelector(state => state.musics.musics)
  const selectedSong = useSelector(state => state.musics.selectedSong)
  console.log(selectedSong);

  return (
    <>
      <div className={style.right__block}>
        {selectedSong && (
          <>
            <div className={style.poster__wrapper}>
              <img className={style.poster} src={selectedSong.artwork} alt="error" />
            </div>
            <div className={style.songname}>
              <h2 className={style.title}> { selectedSong.artist } - { selectedSong.title } </h2>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default RightBlock