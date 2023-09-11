import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editMusic, getMusics } from '../../store/musics/musicActions';
import { setActiveProfile } from '../../store/profile/profileSlice';
import close from '../../images/close.png'
import style from './styles/MusicEdit.module.css'

const MusicEdit = ({active, setActive}) => {

  const currentSong = useSelector(state => state.musics.selectedSong)
  console.log(currentSong);
  const [song, setSong] = useState(currentSong || { title: '', artwork: ''});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    return (
      <>
        <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => setActive(false)}>
          <div className={active ? `${style.modal__wrapper} ${style.active}` : `${style.modal__wrapper}`} onClick={e => e.stopPropagation()}>
            <div className={style.modal__nav}>
              <h3 className={style.modal__title}>Music edit</h3>
              <div className={style.nav__close} onClick={() => navigate('/search')}>
                <img className={style.nav__close_img} src={close} alt="Close" onClick={() => setActive(false)} />
              </div>
            </div>


                  <div className={style.modal__content} key={ currentSong.id }>
                      <div className={style.modal__img}>
                        <img className={style.img__avatar} src={ song.artwork} alt=" " />
                      </div>

                      <div className={style.modal__inputs}>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='Name of song' className={style.form__input} onChange={(e) => setSong({ ...song, title: e.target.value})} value={song.title}  />
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        <div className={style.input__box}>
                        <input type="text" required placeholder='URL for poster' className={style.form__input} onChange={(e) => setSong({ ...song, artwork: e.target.value })} />                     
                          <label> </label>
                          <img src="" alt="" />
                        </div>

                        {/*<div className={style.input__box}> //! Artist name
                        <input type="text" required placeholder='' className={style.form__input}  />                     
                          <label> </label>
                          <img src="" alt="" />
                        </div>*/}


                        <button className={style.modal__btn} onClick={() => {
                          dispatch(editMusic(song));
                          dispatch(getMusics())
                          setActive(false)
                        }}>Save</button>

                      </div>
                  </div>

          </div>
        </div>
      
      </>
    );
};

export default MusicEdit;


