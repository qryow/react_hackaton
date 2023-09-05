import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../store/profile/profileActions'
import style from './Profile.module.css';
import close from '../../images/close.png';
//import ProfileItem from './ProfileItem';

const Profile = () => {
  const { profile } = useSelector(state => state.profile);
  const [isOpen, setIsOpen] = useState(false);
  console.log(profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [])
  console.log(profile);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const profileClasses = isOpen
    ? `${style.profile__wrapper} ${style.close}`
    : `${style.profile__wrapper} ${style.open}`;

  return (
    <>
      <div className={style.navbar__wrapper}></div>

      {/*<button onClick={toggleProfile}>Profile</button>*/}

      <div className={profileClasses}>
        <div className={style.profile__account}>
          <div className={style.profile__nav}>
            <h3 className={style.nav__title}>Profile</h3>
            <div className={style.nav__close}>
              <img className={style.nav__close_img} src={close} alt="Close" />
            </div>
          </div>

          {profile && profile.map(oneProfile => (
            <div className={style.profile__content} key={ oneProfile.id }>
                <div className={style.profile__img}>
                  <img src={ oneProfile.avatar } alt="" />
                </div>
              <div className={style.profile__info}>
                <h3 className={style.profile__name}> { oneProfile.name } </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Profile;
