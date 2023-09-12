import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMusic } from '../../store/musics/musicActions';
import style from './styles/CreateMusic.module.css';

const CreateMusic = () => {
  const [music, setMusic] = useState({
    name: "",
    artist: "",
    artwork: "",
    album: "",
    janre: "",
    url: ""
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (

    <div className={style.create_music}>
        <h3 className={style.title}>Create Card</h3>

          <div className={style.flex}>

              <div className={style.inputs__wrapper}>
              <input
                className={style.form__input}
                type="url"
                placeholder="URL of song's poster"
                onChange={(e) => setMusic({ ...music, artwork: e.target.value })}
              />
              <input
                className={style.form__input}
                type="text"
                placeholder="Artist of song"
                onChange={(e) =>
                  setMusic({ ...music, artist: e.target.value })
                }
              />
              <input
                className={style.form__input}
                type="text"
                placeholder="Name of song"
                onChange={(e) => setMusic({ ...music, title: e.target.value })}
              />
              <input
                className={style.form__input}
                type="text"
                placeholder="Album of song"
                onChange={(e) => setMusic({ ...music, album: e.target.value })}
              />
              <input
                className={style.form__input}
                type="text"
                placeholder="Janre of song"
                onChange={(e) => setMusic({ ...music, janre: e.target.value })}
              />
              <input
                className={style.form__input}
                type="url"
                placeholder="URL of song"
                onChange={(e) =>
                  setMusic({ ...music, url: e.target.value.toLowerCase() })
                }
              />
              <button
                className={style.modal__btn}
                onClick={() => {
                  dispatch(createMusic(music));
                  navigate("/homepage");
                }}
              >
                Create
              </button>

              </div>

              <div className={style.inputs__show}>
                <div className={style.poster__wrapper}>
                  <img className={style.poster} src={music.artwork} alt="" />
                </div>
                <h2 className={style.song}> {music.artist} - {music.title}</h2>
                <h2 className={style.album}> Album: {music.album} </h2>
                <h2 className={style.album}> Genre: {music.janre} </h2>
              </div>

          </div>


    </div>

  )
}

export default CreateMusic