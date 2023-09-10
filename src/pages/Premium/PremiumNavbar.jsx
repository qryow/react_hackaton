import React from 'react';
import style from '../../styles/index.module.css';
import spotifyImg from '../../img/spotify icon.svg';
import { useNavigate } from 'react-router-dom';

const PremiumNavbar = () => {
    const navigate = useNavigate();
    return (
        <div className={style.premium_navbar}>
            <img src={spotifyImg} alt="" />
            <div className={style.premium_navbar_list}>
                <p>Premium</p>
                <p>Support</p>
                <p>Download</p>
                <hr className={style.line}/>
                <button onClick={() => navigate('/register')} className={style.sing_up}>Sign up</button>
                <button onClick={() => navigate('/login')} className={style.log_in}>Log in</button>
            </div>
        </div>
    );
};

export default PremiumNavbar;