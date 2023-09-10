import React from 'react';
import { useSelector } from 'react-redux';
import style from './styles/Profile.module.css'
import { useNavigate } from 'react-router';

const ProfileComponent = () => {
  const activeProfile = useSelector(state => state.profiles.activeProfile);

  const navigate = useNavigate();

  if (!activeProfile) {
    return (
      <div>
        <p>No active profile selected</p>
      </div>
    );
  }

  return (
    <div className={style.profile__content} key={ activeProfile.id } onClick={() => navigate(`/profile-edit/${activeProfile.id}`)} >
      <div className={style.profile__img}>
        <img className={style.img__avatar} src={ activeProfile.avatar } alt="" />
      </div>
      <div className={style.profile__info}>
        <h3 className={style.profile__name}> { activeProfile.name } </h3>
      </div>
    </div>
  );
};

export default ProfileComponent;