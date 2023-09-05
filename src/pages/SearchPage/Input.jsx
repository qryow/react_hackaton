import React, { useState } from 'react';
import style from '../../styles/index.module.css';
import searchImg from '../../img/search.svg';
import { useDispatch } from 'react-redux';
import { getMusics } from '../../store/musics/musicActions';
import { changeSearchVal } from '../../store/musics/musicSlice';

const Input = () => {
    const [search, setSearch] = useState('');
    console.log(search);

    const dispatch = useDispatch();

    const searchBtn = (e) => {
        e.preventDefault();
        dispatch(changeSearchVal({ search }));
        dispatch(getMusics(search));
        console.log(search);
    };


    return (
        <form className={style.search_input}>
            <button type="submit" onSubmit={searchBtn}>
            <img src={searchImg} alt="" />
            </button>
            <input
            type="text"
            placeholder="Artists, songs, or podcasts"
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

export default Input;