import React from 'react';
import style from '../../styles/index.module.css';
import { useNavigate } from 'react-router-dom';

const GetPremium = () => {
    const navigate = useNavigate();
    return (
        <div className={style.get_premium}>
            <div className={style.get_premium_left}>
            <h1>Ends soon: $0 for 3 months of Premium</h1>
            <p className={style.p1}>Don't miss ad-free music listening, offline playback, and more. Cancel anytime.</p>
            <div>
                <button onClick={() => navigate('/premium-order')} className={style.get_button}>
                    <span>GET STARTED</span>
                    <div className={style.wave}></div>
                </button>
            </div>
            <p>1 month free not available for users who have already tried Premium.</p>
            </div>
            <div className={style.backround_img}><img src="https://i.scdn.co/image/ab671c3d0000f430be04d40ce4c3deead108202a" alt="" /></div>
        </div>
    );
};

export default GetPremium;