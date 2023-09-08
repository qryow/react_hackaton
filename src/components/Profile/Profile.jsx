import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getProfile } from '../../store/profile/profileActions'
import style from './styles/Profile.module.css';
import close from '../../images/close.png';

const Profile = () => { 
  const { profiles } = useSelector(state => state.profiles);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const profileClasses = isOpen
    ? `${style.profile__wrapper} ${style.open}`
    : `${style.profile__wrapper} ${style.close}`;

  return (
    <>
      <div className={style.navbar__wrapper}></div>

      {/*<button onClick={toggle}>Profile</button>*/}

      <div className={profileClasses}>
        <div className={style.profile__account}>
          <div className={style.profile__nav}>
            <h3 className={style.nav__title}>Profile</h3>
            <div className={style.nav__close}>
              <img className={style.nav__close_img} src={close} alt="" onClick={toggle} />
            </div>
          </div>

            {profiles && profiles.map(oneProfile => (
              <div className={style.profile__content} key={ oneProfile.id } onClick={() => navigate(`/profile-edit/${oneProfile.id}`)} >
                  <div className={style.profile__img}>
                    <img className={style.img__avatar} src={ oneProfile.avatar } alt="" />
                  </div>
                <div className={style.profile__info}>
                  <h3 className={style.profile__name}> { oneProfile.firstName } </h3>
                  <h3 className={style.profile__name}> { oneProfile.secondName } </h3>
                </div>
              </div>
            ))}

        </div>
      </div>
    </>
  );
};

export default Profile;
