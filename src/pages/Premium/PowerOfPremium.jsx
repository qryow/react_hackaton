import React from 'react';
import style from '../../styles/index.module.css';
import power from '../../img/power.svg';
import power2 from '../../img/power2.svg';
import power3 from '../../img/power3.svg';
import power4 from '../../img/power4.svg';


const PowerOfPremium = () => {
    return (
        <div className={style.powerofpremium}>
            <h1>The power of Premium</h1>
            <div className={style.power_carts}>
                <div>
                    <img src={power} alt="" />
                    <div className={style.power_text}>
                        <h3>Ad-free music listening</h3>
                        <p>Enjoy uninterrupted music.</p>
                    </div>
                </div>
                <div>
                    <img src={power2} alt="" />
                    <div className={style.power_text}>
                        <h3>Offline playback</h3>
                        <p>Save your data by listening offline.</p>
                    </div>
                </div>
                <div>
                    <img src={power3} alt="" />
                    <div className={style.power_text}>
                        <h3>Play everywhere</h3>
                        <p>Listen on your speakers, TV, and other favorite devices.</p>
                    </div>
                </div>
                <div>
                    <img src={power4} alt="" />
                    <div className={style.power_text}>
                        <h3>Pay your way</h3>
                        <p>Prepay with Paytm, UPI, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerOfPremium;