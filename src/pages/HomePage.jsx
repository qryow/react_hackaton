import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Player from '../components/Player/Player';
import MusicListPage from './HomePage/MusicListPage';
import ProfileSideBar from '../components/Profile/ProfileSideBar';
import { setActiveProfile } from '../store/profile/profileSlice'; 
import Janres from '../components/Janres/Janres';

const HomePage = () => {
  const [profileActive, setProfileActive] = useState(false)
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profiles.activeProfile)
  console.log(profile);

  useEffect(() => {
    const storedProfile = localStorage.getItem('activeProfile');
    if (storedProfile) {
      const activeProfile = JSON.parse(storedProfile);
      dispatch(setActiveProfile(activeProfile));
    }
  }, [dispatch]);

    return (
        <div className={style.wrapper}>
            <Player />
            <Navbar />
            <div className={style.content}>
              <div className={style.search_navbar}>
                <div className={style.avatar__wrapper} onClick={() => setProfileActive(true)}>
                  <img className={style.avatar__nav} src={profile?.avatar || ''} alt="error"/>
                </div>
              </div>

              <Janres />

            </div>
            <div className={style.right__block}>
            </div>
            <ProfileSideBar active={profileActive} setActive={setProfileActive} />
        </div>
    );
};

export default HomePage;