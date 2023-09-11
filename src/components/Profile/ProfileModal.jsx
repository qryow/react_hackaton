import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProfile } from '../../store/profile/profileActions';
import style from './styles/Profile.module.css'
import { setActiveProfile } from '../../store/profile/profileSlice';
import close from '../../images/close.png'


const ProfileModal = ({active, setActive}) => {
  const { loading } = useSelector(state => state.profiles)
  const activeProfile = useSelector(state => state.profiles.activeProfile);

  const [profile, setProfile] = useState(activeProfile || { firstName: '', secondName: '', avatar: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeProfile) {
      setProfile(activeProfile);
    }
  }, []);


  const handleProfileUpdate = () => {
    console.log(profile);
    dispatch(setActiveProfile(profile));
    localStorage.setItem('activeProfile', JSON.stringify(profile));
    dispatch(editProfile(profile));
    navigate("/homepage");
  };
  
  

  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => setActive(false)}>
          <div className={active ? `${style.modal__wrapper} ${style.active}` : `${style.modal__wrapper}`} onClick={e => e.stopPropagation()}>
            <div className={style.modal__nav}>
              <h3 className={style.modal__title}>Profile info</h3>
              <div className={style.nav__close} onClick={() => navigate('/homepage')}>
                <img className={style.nav__close_img} src={close} alt="Close" onClick={() => setActive(false)} />
              </div>
            </div>


                  <div className={style.modal__content} key={ activeProfile.id }>
                      <div className={style.modal__img}>
                        <img className={style.img__avatar} src={ profile.avatar } alt=" " />
                      </div>

                      <div className={style.modal__inputs}>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='Name' className={style.form__input} onChange={(e) => setProfile({ ...profile, name: e.target.value, })} value={profile.name}  />
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='Avatar' className={style.form__input} onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}  />                     
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        <button className={style.modal__btn} onClick={handleProfileUpdate}>Save</button>

                      </div>
                  </div>

          </div>
        </div>
      )} 
    
    </>
  )
}

export default ProfileModal