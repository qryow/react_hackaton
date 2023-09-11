import React, { useRef } from 'react'
import style from './styles/MusicPlayer.module.css'
import play from '../../images/play.svg'
import pause from '../../images/pause.svg'
import next from '../../images/next.svg'
import prev from '../../images/previous.svg'

const PlayerSong = ({audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs}) => {
  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setIsPlaying(!isPlaying);
  }

  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;
  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
  }

  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  
  return (
    <div className={style.player_wrapper}>
      <div className={style.player_block}>
        <p> {currentSong.title } </p>

        <div className={style.controls} >
          <img src={prev} alt="error" onClick={skipBack} />
          {isPlaying ? <img src={pause} onClick={PlayPause}/> : <img src={play} onClick={PlayPause} />}
          <img src={next} alt="" onClick={skiptoNext} />
        </div>

        <div className={style.navigation}>
          <div className={style.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
            <div className={style.seek_bar} style={{width: `${currentSong.progress+"%"}`}}></div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default PlayerSong