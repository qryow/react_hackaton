import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMusic } from '../../store/musics/musicActions';
import style from '../../styles/index.module.css';

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
        <h3>Create Card</h3>
        <input
          type="text"
          placeholder="Name of song"
          onChange={(e) => setMusic({ ...music, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Artist of song"
          onChange={(e) =>
            setMusic({ ...music, artist: e.target.value })
          }
        />
        <input
          type="url"
          placeholder="URL of song's poster"
          onChange={(e) => setMusic({ ...music, artwork: e.target.value })}
        />
        <input
          type="text"
          placeholder="Album of song"
          onChange={(e) => setMusic({ ...music, album: e.target.value })}
        />
        <input
          type="text"
          placeholder="Janre of song"
          onChange={(e) => setMusic({ ...music, janre: e.target.value })}
        />
        <input
          type="url"
          placeholder="URL of song"
          onChange={(e) =>
            setMusic({ ...music, url: e.target.value.toLowerCase() })
          }
        />

        <button
          onClick={() => {
            dispatch(createMusic(music));
            navigate("/homepage");
          }}
        >
          Create
        </button>
    </div>

  )
}

export default CreateMusic