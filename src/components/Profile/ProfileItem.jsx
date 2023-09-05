import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './Profile.module.css'

const ProfileItem = ({ oneProfile }) => {
  const { name, avatar, id } = oneProfile;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className={style.profile__content} key={ oneProfile.id } oneProfile={oneProfile}>
        <div className={style.profile__img}>
          <img src={ oneProfile.avatar } alt="" />
        </div>
      <div className={style.profile__info}>
        <h3 className={style.profile__name}> { oneProfile.name } </h3>
      </div>
    </div>
  )
}

export default ProfileItem