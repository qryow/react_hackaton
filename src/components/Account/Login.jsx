import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Registration.module.css';

import { loginUser } from '../../store/account/userAction';
import { clearStatusState, clearUserState } from '../../store/account/userSlice';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { loading, status } = useSelector(state => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
    dispatch(clearUserState());
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
                    <div className={style.errorcenter}>
                      <div className={style.errorBlock}>
                        <h3>An error occured!</h3>
                        <button className={style.try__again} onClick={() => dispatch(clearStatusState())}>Try again</button>
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
                      <form action="" className={style.form}>
                        <h2 className={style.form__title}>Sign in</h2>

                        <div className={style.input__box}>
                          <input type="text" required className={style.form__input} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                          <label>Username</label>
                          <img src="" alt="" />
                        </div>

                        <div className={style.input__box}>
                          <input type="password" required className={style.form__input} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                          <label>Password</label>
                          <img src="" alt="" />
                        </div>

                        <button className={style.form__button} onClick={() => dispatch(loginUser({ user, navigate }))}>Login</button>
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

export default Login