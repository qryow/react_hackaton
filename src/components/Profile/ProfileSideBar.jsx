import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
//import { getProfile } from '../../store/profile/profileActions'
import style from './styles/Profile.module.css';
import close from '../../images/close.png';
import Profile from '../../components/Profile/Profile'

const ProfileSideBar = () => { 
  //const activeProfile = useSelector(state => state.profiles.actionProfile)
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const profileClasses = isOpen
    ? `${style.profile__wrapper} ${style.open}`
    : `${style.profile__wrapper} ${style.close}`;

  return (
    <>
      <div className={style.navbar__wrapper}></div>

      <button onClick={toggle}>Profile</button>

      <div className={profileClasses}>
        <div className={style.profile__account}>
          <div className={style.profile__nav}>
            <h3 className={style.nav__title}>Profile</h3>
            <div className={style.nav__close}>
              <img className={style.nav__close_img} src={close} alt="" onClick={toggle} />
            </div>
          </div>

          <Profile />
          

        </div>
      </div>
    </>
  );
};

export default ProfileSideBar;