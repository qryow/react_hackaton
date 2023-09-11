import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './styles/Profile.module.css'
import { useNavigate } from 'react-router-dom';
import ProfileModal from './ProfileModal';

const ProfileComponent = () => {
  const [modalActive, setModalActive] = useState(true)
  const activeProfile = useSelector(state => state.profiles.activeProfile);
  console.log(activeProfile);

  const navigate = useNavigate();

  if (!activeProfile) {
    return (
      <div>
        <p>No active profile selected</p>
      </div>
    );
  }

  return (
    <>
      <div className={style.profile__content} key={ activeProfile.id }  >
        <div className={style.profile__img} onClick={() => setModalActive(true)}>
          <img className={style.img__avatar} src={ activeProfile.avatar } alt="" />
        </div>
        <div className={style.profile__info}>
          <h3 className={style.profile__name}> { activeProfile.name } </h3>
        </div>
      </div>
      <ProfileModal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ProfileComponent;