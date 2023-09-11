import React, { useEffect } from 'react';
import MusicItem from './MusicItem';
import style from '../../styles/index.module.css';
import clock from '../../img/clock.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getMusics } from '../../store/musics/musicActions';


const MusicList = () => {
    const { musics, loading } = useSelector(state => state.musics);
    console.log(musics);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMusics());
    }, []);

    return (
        <div className={style.music_list}>
            <div className={style.top}><p>#</p><p className={style.top_title}>TITLE</p><p className={style.top_album}>ALBUM</p><img src={clock} alt="" /></div>
                <hr className={style.line} />
            { loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {musics.map(music => (
                        <MusicItem key={music.id} music={music} />
                    ))}
                </>
            ) }
        </div>
    );
};

export default MusicList;