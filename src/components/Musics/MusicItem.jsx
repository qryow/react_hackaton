import React from 'react';
import style from '../../styles/index.module.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const MusicItem = ({ music }) => {
    const { title, artist, artwork, album, url, id } = music;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={style.music_item}>
            <p>{id}</p>
            <img
                onClick={() => navigate(`/musics/${id}`)}
                src={artwork}
                alt={artwork}
            />
            <div>
                <p className={style.music_title}>{ title }</p>
                <p>{ artist }</p>
            </div>
            <p className={style.music_item_album} >{ album }</p>
        </div>
    );
};

export default MusicItem;