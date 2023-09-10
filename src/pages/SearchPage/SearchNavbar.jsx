import React from 'react';
import style from '../../styles/index.module.css';
import left from '../../img/left.svg';
import right from '../../img/right.svg';
import Input from './Input';

const SearchNavbar = () => {
    return (
        <div className={style.search_navbar}>
            <div className={style.pagination}>
                <img src={left} alt="" />
                <img src={right} alt="" />
            </div>
            <Input />
        </div>
    );
};

export default SearchNavbar;