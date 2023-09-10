import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Player from '../components/Player/Player';
import MusicListPage from './HomePage/MusicListPage';
import ProfileSideBar from '../components/Profile/ProfileSideBar';
import { setActiveProfile } from '../store/profile/profileSlice'; 

const HomePage = () => {
  const [profileActive, setProfileActive] = useState(true)
  const dispatch = useDispatch();

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
            <MusicListPage />
            </div>
            {/*<div className={style.profile__wrapper}></div>*/}
              <button className={style.btn} onClick={() => setProfileActive(true)}></button>
            <ProfileSideBar active={profileActive} setActive={setProfileActive} />
        </div>
    );
};

export default HomePage;