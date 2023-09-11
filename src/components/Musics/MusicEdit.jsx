import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneMusic, editMusic } from '../../store/musics/musicActions';
import { clearOneMusicState } from "../../store/musics/musicSlice";
import style from '../../styles/index.module.css';


const MusicEdit = ({ id }) => {
    const { loading, oneMusic } = useSelector((state) => state.musics);
    const [music, setMusic] = useState(oneMusic);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneMusic({ id }));
        return () => dispatch(clearOneMusicState());
    }, [id]);

    useEffect(() => {
        if (oneMusic) {
            setMusic(oneMusic);
        }
    }, [oneMusic]);
    console.log("Received id:", id);
    return (
        <>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {music && (
                        <div className={style.music_edit}>
                            <h2>Edit form</h2>
                            <div className={style.second_div}>
                                <h4>Title:</h4>
                                <input
                                    className={style.edit_input}
                                    type="text"
                                    placeholder="Title"
                                    onChange={(e) =>
                                        setMusic({
                                            ...music,
                                            title: e.target.value,
                                        })
                                    }
                                    value={music.title}
                                />
                                <h4>Picture:</h4>
                                <input
                                    className={style.edit_input}
                                    type="url"
                                    placeholder="Picture"
                                    onChange={(e) =>
                                        setMusic({
                                            ...music,
                                            artwork: e.target.value,
                                        })
                                    }
                                    value={music.artwork}
                                />
                                <img
                                    className={style.image_prev}
                                    src={music.artwork}
                                    alt=""
                                />
                                <h4>Artist:</h4>
                                <input
                                    className={style.edit_input}
                                    type="text"
                                    placeholder="Artist"
                                    onChange={(e) =>
                                        setMusic({
                                            ...music,
                                            artist: e.target.value,
                                        })
                                    }
                                    value={music.artist}
                                />
                                <h4>Album:</h4>
                                <input
                                    className={style.edit_input}
                                    type="text"
                                    placeholder="Album"
                                    onChange={(e) =>
                                        setMusic({
                                            ...music,
                                            album: e.target.value,
                                        })
                                    }
                                    value={music.album}
                                />
                                <h4>Url Music:</h4>
                                <input
                                    className={style.edit_input}
                                    type="url"
                                    placeholder="Url Music"
                                    onChange={(e) =>
                                        setMusic({
                                            ...music,
                                            url: e.target.value,
                                        })
                                    }
                                    value={music.url}
                                />
                            </div>

                            <button
                                className={style.edit_btn}
                                onClick={() => {
                                    dispatch(editMusic(music));
                                }}
                            >
                                Save
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default MusicEdit;


