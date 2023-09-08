import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { getProfile, getOneProfile, editProfile } from '../../store/profile/profileActions';
import { clearOneProfileState } from '../../store/profile/profileSlice';
import style from './styles/Profile.module.css'
import close from '../../images/close.png';

const ProfileModal = () => {
  const { loading, oneProfile } = useSelector(state => state.profiles)
  const { profiles } = useSelector(state => state.profiles);
  
  const [profile, setProfile] = useState(oneProfile || { firstName: '', secondName: '', avatar: ''});
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  useEffect(() => {
    dispatch(getOneProfile(id));
    return () => dispatch(clearOneProfileState());
  }, [id]);

  useEffect(() => {
    if (oneProfile) {
      setProfile(oneProfile);
    }
  }, [oneProfile ])

  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div className={style.modal}>
          <div className={style.modal__wrapper}>
            <div className={style.modal__nav}>
              <h3 className={style.modal__title}>Profile info</h3>
              <div className={style.nav__close} onClick={() => navigate('/homepage')}>
                <img className={style.nav__close_img} src={close} alt="Close" />
              </div>
            </div>

            {profiles && profiles.map(oneProfile => (
                  <div className={style.modal__content} key={ oneProfile.id }>
                      <div className={style.modal__img}>
                        <img className={style.img__avatar} src={ oneProfile.avatar } alt=" " />
                      </div>

                      <div className={style.modal__inputs}>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='firstname' className={style.form__input} onChange={(e) => setProfile({ ...profile, firstName: e.target.value, })} value={profile.firstName}  />
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='secondname' className={style.form__input} onChange={(e) => setProfile({ ...profile, secondName: e.target.value, })} value={profile.secondName}  />
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='avatar' className={style.form__input} onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}  />                     
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        <button className={style.modal__btn} onClick={() => {
                            dispatch(editProfile(profile))
                            navigate("/homepage");
                        }}>Save</button>


                      </div>
                  </div>
                ))}

          </div>
        </div>
      )} 
    
    </>

  )
}

export default ProfileModal