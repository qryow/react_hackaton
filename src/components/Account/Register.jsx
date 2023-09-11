import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'

import style from './Registration.module.css'

import { registerUser } from '../../store/account/userAction';
import { clearStatusState } from '../../store/account/userSlice';
import { createProfile } from '../../store/profile/profileActions'


const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const registerAndCreateProfile = async () => {
    const registrationResult = await dispatch(registerUser({ user, navigate }));

      if (registrationResult.status === "error") {
        console.error('error:', registrationResult.error);
        registrationResult.error = 'Ошибка при регистрации';
        return registrationResult;
      } else {
        const updatedProfile = {
          username: user.username,
          name: user.username,
          avatar: "https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg",
          primeStatus: false
        };
      dispatch(createProfile(updatedProfile))
    }
  }

  const { loading, status } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);


  return (
    <>
    <div className={style.body}>
      <div className={style.content}>
        {loading ? (  
              <div className={style.boxContainer}>
                <div className={`${style.box} ${style.box1}`}></div>
                <div className={`${style.box} ${style.box2}`}></div>
                <div className={`${style.box} ${style.box3}`}></div>
                <div className={`${style.box} ${style.box4}`}></div>
                <div className={`${style.box} ${style.box5}`}></div>
              </div>
        ) : (
          <>
            {status ? (
              <>
                {status === "error" && (
                  <>
                    <div className="errorcenter">
                      <div className={style.errorBlock}>
                        <h3 className={style.status__error}>An error occured :(</h3>
                        <button className={style.try__again} onClick={() => dispatch(clearStatusState())}>
                          Try again
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className={style.form__block}>
                  <div className={style.img__block}>
                  </div>

                  <div className={style.inputs__block}>
                  <div className={style.inputs__block2}>
                    <form className={style.form} action="">
                      <h2 className={style.form__title}>Sign up</h2>

                      <div className={style.input__box}>
                        <input required type="text" className={style.form__input} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        <label>Username</label>
                        <img src="" alt="" />
                      </div>  

                      <div className={style.input__box}>
                        <input required type="password" className={style.form__input} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        <label>Password</label>
                        <img src="" alt="" />
                      </div>  

                          <button
                            className={style.form__button}
                            onClick={registerAndCreateProfile}
                          >
                            register
                          </button>

                      <div className={style.link}>
                        <p className={style.link__text}>Do you have an account ?</p>
                        <NavLink to="/login" className={style.signin}>Sign in</NavLink>
                      </div>
                    </form>
                  </div>
                </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default Register