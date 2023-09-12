import React, { useEffect } from 'react';
//import MusicItem from './MusicItem';
import JanreItem from './JanreItem'
import style from './styles/Janres.module.css'
import clock from '../../img/clock.svg';
import { useDispatch, useSelector } from 'react-redux';
//import { getMusics } from '../../store/musics/musicActions';


const MusicList = () => {
    const songs = useSelector(state => state.musics.selectedSongs)
    console.log(songs);

    const dispatch = useDispatch();

    //useEffect(() => {
    //    dispatch(getMusics());
    //}, []);

    return (
        <div className={style.music_list}>
            <div className={style.top}><p>#</p><p className={style.top_title}>TITLE</p><p className={style.top_album}>ALBUM</p></div>
                <hr className={style.line} />
                <>
                    {/*{musics.map(music => (
                        <MusicItem key={music.id} music={music} />
                    ))}*/}
                    {songs.map(song => (
                      <JanreItem key={song.id} song={song} />
                    ))}
                </>
        </div>
    );
};

export default MusicList;