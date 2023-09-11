import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Player from '../components/Player/Player';
import MusicListPage from './HomePage/MusicListPage';
import ProfileSideBar from '../components/Profile/ProfileSideBar';
import { setActiveProfile } from '../store/profile/profileSlice'; 
import Janres from '../components/Janres/Janres';

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
              <div className={style.search_navbar}>
                <button className={style.btn} onClick={() => setProfileActive(true)}></button>
              </div>
              <Janres />
              {/*<MusicListPage />*/}
            </div>
            <div className={style.right__block}>
            </div>
            <ProfileSideBar active={profileActive} setActive={setProfileActive} />
        </div>
    );
};

export default HomePage;