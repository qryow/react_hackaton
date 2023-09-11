import React, { useState } from 'react';
import style from '../../styles/index.module.css';
import searchImg from '../../img/search.svg';
import { useDispatch } from 'react-redux';
import { getMusics } from '../../store/musics/musicActions';
import { changeSearchVal } from '../../store/musics/musicSlice';

const Input = () => {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();


    return (
        <form className={style.search_input} >
            <button type="submit">
            <img src={searchImg} alt="" />
            </button>
            <input
            type="text"
            placeholder="Artists, songs, or podcasts"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              dispatch(changeSearchVal({ search }));
              dispatch(getMusics());
              setSearch(e.target.value)
            }}
            />
        </form>
    );
};

export default Input;