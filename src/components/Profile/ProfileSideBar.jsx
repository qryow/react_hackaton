import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './styles/Profile.module.css';
import close from '../../images/close.png';
import ProfileModal from './ProfileModal';

const ProfileSideBar = ({active, setActive}) => { 
  const [modalActive, setModalActive] = useState(true)


  const activeProfile = useSelector(state => state.profiles.activeProfile);
  console.log(activeProfile);

    if (!activeProfile) {
      return (
        <div>
          <p>No active profile selected</p>
        </div>
      );
    }

  return (
    <>
      <div className={active ? `${style.wrapper} ${style.active}` : `${style.wrapper}`} onClick={() => setActive(false)}>
        <div className={active ? `${style.profile__wrapper} ${style.active}` : `${style.profile__wrapper}`} onClick={e => e.stopPropagation()}>
          <div className={style.profile__account}>
            <div className={style.profile__nav}>
              <h3 className={style.nav__title}>Profile</h3>
              <div className={style.nav__close}>
                <img className={style.nav__close_img} src={close} alt="" onClick={() => setActive(false)} />
              </div>
            </div>
            <div className={style.profile__content} key={ activeProfile.id }  >
              <div className={style.profile__img} onClick={() => setModalActive(true)}>
                <img className={style.img__avatar} src={ activeProfile.avatar } alt="" />
              </div>
              <div className={style.profile__info}>
                <h3 className={style.profile__name}> { activeProfile.name } </h3>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <ProfileModal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ProfileSideBar;