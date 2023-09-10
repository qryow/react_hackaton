import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import MusicListPage from './HomePage/MusicListPage';
import ProfileSideBar from '../components/Profile/ProfileSideBar';
import { setActiveProfile } from '../store/profile/profileSlice'; 

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const storedProfile = localStorage.getItem('activeProfile');
    if (storedProfile) {
      const activeProfile = JSON.parse(storedProfile);
      dispatch(setActiveProfile(activeProfile));
    }
  }, [dispatch]);

    return (
        <div className={style.content}>
            <Navbar />
            <ProfileSideBar />
            {/*<MusicListPage />*/}
        </div>
    );
};

export default HomePage;