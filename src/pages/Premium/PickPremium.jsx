import React from 'react';
import style from '../../styles/index.module.css';
import upiImg from '../../img/upi.svg';
import paytmImg from '../../img/paytm.svg';
import visa from '../../img/visa.svg';
import mastercard from '../../img/mastercard.svg';
import amex from '../../img/amex.svg';
import vector from '../../img/Vector.svg';
import { useNavigate } from 'react-router-dom';


const PickPremium = () => {
    const navigate = useNavigate();
    return (
        <div className={style.pick_premuim}>
            <div className={style.pick_premuim_text}>
                <h1>Pick your Premium</h1>
                <p>Listen without limits on your phone, speaker, and other devices.</p>
                <div>
                    <img src={upiImg} alt="" />
                    <img src={paytmImg} alt="" />
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={amex} alt="" />
                </div>
            </div>
            <div className={style.cards_start}>
                <div className={style.card_start}>
                    <span className={style.card_start_free}>3 mouths free</span>
                    <h3>Individual</h3>
                    <p>$10.99/month after offer period</p>
                    <p>1 account</p>
                    <hr />
                    <div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Ad-free music listening</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Play anywhere - even offline</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>On-demand playback</p></div>
                    </div>
                    <div className={style.card_start_down}>
                        <button onClick={() => navigate('/premium-order')}>Get Started</button>
                        <p>Individual plan only. $10.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends September 12, 2023.</p>
                    </div>
                </div>
                <div className={style.card_start}>
                    <span className={style.card_start_free}>1 month free</span>
                    <h3>Duo</h3>
                    <p>$14.99/month after offer period</p>
                    <p>2 accounts</p>
                    <hr />
                    <div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>2 Premium accounts for a couple under one roof</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Ad-free music listening, play offline, on-demand playback</p></div>
                    </div>
                    <div className={style.card_start_down}>
                        <button onClick={() => navigate('/premium-order')}>Get Started</button>
                        <p>Free for 1 month, then $14.99 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address. Terms apply.</p>
                    </div>
                </div>
                <div className={style.card_start}>
                    <span className={style.card_start_free}>1 mouths free</span>
                    <h3>Family</h3>
                    <p>$16.99/month after offer period</p>
                    <p>6 accounts</p>
                    <hr />
                    <div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>6 Premium accounts for family members living under one roof</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Block explicit music</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Ad-free music listening, play offline, on-demand playback</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Spotify Kids: a separate app made just for kids</p></div>
                    </div>
                    <div className={style.card_start_down}>
                        <button onClick={() => navigate('/premium-order')}>Get Started</button>
                        <p>Individual plan only. $10.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends September 12, 2023.</p>
                    </div>
                </div>
                <div className={style.card_start}>
                    <span className={style.card_start_free}>3 mouths free</span>
                    <h3>Student</h3>
                    <p>$5.99/month after offer period</p>
                    <p>1 account</p>
                    <hr />
                    <div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Hulu (With Ads) plan</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Ad-free music listening</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>Play anywhere - even offline</p></div>
                        <div  className={style.vectors}><img src={vector} alt="" /><p>On-demand playback</p></div>
                    </div>
                    <div className={style.card_start_down}>
                        <button onClick={() => navigate('/premium-order')}>Get Started</button>
                        <p>Free for 3 months, then $5.99 per month after. Offer currently includes access to Hulu (With Ads) plan, subject to eligibility. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before. Terms apply. Offer ends September 12, 2023.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PickPremium;