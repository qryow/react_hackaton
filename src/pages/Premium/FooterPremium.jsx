import React from 'react';
import style from '../../styles/index.module.css';
import spotify from '../../img/spotify icon.svg';
import '../../styles/index.module.css'
import instagram from '../../img/insta.svg';
import twit from '../../img/Twitter.svg';
import face from '../../img/facebook.svg';

const FooterPremium = () => {

    return (
        <div className={style.footer}>
            <div className={style.footer_up}>
                <img src={spotify} alt="" />
                <div className={style.footer_table}>
                    <tr>
                    <th>Company</th>
                    <th>Communities</th>
                    <th>Useful links</th>
                    </tr>
                    <tr>
                        <td><span>About</span></td>
                        <td><span>For Artists</span></td>
                        <td><span>Support</span></td>
                    </tr>
                    <tr>
                        <td><span>Jobs</span></td>
                        <td><span>Developers</span></td>
                        <td><span>Web Player</span></td>
                    </tr>
                    <tr>
                        <td><span>For the Record</span></td>
                        <td><span>Advertising</span></td>
                        <td><span>Free Mobile App</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><span>Investors</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><span>Vendors</span></td>
                        <td></td>
                    </tr>
                </div>
                <div className={style.social}>
                    <button><img src={instagram} alt="" /></button>
                    <button><img src={twit} alt="" /></button>
                    <button><img src={face} alt="" /></button>
                </div>
            </div>
            <div className={style.footer_down}>
                <div>
                    <p>Legal</p>
                    <p>Privacy Center</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                    <p>About Ads</p>
                    <p>Accessibility</p>
                    <p>Notice at Collection</p>
                </div>
                <p>© 2023 Spotify AB</p>
                
            </div>
        </div>
    );
};

export default FooterPremium;